"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = void 0;
const io = __importStar(require("socket.io-client"));
const uuid_1 = require("uuid");
const domControllers_1 = require("./domControllers");
const socket = io.connect('http://192.168.1.19:8600');
exports.socket = socket;
socket.on('rtc_sdp_offer_pass', function (data) {
    const { sendFrom, type, sdp } = data;
    const answerSDP = { sendFrom: socket.id, sendTo: sendFrom, type: 'answer', sdp: (0, uuid_1.v4)() };
    (0, domControllers_1.setLocalSDP)(answerSDP.sendTo, answerSDP.type, answerSDP.sdp);
    (0, domControllers_1.setRemoteSDP)(sendFrom, type, sdp);
    setTimeout(function () {
        socket.emit('rtc_sdp_answer', answerSDP);
    }, 4500);
    console.log(data);
});
socket.on('rtc_sdp_answer_pass', function (data) {
    const { sendFrom, type, sdp } = data;
    (0, domControllers_1.setRemoteSDP)(sendFrom, type, sdp);
    socket.emit('rtc_sdp_answer_received_confirmation', 'sdp-answer-received');
    console.log(data);
});
socket.on('for_me', function (data) {
    console.log(data);
    (0, domControllers_1.resetOtherClientsList)(data);
});
socket.on('new_client', function (data) {
    console.log(data);
    (0, domControllers_1.resetOtherClientsList)(data.filter(function (item) {
        return item !== socket.id;
    }));
});
socket.on('client_disconnect', function (data) {
    console.log(data);
    (0, domControllers_1.resetOtherClientsList)(data);
});
