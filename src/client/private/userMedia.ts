async function getLocalMediaStream(): Promise<MediaStream> {
    let localMediaStream: MediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    return localMediaStream;
}

async function setRemoteMediaStream(peerConnectionMediaStream: MediaStream): Promise<void> {
    let remoteMediaStream: MediaStream = new MediaStream();
    peerConnectionMediaStream.getTracks().forEach(function (track: MediaStreamTrack): void {
        remoteMediaStream.addTrack(track);
    });
}
