"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const https_1 = __importDefault(require("https"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const date_fns_1 = require("date-fns");
const uuid_1 = require("uuid");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.SERVER_PORT;
const KEY = fs_1.default.readFileSync('./certs/cert.key');
const CERT = fs_1.default.readFileSync('./certs/cert.crt');
let clients = [];
app.use(express_1.default.static(path_1.default.join(__dirname, 'client', 'public')));
app.get('/', function (req, res) {
    res.status(200).sendFile(path_1.default.join(__dirname, 'client', 'view', 'index.html'));
    console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\t${req.protocol}  ${req.method} ${req.url}`);
});
app.all('*', function (req, res) {
    res.status(404).sendFile(path_1.default.join(__dirname, 'client', 'view', '404.html'));
    console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\t${req.protocol}  ${req.method} ${req.url}`);
});
const httpsServer = https_1.default.createServer({ key: KEY, cert: CERT }, app);
httpsServer.listen(PORT, function () {
    console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\tListening on port ${PORT}`);
});
const io = new socket_io_1.Server(httpsServer, {
    cors: { origin: '*' },
});
io.on('connection', function (socket) {
    console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\tNew client ${socket.id} has connected`);
    clients.push(socket.id);
    socket.emit('for_me', clients.filter(function (item) {
        return item !== socket.id;
    }));
    socket.broadcast.emit('new_client', clients);
    socket.on('message', function (data) {
        console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\tClient ${socket.id} message: ${data}`);
    });
    socket.on('rtc_sdp_offer', function (data) {
        const { sendTo } = data;
        socket.to(sendTo).emit('rtc_sdp_offer_pass', data);
        console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\t`, data);
    });
    socket.on('rtc_sdp_answer', function (data) {
        const { sendTo } = data;
        socket.to(sendTo).emit('rtc_sdp_answer_pass', data);
        console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\t`, data);
    });
    socket.on('rtc_sdp_answer_received_confirmation', function (data) {
        const { sendTo } = data;
        socket.to(sendTo).emit('rtc_sdp_answer_received_confirmation', data);
    });
    socket.on('rtc_ice_offer', function (data) {
        const { sendTo } = data;
        socket.to(sendTo).emit('rtc_ice_offer_pass', data);
        console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\t`, data);
    });
    socket.on('rtc_ice_answer', function (data) {
        const { sendTo } = data;
        socket.to(sendTo).emit('rtc_ice_answer_pass', data);
        console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\t`, data);
    });
    socket.on('disconnect', function () {
        console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\tClient ${socket.id} has disconnected`);
        clients = clients.filter(function (item) {
            return item !== socket.id;
        });
        socket.broadcast.emit('client_disconnect', clients);
    });
});
