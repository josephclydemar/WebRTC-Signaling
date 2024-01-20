import * as io from 'socket.io-client';
import { resetOtherClientsList } from './domControllers';

const socket = io.connect('http://192.168.1.19:8600');

socket.on('rtc_sdp_pass', function (data: any) {
    const receivedSDP: HTMLHeadingElement = document.getElementById('sdp') as HTMLHeadingElement;
    const SDPSender: HTMLHeadingElement = document.getElementById('sdp-sender') as HTMLHeadingElement;
    const SDPType: HTMLHeadingElement = document.getElementById('sdp-type') as HTMLHeadingElement;
    SDPSender.textContent = `Sender: ${data['sendFrom']}`;
    SDPType.textContent = `Type: ${data['type']}`;
    receivedSDP.textContent = `SDP: ${data['sdp']}`;
    console.log(data);
});

socket.on('for_me', function (data: any): void {
    console.log(data);
    resetOtherClientsList(data);
});

socket.on('new_client', function (data: any): void {
    console.log(data);
    resetOtherClientsList(
        data.filter(function (item: string): boolean {
            return item !== socket.id;
        }),
    );
});

socket.on('client_disconnect', function (data: any): void {
    console.log(data);
    resetOtherClientsList(data);
});

export { socket };
