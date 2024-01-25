type SDP = {
    sendFrom: string;
    sendTo: string;
    type: string;
    sdp: RTCSessionDescription;
};

type ICECollection = {
    sendFrom: string;
    sendTo: string;
    type: string;
    ice: RTCIceCandidate[];
};

type ConfirmReadyForICE = {
    sendFrom: string;
    sendTo: string;
    message: string;
};

export { SDP, ICECollection, ConfirmReadyForICE };
