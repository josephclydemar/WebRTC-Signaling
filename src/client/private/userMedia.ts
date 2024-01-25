async function getLocalMediaStream(): Promise<MediaStream> {
    const localVideo: HTMLVideoElement = document.getElementById('local-video') as HTMLVideoElement;
    let localMediaStream: MediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
    });
    localVideo.srcObject = localMediaStream;
    return localMediaStream;
}

async function setRemoteMediaStream(remotePeerMediaStream: MediaStream): Promise<void> {
    const remoteVideo: HTMLVideoElement = document.getElementById('remote-video') as HTMLVideoElement;
    let remoteMediaStream: MediaStream = new MediaStream();
    remotePeerMediaStream.getTracks().forEach(function (track: MediaStreamTrack): void {
        remoteMediaStream.addTrack(track);
    });
    remoteVideo.srcObject = remoteMediaStream;
}

export { getLocalMediaStream, setRemoteMediaStream };
