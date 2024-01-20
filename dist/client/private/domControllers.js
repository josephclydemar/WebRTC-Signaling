"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRemotePeerICEList = exports.setRemoteSDP = exports.setLocalSDP = exports.resetOtherClientsList = void 0;
const uuid_1 = require("uuid");
const socketListeners_1 = require("./socketListeners");
function resetOtherClientsList(otherClients) {
    const otherClientsTableBody = document.getElementById('other-clients');
    otherClientsTableBody.innerHTML = '';
    for (let i = 0; i < otherClients.length; i++) {
        let tr = document.createElement('tr');
        let tdID = document.createElement('td');
        let tdCall = document.createElement('td');
        let callButton = document.createElement('button');
        callButton.textContent = 'Call';
        callButton.onclick = function () {
            const offerSDP = {
                sendFrom: socketListeners_1.socket.id,
                sendTo: otherClients[i],
                type: 'offer',
                sdp: (0, uuid_1.v4)(),
            };
            setLocalSDP(offerSDP.sendTo, offerSDP.type, offerSDP.sdp);
            setTimeout(function () {
                socketListeners_1.socket.emit('rtc_sdp_offer', offerSDP);
            }, 4500);
        };
        tdID.textContent = otherClients[i];
        tdCall.appendChild(callButton);
        tr.appendChild(tdID);
        tr.appendChild(tdCall);
        otherClientsTableBody.appendChild(tr);
    }
}
exports.resetOtherClientsList = resetOtherClientsList;
function setRemoteSDP(sendFrom, type, sdp) {
    const receivedSDP = document.getElementById('sdp-remote');
    const SDPSender = document.getElementById('sdp-remote-sender');
    const SDPType = document.getElementById('sdp-remote-type');
    SDPSender.textContent = `Sender: ${sendFrom}`;
    SDPType.textContent = `Type: ${type}`;
    receivedSDP.textContent = `SDP: ${sdp}`;
}
exports.setRemoteSDP = setRemoteSDP;
function setLocalSDP(sendTo, type, sdp) {
    const receivedSDP = document.getElementById('sdp-local');
    const SDPSender = document.getElementById('sdp-local-sender');
    const SDPType = document.getElementById('sdp-local-type');
    SDPSender.textContent = `Receiver: ${sendTo}`;
    SDPType.textContent = `Type: ${type}`;
    receivedSDP.textContent = `SDP: ${sdp}`;
}
exports.setLocalSDP = setLocalSDP;
function setRemotePeerICEList(ice) {
    const remotePeerICEList = document.getElementById('remote-peer-ice');
    remotePeerICEList.innerHTML = '';
    for (let i = 0; i < ice.length; i++) {
        let tr = document.createElement('tr');
        let tdID = document.createElement('td');
        let tdICE = document.createElement('td');
        tdID.textContent = ice[i].sendFrom;
        tdICE.textContent = ice[i].ice;
        tr.appendChild(tdID);
        tr.appendChild(tdICE);
        remotePeerICEList.appendChild(tr);
    }
}
exports.setRemotePeerICEList = setRemotePeerICEList;
