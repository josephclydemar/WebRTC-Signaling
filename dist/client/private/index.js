"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socketListeners_1 = require("./socketListeners");
const showSocketIDButton = document.getElementById('show-id');
showSocketIDButton.onclick = function () {
    const mySocketId = document.getElementById('my-id');
    mySocketId.textContent = `My ID: ${socketListeners_1.socket.id}`;
};
