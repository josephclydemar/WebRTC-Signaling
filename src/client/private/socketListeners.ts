import * as io from 'socket.io-client';
import { v4 } from 'uuid';
import { SDP } from './types';
import { resetOtherClientsList, setLocalSDP, setRemoteSDP } from './domControllers';

const socket: io.Socket = io.connect('http://192.168.1.19:8600');

// Receives an Offer from a remote peer
socket.on('rtc_sdp_offer_pass', function (data: any): void {
    const { sendFrom, type, sdp } = data;
    const answerSDP: SDP = { sendFrom: socket.id as string, sendTo: sendFrom, type: 'answer', sdp: v4() };
    setLocalSDP(answerSDP.sendTo, answerSDP.type, answerSDP.sdp);
    setRemoteSDP(sendFrom, type, sdp);
    setTimeout(function (): void {
        socket.emit('rtc_sdp_answer', answerSDP);
    }, 4500);
    console.log(data);
});

// Receives an Answer from a remote peer
socket.on('rtc_sdp_answer_pass', function (data: any): void {
    const { sendFrom, type, sdp } = data;
    setRemoteSDP(sendFrom, type, sdp);
    socket.emit('rtc_sdp_answer_received_confirmation', 'sdp-answer-received');
    console.log(data);
});

socket.on('for_me', function (data: any): void {
    console.log(data);
    resetOtherClientsList(data);
});

socket.on('new_client', function (data: any): void {
    console.log(data);
    resetOtherClientsList(
        data.filter(function (item: string): boolean {
            return item !== socket.id;
        }),
    );
});

socket.on('client_disconnect', function (data: any): void {
    console.log(data);
    resetOtherClientsList(data);
});

export { socket };
