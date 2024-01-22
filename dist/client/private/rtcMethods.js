"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectICECandidates = exports.createAnswerSDP = exports.createOfferSDP = exports.isIceCandidatesGatheringComplete = exports.iceCandidatesCollection = exports.rtcPeerConnection = void 0;
const servers = {
    iceServers: [
        {
            urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302', 'stun:stun3.l.google.com:19302', 'stun:stun4.l.google.com:19302'],
        },
    ],
};
const rtcPeerConnection = createRTCPeerConnection();
exports.rtcPeerConnection = rtcPeerConnection;
let iceCandidatesCollection = [];
exports.iceCandidatesCollection = iceCandidatesCollection;
let isIceCandidatesGatheringComplete = false;
exports.isIceCandidatesGatheringComplete = isIceCandidatesGatheringComplete;
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
        rtcPeerConnection.onicecandidate = function (iceEvent) {
            console.log('Local ICE->', iceCandidatesCollection);
            if (iceEvent.candidate !== undefined && iceEvent.candidate !== null) {
                iceCandidatesCollection.push(iceEvent.candidate);
            }
            else {
                exports.isIceCandidatesGatheringComplete = isIceCandidatesGatheringComplete = true;
            }
        };
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
        rtcPeerConnection.onicecandidate = function (iceEvent) {
            console.log('Local ICE->', iceCandidatesCollection);
            if (iceEvent.candidate !== undefined && iceEvent.candidate !== null) {
                iceCandidatesCollection.push(iceEvent.candidate);
            }
            else {
                exports.isIceCandidatesGatheringComplete = isIceCandidatesGatheringComplete = true;
            }
        };
        return answerSDP;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}
exports.createAnswerSDP = createAnswerSDP;
function collectICECandidates(rtcPeerConnection) {
    return new Promise(function (resolve) {
        let iceCandidatesCollection = [];
        rtcPeerConnection.onicecandidate = function (iceEvent) {
            console.log('Local ICE->', iceEvent);
            if (iceEvent.candidate !== undefined && iceEvent.candidate !== null) {
                iceCandidatesCollection.push(iceEvent.candidate);
            }
            else {
                resolve(iceCandidatesCollection);
            }
        };
    });
}
exports.collectICECandidates = collectICECandidates;
