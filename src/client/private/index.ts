import * as io from 'socket.io-client';
import { v4 } from 'uuid';

const socket = io.connect('http://192.168.1.19:7800');

const messageInputBox: HTMLInputElement = document.getElementById('message-input-box') as HTMLInputElement;
const sendMessageButton: HTMLButtonElement = document.getElementById('send-message-button') as HTMLButtonElement;

const showSocketIdButton: HTMLButtonElement = document.getElementById('show-id') as HTMLButtonElement;

const sendSDPButton: HTMLButtonElement = document.getElementById('send-sdp-button') as HTMLButtonElement;

showSocketIdButton.onclick = function () {
    const mySocketId: HTMLHeadingElement = document.getElementById('my-id') as HTMLHeadingElement;
    mySocketId.textContent = socket.id as string;
};

sendMessageButton.onclick = function () {
    const message: string = messageInputBox.value;
    socket.emit('message', message);
    messageInputBox.value = '';
};

sendSDPButton.onclick = function () {
    socket.emit('rtc_sdp', {
        client_id: socket.id,
        type: 'offer',
        sdp: v4(),
    });
};

socket.on('rtc_sdp_broadcast', function (data) {
    const receivedSDP: HTMLHeadingElement = document.getElementById('sdp') as HTMLHeadingElement;
    const SDPSender: HTMLHeadingElement = document.getElementById('sdp-sender') as HTMLHeadingElement;
    const SDPType: HTMLHeadingElement = document.getElementById('sdp-type') as HTMLHeadingElement;
    SDPSender.textContent = `Sender: ${data['client_id']}`;
    SDPType.textContent = `Type: ${data['type']}`;
    receivedSDP.textContent = `SDP: ${data['sdp']}`;
    console.log(data);
});
