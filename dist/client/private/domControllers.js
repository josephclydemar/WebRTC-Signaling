"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRemotePeerICEListInDOM = exports.setRemoteSDPInDom = exports.setLocalSDPInDOM = exports.resetOtherClientsList = void 0;
const socketListeners_1 = require("./socketListeners");
const rtcMethods_1 = require("./rtcMethods");
const userMedia_1 = require("./userMedia");
function resetOtherClientsList(otherClients) {
    const otherClientsTableBody = document.getElementById('other-clients');
    otherClientsTableBody.innerHTML = '';
    for (let i = 0; i < otherClients.length; i++) {
        let tr = document.createElement('tr');
        let tdID = document.createElement('td');
        let tdCall = document.createElement('td');
        let callButton = document.createElement('button');
        callButton.classList.add('my-peers');
        callButton.textContent = 'Call';
        callButton.onclick = async function () {
            let localStream = await (0, userMedia_1.getLocalMediaStream)(true, false);
            const createdOffer = (await (0, rtcMethods_1.createOfferSDP)(localStream, rtcMethods_1.rtcPeerConnection));
            const offerSDP = {
                sendFrom: socketListeners_1.socket.id,
                sendTo: otherClients[i],
                type: 'offer',
                sdp: createdOffer,
            };
            setLocalSDPInDOM(offerSDP.sendTo, offerSDP.type, offerSDP.sdp.sdp);
            socketListeners_1.socket.emit('rtc_sdp_offer', offerSDP);
        };
        tdID.textContent = otherClients[i];
        tdCall.appendChild(callButton);
        tr.appendChild(tdID);
        tr.appendChild(tdCall);
        otherClientsTableBody.appendChild(tr);
    }
}
exports.resetOtherClientsList = resetOtherClientsList;
function setRemoteSDPInDom(sendFrom, type, sdp) {
    const receivedSDP = document.getElementById('sdp-remote');
    const SDPSender = document.getElementById('sdp-remote-sender');
    const SDPType = document.getElementById('sdp-remote-type');
    SDPSender.textContent = `Sender ID: ${sendFrom}`;
    SDPType.textContent = `Type: ${type}`;
    receivedSDP.textContent = `SDP: ${sdp}`;
}
exports.setRemoteSDPInDom = setRemoteSDPInDom;
function setLocalSDPInDOM(sendTo, type, sdp) {
    const receivedSDP = document.getElementById('sdp-local');
    const SDPSender = document.getElementById('sdp-local-sender');
    const SDPType = document.getElementById('sdp-local-type');
    SDPSender.textContent = `Receiver ID: ${sendTo}`;
    SDPType.textContent = `Type: ${type}`;
    receivedSDP.textContent = `SDP: ${sdp}`;
}
exports.setLocalSDPInDOM = setLocalSDPInDOM;
function setRemotePeerICEListInDOM(remoteICE) {
    const remotePeerICEList = document.getElementById('remote-peer-ice');
    remotePeerICEList.innerHTML = '';
    for (let i = 0; i < remoteICE.ice.length; i++) {
        let tr = document.createElement('tr');
        let tdID = document.createElement('td');
        let tdType = document.createElement('td');
        let tdICE = document.createElement('td');
        tdID.textContent = remoteICE.sendFrom;
        tdType.textContent = remoteICE.type;
        tdICE.textContent = remoteICE.ice[i].candidate;
        tr.appendChild(tdID);
        tr.appendChild(tdType);
        tr.appendChild(tdICE);
        remotePeerICEList.appendChild(tr);
    }
}
exports.setRemotePeerICEListInDOM = setRemotePeerICEListInDOM;
