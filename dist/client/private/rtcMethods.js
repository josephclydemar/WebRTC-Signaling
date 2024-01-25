"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRemoteICECandidates = exports.trickleICE = exports.setRemoteAnswerSDP = exports.createAnswerSDP = exports.createOfferSDP = exports.rtcPeerConnection = void 0;
const socketListeners_1 = require("./socketListeners");
const userMedia_1 = require("./userMedia");
const servers = {
    iceServers: [
        {
            urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302', 'stun:stun3.l.google.com:19302', 'stun:stun4.l.google.com:19302'],
        },
    ],
};
const rtcPeerConnection = createRTCPeerConnection();
exports.rtcPeerConnection = rtcPeerConnection;
function createRTCPeerConnection() {
    return new RTCPeerConnection(servers);
}
async function createOfferSDP(localMediaStream, rtcPeerConnection) {
    let offerSDP;
    localMediaStream.getTracks().forEach(function (track) {
        rtcPeerConnection.addTrack(track, localMediaStream);
    });
    try {
        offerSDP = (await rtcPeerConnection.createOffer());
        console.log('OFFER -->', offerSDP);
        await rtcPeerConnection.setLocalDescription(offerSDP);
        rtcPeerConnection.ontrack = function (streamtrack) {
            (0, userMedia_1.setRemoteMediaStream)(streamtrack.streams[0]);
        };
        Promise.all([
            trickleICE(rtcPeerConnection),
            (function () {
                return new Promise(function (resolve) {
                    socketListeners_1.socket.on('rtc_ready_for_remote_ice_pass', function (data) {
                        const { message } = data;
                        if (message === 'ready-for-remote-ice') {
                            resolve(data);
                        }
                    });
                });
            })(),
        ]).then(function (result) {
            const { sendFrom } = result[1];
            const localICE = {
                sendFrom: socketListeners_1.socket.id,
                sendTo: sendFrom,
                type: 'offer',
                ice: result[0],
            };
            socketListeners_1.socket.emit('rtc_ice_offer', localICE);
            console.log(result);
        });
        return offerSDP;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}
exports.createOfferSDP = createOfferSDP;
async function createAnswerSDP(localMediaStream, rtcPeerConnection, remoteOfferSDP) {
    let answerSDP;
    localMediaStream.getTracks().forEach(function (track) {
        rtcPeerConnection.addTrack(track, localMediaStream);
    });
    try {
        await rtcPeerConnection.setRemoteDescription(remoteOfferSDP);
        answerSDP = (await rtcPeerConnection.createAnswer({}));
        await rtcPeerConnection.setLocalDescription(answerSDP);
        rtcPeerConnection.ontrack = function (streamtrack) {
            (0, userMedia_1.setRemoteMediaStream)(streamtrack.streams[0]);
        };
        Promise.all([
            trickleICE(rtcPeerConnection),
            (function () {
                return new Promise(function (resolve) {
                    socketListeners_1.socket.on('rtc_ready_for_remote_ice_pass', function (data) {
                        const { message } = data;
                        if (message === 'ready-for-remote-ice') {
                            resolve(data);
                        }
                    });
                });
            })(),
        ]).then(function (result) {
            const { sendFrom } = result[1];
            const localICE = {
                sendFrom: socketListeners_1.socket.id,
                sendTo: sendFrom,
                type: 'answer',
                ice: result[0],
            };
            socketListeners_1.socket.emit('rtc_ice_answer', localICE);
            console.log(result);
        });
        return answerSDP;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}
exports.createAnswerSDP = createAnswerSDP;
async function setRemoteAnswerSDP(rtcPeerConnection, remoteAnswerSDP) {
    await rtcPeerConnection.setRemoteDescription(remoteAnswerSDP);
}
exports.setRemoteAnswerSDP = setRemoteAnswerSDP;
function trickleICE(rtcPeerConnection) {
    return new Promise(function (resolve) {
        let iceCandidatesCollection = [];
        rtcPeerConnection.onicecandidate = function (iceEvent) {
            if (iceEvent.candidate !== undefined && iceEvent.candidate !== null) {
                iceCandidatesCollection.push(iceEvent.candidate);
            }
            else {
                resolve(iceCandidatesCollection);
            }
        };
    });
}
exports.trickleICE = trickleICE;
async function setRemoteICECandidates(rtcPeerConnection, remoteICECandidates) {
    for (let i = 0; i < remoteICECandidates.length; i++) {
        if (remoteICECandidates[i]) {
            await rtcPeerConnection.addIceCandidate(remoteICECandidates[i]);
        }
    }
}
exports.setRemoteICECandidates = setRemoteICECandidates;
