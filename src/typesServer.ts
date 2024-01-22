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

export { SDP, ICECollection };
