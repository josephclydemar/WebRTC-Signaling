"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetOtherClientsList = void 0;
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
            socketListeners_1.socket.emit('rtc_sdp_offer', {
                sendFrom: socketListeners_1.socket.id,
                sendTo: otherClients[i],
                type: 'offer',
                sdp: (0, uuid_1.v4)(),
            });
        };
        tdID.textContent = otherClients[i];
        tdCall.appendChild(callButton);
        tr.appendChild(tdID);
        tr.appendChild(tdCall);
        otherClientsTableBody.appendChild(tr);
    }
}
exports.resetOtherClientsList = resetOtherClientsList;
