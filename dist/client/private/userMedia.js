"use strict";
async function getLocalMediaStream() {
    let localMediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    return localMediaStream;
}
async function setRemoteMediaStream(peerConnectionMediaStream) {
    let remoteMediaStream = new MediaStream();
    peerConnectionMediaStream.getTracks().forEach(function (track) {
        remoteMediaStream.addTrack(track);
    });
}
