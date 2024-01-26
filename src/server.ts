import express, { Express, Request, Response } from 'express';
import { Server } from 'socket.io';
import https from 'https';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
import { format } from 'date-fns';
import { v4 } from 'uuid';
import { SDP, ICECollection } from './typesServer';

dotenv.config();

const app: Express = express();
const PORT: string = process.env.SERVER_PORT as string;
const NODE_ENVIRONMENT: string = process.env.NODE_ENV as string;

let clients: string[] = [];

app.use(express.static(path.join(__dirname, 'client', 'public')));

app.get('/', function (req: Request, res: Response): void {
    // if (clients.length < 2) {
    //     res.status(200).sendFile(path.join(__dirname, 'client', 'view', 'index.html'));
    // } else {
    //     res.status(403).sendFile(path.join(__dirname, 'client', 'view', 'unauthorizedPage.html'));
    // }
    res.status(200).sendFile(path.join(__dirname, 'client', 'view', 'index.html'));
    console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\t${req.protocol}  ${req.method} ${req.url}`);
});

app.all('*', function (req: Request, res: Response): void {
    res.status(404).sendFile(path.join(__dirname, 'client', 'view', '404.html'));
    console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\t${req.protocol}  ${req.method} ${req.url}`);
});

if (NODE_ENVIRONMENT === 'development') {
    const KEY: Buffer = fs.readFileSync('./certs/cert.key');
    const CERT: Buffer = fs.readFileSync('./certs/cert.crt');
    const httpsServer = https.createServer({ key: KEY, cert: CERT }, app);

    httpsServer.listen(PORT, function (): void {
        console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\tListening on port ${PORT}`);
    });
    const io = new Server(httpsServer, {
        cors: { origin: '*' },
    });

    io.on('connection', function (socket) {
        console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\tNew client ${socket.id} has connected`);
        clients.push(socket.id);
        socket.emit(
            'for_me',
            clients.filter(function (item: string): boolean {
                return item !== socket.id;
            }),
        );

        socket.broadcast.emit('new_client', clients);

        socket.on('message', function (data: string): void {
            console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\tClient ${socket.id} message: ${data}`);
        });

        socket.on('rtc_sdp_offer', function (data: SDP): void {
            const { sendTo } = data;
            socket.to(sendTo).emit('rtc_sdp_offer_pass', data);
            console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\t`, `SDP-> SendFrom: ${data.sendFrom}\tType: ${data.type}`);
        });

        socket.on('rtc_sdp_answer', function (data: SDP): void {
            const { sendTo } = data;
            socket.to(sendTo).emit('rtc_sdp_answer_pass', data);
            console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\t`, `SDP-> SendFrom: ${data.sendFrom}\tType: ${data.type}`);
        });

        socket.on('rtc_ready_for_remote_ice', function (data: any): void {
            const { sendTo } = data;
            socket.to(sendTo).emit('rtc_ready_for_remote_ice_pass', data);
        });

        socket.on('rtc_ice_offer', function (data: ICECollection): void {
            const { sendTo } = data;
            socket.to(sendTo).emit('rtc_ice_offer_pass', data);
            console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\t`, `ICE-> SendFrom: ${data.sendFrom}\tType: ${data.type}`, data.ice);
        });

        socket.on('rtc_ice_answer', function (data: ICECollection): void {
            const { sendTo } = data;
            socket.to(sendTo).emit('rtc_ice_answer_pass', data);
            console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\t`, `ICE-> SendFrom: ${data.sendFrom}\tType: ${data.type}`, data.ice);
        });

        socket.on('disconnect', function () {
            console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\tClient ${socket.id} has disconnected`);
            clients = clients.filter(function (item: string): boolean {
                return item !== socket.id;
            });
            socket.broadcast.emit('client_disconnect', clients);
        });
    });
} else if (NODE_ENVIRONMENT === 'production') {
    const httpServer = app.listen(PORT, function (): void {
        console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\tListening on port ${PORT}`);
    });

    const io = new Server(httpServer, {
        cors: { origin: '*' },
    });

    io.on('connection', function (socket) {
        console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\tNew client ${socket.id} has connected`);
        clients.push(socket.id);
        socket.emit(
            'for_me',
            clients.filter(function (item: string): boolean {
                return item !== socket.id;
            }),
        );

        socket.broadcast.emit('new_client', clients);

        socket.on('message', function (data: string): void {
            console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\tClient ${socket.id} message: ${data}`);
        });

        socket.on('rtc_sdp_offer', function (data: SDP): void {
            const { sendTo } = data;
            socket.to(sendTo).emit('rtc_sdp_offer_pass', data);
            console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\t`, `SDP-> SendFrom: ${data.sendFrom}\tType: ${data.type}`);
        });

        socket.on('rtc_sdp_answer', function (data: SDP): void {
            const { sendTo } = data;
            socket.to(sendTo).emit('rtc_sdp_answer_pass', data);
            console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\t`, `SDP-> SendFrom: ${data.sendFrom}\tType: ${data.type}`);
        });

        socket.on('rtc_ready_for_remote_ice', function (data: any): void {
            const { sendTo } = data;
            socket.to(sendTo).emit('rtc_ready_for_remote_ice_pass', data);
        });

        socket.on('rtc_ice_offer', function (data: ICECollection): void {
            const { sendTo } = data;
            socket.to(sendTo).emit('rtc_ice_offer_pass', data);
            console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\t`, `ICE-> SendFrom: ${data.sendFrom}\tType: ${data.type}`, data.ice);
        });

        socket.on('rtc_ice_answer', function (data: ICECollection): void {
            const { sendTo } = data;
            socket.to(sendTo).emit('rtc_ice_answer_pass', data);
            console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\t`, `ICE-> SendFrom: ${data.sendFrom}\tType: ${data.type}`, data.ice);
        });

        socket.on('disconnect', function () {
            console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\tClient ${socket.id} has disconnected`);
            clients = clients.filter(function (item: string): boolean {
                return item !== socket.id;
            });
            socket.broadcast.emit('client_disconnect', clients);
        });
    });
}
