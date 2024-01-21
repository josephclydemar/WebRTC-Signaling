type SDP = {
    sendFrom: string;
    sendTo: string;
    type: string;
    sdp: string;
};

type ICE = {
    sendFrom: string;
    sendTo: string;
    type: string;
    ice: string[];
};

export { SDP, ICE };
