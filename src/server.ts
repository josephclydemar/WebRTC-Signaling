import express, { Express, Request, Response } from 'express';
import { Server } from 'socket.io';
import path from 'path';
import { format } from 'date-fns';
import { v4 } from 'uuid';

const app: Express = express();
const PORT: number = 7800;

let clients: string[] = [];

app.use(express.static(path.join(__dirname, 'client', 'public')));

app.get('/', function (req: Request, res: Response): void {
    res.sendFile(path.join(__dirname, 'client', 'view', 'index.html'));
    console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\t${req.protocol}  ${req.method} ${req.url}`);
});

const httpServer = app.listen(PORT, function (): void {
    console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\tListening on port ${PORT}`);
});

const io = new Server(httpServer, {
    cors: {
        origin: '*',
    },
});

io.on('connection', function (socket) {
    console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\tNew client ${socket.id} has connected`);
    clients.push(socket.id);
    socket.broadcast.emit('new_client', clients);

    socket.on('message', function (data) {
        console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\tClient ${socket.id} message: ${data}`);
        const sample: Promise<string> = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('YOOOOOOOOOOOOO');
            }, 1600);
        });
        sample.then(function (result: string) {
            console.log(result);
        });
    });

    socket.on('rtc_sdp', function (data) {
        socket.broadcast.emit('rtc_sdp_broadcast', data);
        console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\t`, data);
    });

    socket.on('disconnect', function () {
        console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${v4()}\tClient ${socket.id} has disconnected`);
        clients = clients.filter(function (item: string) {
            return item !== socket.id;
        });
        socket.broadcast.emit('client_disconnect', clients);
    });
});
