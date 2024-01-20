"use strict";
function resetOtherClientsList(otherClients) {
    const otherClientsTableBody = document.getElementById('other-clients');
    otherClientsTableBody.innerHTML = '';
    for (let i = 0; i < otherClients.length; i++) {
        let tr = document.createElement('tr');
        let tdID = document.createElement('td');
        let tdButton = document.createElement('td');
        tdID.textContent = otherClients[i];
        tdButton.textContent = 'Call';
        tr.appendChild(tdID);
        tr.appendChild(tdButton);
        otherClientsTableBody.appendChild(tr);
    }
}
