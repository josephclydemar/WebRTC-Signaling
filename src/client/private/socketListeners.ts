import * as io from 'socket.io-client';
import { SDP, ICECollection } from './typesClient';
import { resetOtherClientsList, setLocalSDPInDOM, setRemoteSDPInDom, setRemotePeerICEListInDOM } from './domControllers';
import { getLocalMediaStream } from './userMedia';
import { rtcPeerConnection, createAnswerSDP, iceCandidatesCollection, isIceCandidatesGatheringComplete } from './rtcMethods';

const DEVELOPMENT_HOSTNAME = 'https://192.168.1.2:8600';
// const PRODUCTION_HOSTNAME = '';

const socket: io.Socket = io.connect(DEVELOPMENT_HOSTNAME);

// Receives an Offer from a remote peer
socket.on('rtc_sdp_offer_pass', async function (data: SDP): Promise<void> {
    const { sendFrom, type, sdp } = data;
    let localStream: MediaStream = await getLocalMediaStream(false, true);
    const createdAnswer: RTCSessionDescription = (await createAnswerSDP(localStream, rtcPeerConnection, data.sdp)) as RTCSessionDescription;
    const answerSDP: SDP = {
        sendFrom: socket.id as string,
        sendTo: sendFrom,
        type: 'answer',
        sdp: createdAnswer,
    };
    setLocalSDPInDOM(answerSDP.sendTo, answerSDP.type, answerSDP.sdp.sdp);
    setRemoteSDPInDom(sendFrom, type, sdp.sdp);
    socket.emit('rtc_sdp_answer', answerSDP);
    console.log(data);
});

// Receives an Answer from a remote peer
socket.on('rtc_sdp_answer_pass', function (data: SDP): void {
    const { sendFrom, type, sdp } = data;
    // collectICECandidates(rtcPeerConnection).then(function (result: RTCIceCandidate[]): void {
    //     const localICECandidates: ICECollection = {
    //         sendFrom: socket.id as string,
    //         sendTo: sendFrom,
    //         type: 'offer',
    //         ice: result,
    //     };
    //     socket.emit('rtc_ice_offer', localICECandidates);
    // });
    setRemoteSDPInDom(sendFrom, type, sdp.sdp);
    socket.emit('rtc_sdp_answer_received_confirmation', {
        sendFrom: socket.id,
        sendTo: sendFrom,
        message: 'sdp-answer-received',
    });

    console.log(data);
});

// Receive offerer's confirmation that answer SDP is received
socket.on('rtc_sdp_answer_received_confirmation', function (data: any): void {
    const { sendFrom, message } = data;
    if (message === 'sdp-answer-received') {
        // collectICECandidates(rtcPeerConnection).then(function (result: RTCIceCandidate[]): void {
        //     const localICECandidates: ICECollection = {
        //         sendFrom: socket.id as string,
        //         sendTo: sendFrom,
        //         type: 'answer',
        //         ice: result,
        //     };
        //     socket.emit('rtc_ice_answer', localICECandidates);
        // });
    }
});

// Receive ICE Candidates from offerer remote peer
socket.on('rtc_ice_offer_pass', function (data: ICECollection): void {
    // const { sendFrom, ice } = data;
    setRemotePeerICEListInDOM(data);
    console.log(data);
});

// Receive ICE Candidates from answerer remote peer
socket.on('rtc_ice_answer_pass', function (data: ICECollection): void {
    // const { sendFrom, ice } = data;
    setRemotePeerICEListInDOM(data);
    console.log(data);
});

socket.on('for_me', function (data: string[]): void {
    resetOtherClientsList(data);
});

socket.on('new_client', function (data: string[]): void {
    resetOtherClientsList(
        data.filter(function (item: string): boolean {
            return item !== socket.id;
        }),
    );
});

socket.on('client_disconnect', function (data: string[]): void {
    console.log(data);
    resetOtherClientsList(data);
});

export { socket };
