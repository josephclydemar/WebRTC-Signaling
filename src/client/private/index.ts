import { v4 } from 'uuid';
import { socket } from './socketListeners';

const messageInputBox: HTMLInputElement = document.getElementById('message-input-box') as HTMLInputElement;
const sendMessageButton: HTMLButtonElement = document.getElementById('send-message-button') as HTMLButtonElement;

const showSocketIDButton: HTMLButtonElement = document.getElementById('show-id') as HTMLButtonElement;
const sendSDPAnswerButton: HTMLButtonElement = document.getElementById('send-sdp-answer-button') as HTMLButtonElement;

showSocketIDButton.onclick = function (): void {
    const mySocketId: HTMLHeadingElement = document.getElementById('my-id') as HTMLHeadingElement;
    mySocketId.textContent = socket.id as string;
};

sendMessageButton.onclick = function (): void {
    const message: string = messageInputBox.value;
    socket.emit('message', message);
    messageInputBox.value = '';
};

sendSDPAnswerButton.onclick = function (): void {
    socket.emit('rtc_sdp_answer', {
        sendFrom: socket.id,
        type: 'offer',
        sdp: v4(),
    });
};
