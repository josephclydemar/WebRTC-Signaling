import { SDP, ICECollection } from './typesClient';
import { socket } from './socketListeners';
import { rtcPeerConnection, createOfferSDP } from './rtcMethods';
import { getLocalMediaStream } from './userMedia';

function resetOtherClientsList(otherClients: string[]): void {
    const otherClientsTableBody: HTMLTableSectionElement = document.getElementById('other-clients') as HTMLTableSectionElement;
    otherClientsTableBody.innerHTML = '';
    for (let i: number = 0; i < otherClients.length; i++) {
        let tr: HTMLTableRowElement = document.createElement('tr');
        let tdID: HTMLTableCellElement = document.createElement('td');
        let tdCall: HTMLTableCellElement = document.createElement('td');
        let callButton: HTMLButtonElement = document.createElement('button');

        callButton.classList.add('my-peers');
        callButton.textContent = 'Call';
        callButton.onclick = async function (): Promise<void> {
            let localStream: MediaStream = await getLocalMediaStream(true, false);
            const createdOffer: RTCSessionDescription = (await createOfferSDP(localStream, rtcPeerConnection)) as RTCSessionDescription;
            const offerSDP: SDP = {
                sendFrom: socket.id as string,
                sendTo: otherClients[i],
                type: 'offer',
                sdp: createdOffer,
            };
            setLocalSDPInDOM(offerSDP.sendTo, offerSDP.type, offerSDP.sdp.sdp);
            socket.emit('rtc_sdp_offer', offerSDP);
        };

        tdID.textContent = otherClients[i];
        tdCall.appendChild(callButton);

        tr.appendChild(tdID);
        tr.appendChild(tdCall);
        otherClientsTableBody.appendChild(tr);
    }
}

function setRemoteSDPInDom(sendFrom: string, type: string, sdp: string): void {
    const receivedSDP: HTMLHeadingElement = document.getElementById('sdp-remote') as HTMLHeadingElement;
    const SDPSender: HTMLHeadingElement = document.getElementById('sdp-remote-sender') as HTMLHeadingElement;
    const SDPType: HTMLHeadingElement = document.getElementById('sdp-remote-type') as HTMLHeadingElement;
    SDPSender.textContent = `Sender ID: ${sendFrom}`;
    SDPType.textContent = `Type: ${type}`;
    receivedSDP.textContent = `SDP: ${sdp}`;
}

function setLocalSDPInDOM(sendTo: string, type: string, sdp: string): void {
    const receivedSDP: HTMLHeadingElement = document.getElementById('sdp-local') as HTMLHeadingElement;
    const SDPSender: HTMLHeadingElement = document.getElementById('sdp-local-sender') as HTMLHeadingElement;
    const SDPType: HTMLHeadingElement = document.getElementById('sdp-local-type') as HTMLHeadingElement;
    SDPSender.textContent = `Receiver ID: ${sendTo}`;
    SDPType.textContent = `Type: ${type}`;
    receivedSDP.textContent = `SDP: ${sdp}`;
}

function setRemotePeerICEListInDOM(remoteICE: ICECollection): void {
    const remotePeerICEList: HTMLTableSectionElement = document.getElementById('remote-peer-ice') as HTMLTableSectionElement;
    remotePeerICEList.innerHTML = '';
    for (let i: number = 0; i < remoteICE.ice.length; i++) {
        let tr: HTMLTableRowElement = document.createElement('tr');

        let tdID: HTMLTableCellElement = document.createElement('td');
        let tdType: HTMLTableCellElement = document.createElement('td');
        let tdICE: HTMLTableCellElement = document.createElement('td');

        tdID.textContent = remoteICE.sendFrom;
        tdType.textContent = remoteICE.type;
        tdICE.textContent = remoteICE.ice[i].candidate;

        tr.appendChild(tdID);
        tr.appendChild(tdType);
        tr.appendChild(tdICE);
        remotePeerICEList.appendChild(tr);
    }
}

export { resetOtherClientsList, setLocalSDPInDOM, setRemoteSDPInDom, setRemotePeerICEListInDOM };
