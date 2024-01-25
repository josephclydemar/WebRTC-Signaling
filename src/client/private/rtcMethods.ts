import { socket } from './socketListeners';
import { setRemoteMediaStream } from './userMedia';
import { ICEServers, ConfirmReadyForICE, ICECollection } from './typesClient';

const servers: ICEServers = {
    iceServers: [
        {
            urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302', 'stun:stun3.l.google.com:19302', 'stun:stun4.l.google.com:19302'],
        },
    ],
};
const rtcPeerConnection: RTCPeerConnection = createRTCPeerConnection();

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

        rtcPeerConnection.ontrack = function (streamtrack: RTCTrackEvent): void {
            setRemoteMediaStream(streamtrack.streams[0]);
        };

        Promise.all([
            trickleICE(rtcPeerConnection),
            (function (): Promise<ConfirmReadyForICE> {
                return new Promise(function (resolve): void {
                    socket.on('rtc_ready_for_remote_ice_pass', function (data: ConfirmReadyForICE): void {
                        const { message } = data;
                        if (message === 'ready-for-remote-ice') {
                            resolve(data);
                        }
                    });
                });
            })(),
        ]).then(function (result: [RTCIceCandidate[], ConfirmReadyForICE]): void {
            const { sendFrom } = result[1];
            const localICE: ICECollection = {
                sendFrom: socket.id as string,
                sendTo: sendFrom,
                type: 'offer',
                ice: result[0],
            };
            socket.emit('rtc_ice_offer', localICE);
            console.log(result);
        });

        // rtcPeerConnection.ontrack = function (streamtrack: RTCTrackEvent): void {
        //     setRemoteMediaStream(streamtrack.streams[0]);
        // };

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

        rtcPeerConnection.ontrack = function (streamtrack: RTCTrackEvent): void {
            setRemoteMediaStream(streamtrack.streams[0]);
        };

        Promise.all([
            trickleICE(rtcPeerConnection),
            (function (): Promise<ConfirmReadyForICE> {
                return new Promise(function (resolve): void {
                    socket.on('rtc_ready_for_remote_ice_pass', function (data: ConfirmReadyForICE): void {
                        const { message } = data;
                        if (message === 'ready-for-remote-ice') {
                            resolve(data);
                        }
                    });
                });
            })(),
        ]).then(function (result: [RTCIceCandidate[], ConfirmReadyForICE]): void {
            const { sendFrom } = result[1];
            const localICE: ICECollection = {
                sendFrom: socket.id as string,
                sendTo: sendFrom,
                type: 'answer',
                ice: result[0],
            };
            socket.emit('rtc_ice_answer', localICE);
            console.log(result);
        });

        // rtcPeerConnection.ontrack = function (streamtrack: RTCTrackEvent): void {
        //     setRemoteMediaStream(streamtrack.streams[0]);
        // };

        return answerSDP;
    } catch (err) {
        console.error(err);
        return null;
    }
}

async function setRemoteAnswerSDP(rtcPeerConnection: RTCPeerConnection, remoteAnswerSDP: RTCSessionDescription): Promise<void> {
    await rtcPeerConnection.setRemoteDescription(remoteAnswerSDP);
}

function trickleICE(rtcPeerConnection: RTCPeerConnection): Promise<RTCIceCandidate[]> {
    // Listen for Own ICE Candidates arrival and store locally
    return new Promise(function (resolve): void {
        let iceCandidatesCollection: RTCIceCandidate[] = [];
        rtcPeerConnection.onicecandidate = function (iceEvent: RTCPeerConnectionIceEvent): void {
            // console.log('Local ICE->', iceEvent);
            if (iceEvent.candidate !== undefined && iceEvent.candidate !== null) {
                iceCandidatesCollection.push(iceEvent.candidate);
            } else {
                resolve(iceCandidatesCollection);
            }
        };
    });
}

async function setRemoteICECandidates(rtcPeerConnection: RTCPeerConnection, remoteICECandidates: RTCIceCandidate[]): Promise<void> {
    for (let i: number = 0; i < remoteICECandidates.length; i++) {
        if (remoteICECandidates[i]) {
            await rtcPeerConnection.addIceCandidate(remoteICECandidates[i]);
        }
    }
}

export { rtcPeerConnection, createOfferSDP, createAnswerSDP, setRemoteAnswerSDP, trickleICE, setRemoteICECandidates };
