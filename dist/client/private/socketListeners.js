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
const domControllers_1 = require("./domControllers");
const userMedia_1 = require("./userMedia");
const rtcMethods_1 = require("./rtcMethods");
const DEVELOPMENT_HOSTNAME = 'https://rtc-signaling-experiment.onrender.com';
const socket = io.connect(DEVELOPMENT_HOSTNAME);
exports.socket = socket;
socket.on('rtc_sdp_offer_pass', async function (data) {
    const { sendFrom, type, sdp } = data;
    let localStream = await (0, userMedia_1.getLocalMediaStream)();
    const createdAnswer = (await (0, rtcMethods_1.createAnswerSDP)(localStream, rtcMethods_1.rtcPeerConnection, data.sdp));
    const answerSDP = {
        sendFrom: socket.id,
        sendTo: sendFrom,
        type: 'answer',
        sdp: createdAnswer,
    };
    (0, domControllers_1.setLocalSDPInDOM)(answerSDP.sendTo, answerSDP.type, answerSDP.sdp.sdp);
    (0, domControllers_1.setRemoteSDPInDom)(sendFrom, type, sdp.sdp);
    socket.emit('rtc_sdp_answer', answerSDP);
    socket.emit('rtc_ready_for_remote_ice', {
        sendFrom: socket.id,
        sendTo: sendFrom,
        message: 'ready-for-remote-ice',
    });
});
socket.on('rtc_sdp_answer_pass', async function (data) {
    const { sendFrom, type, sdp } = data;
    await (0, rtcMethods_1.setRemoteAnswerSDP)(rtcMethods_1.rtcPeerConnection, sdp);
    (0, domControllers_1.setRemoteSDPInDom)(sendFrom, type, sdp.sdp);
    socket.emit('rtc_ready_for_remote_ice', {
        sendFrom: socket.id,
        sendTo: sendFrom,
        message: 'ready-for-remote-ice',
    });
});
socket.on('rtc_ice_offer_pass', async function (data) {
    await (0, rtcMethods_1.setRemoteICECandidates)(rtcMethods_1.rtcPeerConnection, data.ice);
    (0, domControllers_1.setRemotePeerICEListInDOM)(data);
    console.log('REMOTE ICE ----->', data);
});
socket.on('rtc_ice_answer_pass', async function (data) {
    (0, domControllers_1.setRemotePeerICEListInDOM)(data);
    await (0, rtcMethods_1.setRemoteICECandidates)(rtcMethods_1.rtcPeerConnection, data.ice);
    console.log('REMOTE ICE ----->', data);
});
socket.on('for_me', function (data) {
    (0, domControllers_1.resetOtherClientsList)(data);
});
socket.on('new_client', function (data) {
    (0, domControllers_1.resetOtherClientsList)(data.filter(function (item) {
        return item !== socket.id;
    }));
});
socket.on('client_disconnect', function (data) {
    console.log(data);
    (0, domControllers_1.resetOtherClientsList)(data);
});
