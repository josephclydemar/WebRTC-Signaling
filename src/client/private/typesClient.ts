type SDP = {
    sendFrom: string;
    sendTo: string;
    type: string;
    sdp: string;
};

type ICECollection = {
    sendFrom: string;
    sendTo: string;
    type: string;
    ice: string[];
};

export { SDP, ICECollection };
