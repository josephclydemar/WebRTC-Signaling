"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRemoteMediaStream = exports.getLocalMediaStream = void 0;
async function getLocalMediaStream() {
    const localVideo = document.getElementById('local-video');
    let localMediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
    });
    localVideo.srcObject = localMediaStream;
    return localMediaStream;
}
exports.getLocalMediaStream = getLocalMediaStream;
async function setRemoteMediaStream(remotePeerMediaStream) {
    const remoteVideo = document.getElementById('remote-video');
    let remoteMediaStream = new MediaStream();
    remotePeerMediaStream.getTracks().forEach(function (track) {
        remoteMediaStream.addTrack(track);
    });
    remoteVideo.srcObject = remoteMediaStream;
}
exports.setRemoteMediaStream = setRemoteMediaStream;
