import { v4 } from 'uuid';
import { ICEServers } from './typesClient';

const servers: ICEServers = {
    iceServers: [
        {
            urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302', 'stun:stun3.l.google.com:19302', 'stun:stun4.l.google.com:19302'],
        },
    ],
};

async function createOfferSDP(localMediaStream: MediaStream): Promise<RTCSessionDescription | null> {
    let rtcPeerConnection: RTCPeerConnection = new RTCPeerConnection(servers);
    let offerSDP: RTCSessionDescription;

    // Add local stream tracks to RTC Connection
    localMediaStream.getTracks().forEach(function (track: MediaStreamTrack): void {
        rtcPeerConnection.addTrack(track, localMediaStream);
    });

    try {
        // Create SDP Offer
        offerSDP = (await rtcPeerConnection.createOffer()) as RTCSessionDescription;
        console.log('OFFER -->', offerSDP);

        // Set SDP Offer as Local Desciption
        await rtcPeerConnection.setLocalDescription(offerSDP);

        return offerSDP;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function createAnswerSDP(localMediaStream: MediaStream, remoteOfferSDP: RTCSessionDescription): Promise<RTCSessionDescription | null> {
    let rtcPeerConnection: RTCPeerConnection = new RTCPeerConnection(servers);
    let answerSDP: RTCSessionDescription;

    localMediaStream.getTracks().forEach(function (track: MediaStreamTrack): void {
        rtcPeerConnection.addTrack(track, localMediaStream);
    });

    try {
        await rtcPeerConnection.setRemoteDescription(remoteOfferSDP);
        answerSDP = (await rtcPeerConnection.createAnswer({})) as RTCSessionDescription;
        await rtcPeerConnection.setLocalDescription(answerSDP);
        return answerSDP;
    } catch (err) {
        console.error(err);
        return null;
    }
}

function collectICECandidates(rtcPeerConnection: RTCPeerConnection): Promise<RTCIceCandidate[]> {
    // Listen for Own ICE Candidates arrival and store locally
    return new Promise(function (resolve, reject): void {
        let iceCandidatesCollection: RTCIceCandidate[] = [];
        rtcPeerConnection.onicecandidate = function (iceEvent: RTCPeerConnectionIceEvent): void {
            if (iceEvent.candidate !== undefined && iceEvent.candidate !== null) {
                iceCandidatesCollection.push(iceEvent.candidate);
                // console.log('ICE -->', iceEvent);
            } else {
                resolve(iceCandidatesCollection);
            }
        };
    });
}

export { createOfferSDP, createAnswerSDP, collectICECandidates };
