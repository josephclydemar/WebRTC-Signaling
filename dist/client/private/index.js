"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const socketListeners_1 = require("./socketListeners");
const messageInputBox = document.getElementById('message-input-box');
const sendMessageButton = document.getElementById('send-message-button');
const showSocketIDButton = document.getElementById('show-id');
const sendSDPAnswerButton = document.getElementById('send-sdp-answer-button');
showSocketIDButton.onclick = function () {
    const mySocketId = document.getElementById('my-id');
    mySocketId.textContent = socketListeners_1.socket.id;
};
sendMessageButton.onclick = function () {
    const message = messageInputBox.value;
    socketListeners_1.socket.emit('message', message);
    messageInputBox.value = '';
};
sendSDPAnswerButton.onclick = function () {
    socketListeners_1.socket.emit('rtc_sdp_answer', {
        sendFrom: socketListeners_1.socket.id,
        type: 'offer',
        sdp: (0, uuid_1.v4)(),
    });
};
