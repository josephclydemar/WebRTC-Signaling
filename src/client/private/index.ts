import { socket } from './socketListeners';

const showSocketIDButton: HTMLButtonElement = document.getElementById('show-id') as HTMLButtonElement;

showSocketIDButton.onclick = function (): void {
    const mySocketId: HTMLHeadingElement = document.getElementById('my-id') as HTMLHeadingElement;
    mySocketId.textContent = `My ID: ${socket.id}`;
};
