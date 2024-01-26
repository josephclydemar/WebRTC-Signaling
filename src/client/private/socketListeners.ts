import * as io from 'socket.io-client';
import { SDP, ICECollection } from './typesClient';
import { resetOtherClientsList, setLocalSDPInDOM, setRemoteSDPInDom, setRemotePeerICEListInDOM } from './domControllers';
import { getLocalMediaStream } from './userMedia';
import { rtcPeerConnection, createAnswerSDP, setRemoteAnswerSDP, setRemoteICECandidates } from './rtcMethods';

// const DEVELOPMENT_HOSTNAME = 'https://192.168.1.2:8600';
const DEVELOPMENT_HOSTNAME = 'https://rtc-signaling-experiment.onrender.com';
// const PRODUCTION_HOSTNAME = '';

const socket: io.Socket = io.connect(DEVELOPMENT_HOSTNAME);

// Receives an Offer from a remote peer
socket.on('rtc_sdp_offer_pass', async function (data: SDP): Promise<void> {
    const { sendFrom, type, sdp } = data;
    let localStream: MediaStream = await getLocalMediaStream();
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
    socket.emit('rtc_ready_for_remote_ice', {
        sendFrom: socket.id,
        sendTo: sendFrom,
        message: 'ready-for-remote-ice',
    });
    // console.log(data);
});

// Receives an Answer from a remote peer
socket.on('rtc_sdp_answer_pass', async function (data: SDP): Promise<void> {
    const { sendFrom, type, sdp } = data;
    await setRemoteAnswerSDP(rtcPeerConnection, sdp);
    setRemoteSDPInDom(sendFrom, type, sdp.sdp);
    socket.emit('rtc_ready_for_remote_ice', {
        sendFrom: socket.id,
        sendTo: sendFrom,
        message: 'ready-for-remote-ice',
    });
    // console.log(data);
});

// Receive ICE Candidates from offerer remote peer
socket.on('rtc_ice_offer_pass', async function (data: ICECollection): Promise<void> {
    // const { sendFrom, ice } = data;
    await setRemoteICECandidates(rtcPeerConnection, data.ice);
    setRemotePeerICEListInDOM(data);
    console.log('REMOTE ICE ----->', data);
});

// Receive ICE Candidates from answerer remote peer
socket.on('rtc_ice_answer_pass', async function (data: ICECollection): Promise<void> {
    // const { sendFrom, ice } = data;
    setRemotePeerICEListInDOM(data);
    await setRemoteICECandidates(rtcPeerConnection, data.ice);
    console.log('REMOTE ICE ----->', data);
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
