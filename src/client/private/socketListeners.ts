import * as io from 'socket.io-client';
import { v4 } from 'uuid';
import { ICE, SDP } from './typesClient';
import { resetOtherClientsList, setLocalSDP, setRemotePeerICEList, setRemoteSDP } from './domControllers';
import { generateICECandidates } from './rtcMethods';

const socket: io.Socket = io.connect('http://192.168.1.19:8600');

// Receives an Offer from a remote peer
socket.on('rtc_sdp_offer_pass', function (data: SDP): void {
    const { sendFrom, type, sdp } = data;
    const answerSDP: SDP = { sendFrom: socket.id as string, sendTo: sendFrom, type: 'answer', sdp: v4() };
    setLocalSDP(answerSDP.sendTo, answerSDP.type, answerSDP.sdp);
    setRemoteSDP(sendFrom, type, sdp);
    setTimeout(function (): void {
        socket.emit('rtc_sdp_answer', answerSDP);
    }, 2500);
    console.log(data);
});

// Receives an Answer from a remote peer
socket.on('rtc_sdp_answer_pass', function (data: SDP): void {
    const { sendFrom, type, sdp } = data;
    setRemoteSDP(sendFrom, type, sdp);
    socket.emit('rtc_sdp_answer_received_confirmation', { sendFrom: socket.id, sendTo: sendFrom, message: 'sdp-answer-received' });
    const localICECandidates: ICE = {
        sendFrom: socket.id as string,
        sendTo: sendFrom,
        type: 'offer',
        ice: generateICECandidates(),
    };
    socket.emit('rtc_ice_offer', localICECandidates);
    console.log(data);
});

socket.on('rtc_sdp_answer_received_confirmation', function (data: any): void {
    const { sendFrom, message } = data;
    if (message === 'sdp-answer-received') {
        const localICECandidates: ICE = {
            sendFrom: socket.id as string,
            sendTo: sendFrom,
            type: 'answer',
            ice: generateICECandidates(),
        };
        socket.emit('rtc_ice_answer', localICECandidates);
    }
});

socket.on('rtc_ice_offer_pass', function (data: ICE): void {
    // const { sendFrom, ice } = data;
    setRemotePeerICEList(data);
    console.log(data);
});

socket.on('rtc_ice_answer_pass', function (data: ICE): void {
    // const { sendFrom, ice } = data;
    setRemotePeerICEList(data);
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
