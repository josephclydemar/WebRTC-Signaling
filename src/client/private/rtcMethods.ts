import { ICEServers } from './typesClient';

const servers: ICEServers = {
    iceServers: [
        {
            urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302', 'stun:stun3.l.google.com:19302', 'stun:stun4.l.google.com:19302'],
        },
    ],
};
const rtcPeerConnection: RTCPeerConnection = createRTCPeerConnection();
let iceCandidatesCollection: RTCIceCandidate[] = [];
let isIceCandidatesGatheringComplete: boolean = false;

function createRTCPeerConnection(): RTCPeerConnection {
    return new RTCPeerConnection(servers);
}

async function createOfferSDP(localMediaStream: MediaStream, rtcPeerConnection: RTCPeerConnection): Promise<RTCSessionDescription | null> {
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

        rtcPeerConnection.onicecandidate = function (iceEvent: RTCPeerConnectionIceEvent): void {
            console.log('Local ICE->', iceCandidatesCollection);
            if (iceEvent.candidate !== undefined && iceEvent.candidate !== null) {
                iceCandidatesCollection.push(iceEvent.candidate);
            } else {
                isIceCandidatesGatheringComplete = true;
            }
        };
        return offerSDP;
    } catch (err) {
        console.error(err);
        return null;
    }
}

async function createAnswerSDP(
    localMediaStream: MediaStream,
    rtcPeerConnection: RTCPeerConnection,
    remoteOfferSDP: RTCSessionDescription,
): Promise<RTCSessionDescription | null> {
    let answerSDP: RTCSessionDescription;

    localMediaStream.getTracks().forEach(function (track: MediaStreamTrack): void {
        rtcPeerConnection.addTrack(track, localMediaStream);
    });

    try {
        await rtcPeerConnection.setRemoteDescription(remoteOfferSDP);
        answerSDP = (await rtcPeerConnection.createAnswer({})) as RTCSessionDescription;
        await rtcPeerConnection.setLocalDescription(answerSDP);

        rtcPeerConnection.onicecandidate = function (iceEvent: RTCPeerConnectionIceEvent): void {
            console.log('Local ICE->', iceCandidatesCollection);
            if (iceEvent.candidate !== undefined && iceEvent.candidate !== null) {
                iceCandidatesCollection.push(iceEvent.candidate);
            } else {
                isIceCandidatesGatheringComplete = true;
            }
        };
        return answerSDP;
    } catch (err) {
        console.error(err);
        return null;
    }
}

function collectICECandidates(rtcPeerConnection: RTCPeerConnection): Promise<RTCIceCandidate[]> {
    // Listen for Own ICE Candidates arrival and store locally
    return new Promise(function (resolve): void {
        // let iceCandidatesCollection: (RTCIceCandidate | null)[] = [];
        let iceCandidatesCollection: RTCIceCandidate[] = [];
        rtcPeerConnection.onicecandidate = function (iceEvent: RTCPeerConnectionIceEvent): void {
            console.log('Local ICE->', iceEvent);
            // if (iceCandidatesCollection.length < 3) {
            //     if (iceEvent.candidate !== undefined && iceEvent.candidate !== null) {
            //         iceCandidatesCollection.push(iceEvent.candidate);
            //     } else {
            //         iceCandidatesCollection.push(null);
            //     }
            // } else {
            //     iceCandidatesCollection = iceCandidatesCollection.filter(function (item: RTCIceCandidate | null): boolean {
            //         return item !== null;
            //     });
            //     const x: RTCIceCandidate[] = iceCandidatesCollection as RTCIceCandidate[];
            //     resolve(x);
            // }

            if (iceEvent.candidate !== undefined && iceEvent.candidate !== null) {
                iceCandidatesCollection.push(iceEvent.candidate);
            } else {
                resolve(iceCandidatesCollection);
            }
        };
    });
}

export { rtcPeerConnection, iceCandidatesCollection, isIceCandidatesGatheringComplete, createOfferSDP, createAnswerSDP, collectICECandidates };
