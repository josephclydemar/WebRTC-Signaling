import { v4 } from 'uuid';
import { SDP, ICE } from './types';
import { socket } from './socketListeners';

function resetOtherClientsList(otherClients: string[]): void {
    const otherClientsTableBody: HTMLTableSectionElement = document.getElementById('other-clients') as HTMLTableSectionElement;
    otherClientsTableBody.innerHTML = '';
    for (let i: number = 0; i < otherClients.length; i++) {
        let tr: HTMLTableRowElement = document.createElement('tr');
        let tdID: HTMLTableCellElement = document.createElement('td');
        let tdCall: HTMLTableCellElement = document.createElement('td');
        let callButton: HTMLButtonElement = document.createElement('button');

        callButton.textContent = 'Call';
        callButton.onclick = function (): void {
            const offerSDP: SDP = {
                sendFrom: socket.id as string,
                sendTo: otherClients[i],
                type: 'offer',
                sdp: v4(),
            };
            setLocalSDP(offerSDP.sendTo, offerSDP.type, offerSDP.sdp);
            setTimeout(function (): void {
                socket.emit('rtc_sdp_offer', offerSDP);
            }, 4500);
        };

        tdID.textContent = otherClients[i];
        tdCall.appendChild(callButton);

        tr.appendChild(tdID);
        tr.appendChild(tdCall);
        otherClientsTableBody.appendChild(tr);
    }
}

function setRemoteSDP(sendFrom: string, type: string, sdp: string): void {
    const receivedSDP: HTMLHeadingElement = document.getElementById('sdp-remote') as HTMLHeadingElement;
    const SDPSender: HTMLHeadingElement = document.getElementById('sdp-remote-sender') as HTMLHeadingElement;
    const SDPType: HTMLHeadingElement = document.getElementById('sdp-remote-type') as HTMLHeadingElement;
    SDPSender.textContent = `Sender: ${sendFrom}`;
    SDPType.textContent = `Type: ${type}`;
    receivedSDP.textContent = `SDP: ${sdp}`;
}

function setLocalSDP(sendTo: string, type: string, sdp: string): void {
    const receivedSDP: HTMLHeadingElement = document.getElementById('sdp-local') as HTMLHeadingElement;
    const SDPSender: HTMLHeadingElement = document.getElementById('sdp-local-sender') as HTMLHeadingElement;
    const SDPType: HTMLHeadingElement = document.getElementById('sdp-local-type') as HTMLHeadingElement;
    SDPSender.textContent = `Receiver: ${sendTo}`;
    SDPType.textContent = `Type: ${type}`;
    receivedSDP.textContent = `SDP: ${sdp}`;
}

function setRemotePeerICEList(ice: ICE[]): void {
    const remotePeerICEList: HTMLTableSectionElement = document.getElementById('remote-peer-ice') as HTMLTableSectionElement;
    remotePeerICEList.innerHTML = '';
    for (let i: number = 0; i < ice.length; i++) {
        let tr: HTMLTableRowElement = document.createElement('tr');
        let tdID: HTMLTableCellElement = document.createElement('td');
        let tdICE: HTMLTableCellElement = document.createElement('td');

        tdID.textContent = ice[i].sendFrom;
        tdICE.textContent = ice[i].ice;

        tr.appendChild(tdID);
        tr.appendChild(tdICE);
        remotePeerICEList.appendChild(tr);
    }
}

export { resetOtherClientsList, setLocalSDP, setRemoteSDP, setRemotePeerICEList };
