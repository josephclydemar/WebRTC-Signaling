"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectICECandidates = exports.createAnswerSDP = exports.createOfferSDP = void 0;
const uuid_1 = require("uuid");
const servers = {
    iceServers: [
        {
            urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302', 'stun:stun3.l.google.com:19302', 'stun:stun4.l.google.com:19302'],
        },
    ],
};
async function createOfferSDP(localMediaStream) {
    let rtcPeerConnection = new RTCPeerConnection(servers);
    let offerSDP;
    let iceCandidates = [];
    localMediaStream.getTracks().forEach(function (track) {
        rtcPeerConnection.addTrack(track, localMediaStream);
    });
    try {
        offerSDP = (await rtcPeerConnection.createOffer());
        console.log('OFFER -->', offerSDP);
        await rtcPeerConnection.setLocalDescription(offerSDP);
        return offerSDP;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}
exports.createOfferSDP = createOfferSDP;
function createAnswerSDP() {
    return (0, uuid_1.v4)();
}
exports.createAnswerSDP = createAnswerSDP;
async function collectICECandidates(rtcPeerConnection, iceCandidatesCollection) {
    rtcPeerConnection.onicecandidate = function (iceEvent) {
        if (iceEvent.candidate !== undefined && iceEvent.candidate !== null) {
            iceCandidatesCollection.push(iceEvent.candidate);
            console.log('ICE -->', iceEvent);
        }
    };
}
exports.collectICECandidates = collectICECandidates;
