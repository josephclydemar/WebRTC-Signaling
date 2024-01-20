import { v4 } from 'uuid';
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
            socket.emit('rtc_sdp_offer', {
                sendFrom: socket.id,
                sendTo: otherClients[i],
                type: 'offer',
                sdp: v4(),
            });
        };

        tdID.textContent = otherClients[i];
        tdCall.appendChild(callButton);

        tr.appendChild(tdID);
        tr.appendChild(tdCall);
        otherClientsTableBody.appendChild(tr);
    }
}

export { resetOtherClientsList };
