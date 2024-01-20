"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const path_1 = __importDefault(require("path"));
const date_fns_1 = require("date-fns");
const uuid_1 = require("uuid");
const app = (0, express_1.default)();
const PORT = 7800;
app.use(
  express_1.default.static(path_1.default.join(__dirname, "client", "public")),
);
app.get("/", function (req, res) {
  res.sendFile(path_1.default.join(__dirname, "client", "view", "index.html"));
  console.log(
    `${(0, date_fns_1.format)(new Date(), "yyyy-MM-dd HH:mm:ss")}   ${(0, uuid_1.v4)()}\t${req.protocol}  ${req.method} ${req.url}`,
  );
});
const httpServer = app.listen(PORT, function () {
  console.log(
    `${(0, date_fns_1.format)(new Date(), "yyyy-MM-dd HH:mm:ss")}   ${(0, uuid_1.v4)()}\tListening on port ${PORT}`,
  );
});
const io = new socket_io_1.Server(httpServer, {
  cors: {
    origin: "*",
  },
});
let clients = [];
io.on("connection", function (socket) {
  console.log(
    `${(0, date_fns_1.format)(new Date(), "yyyy-MM-dd HH:mm:ss")}   ${(0, uuid_1.v4)()}\tNew client ${socket.id} has connected`,
  );
  clients.push(socket.id);
  socket.broadcast.emit("new_client", clients);
  socket.on("message", function (data) {
    console.log(
      `${(0, date_fns_1.format)(new Date(), "yyyy-MM-dd HH:mm:ss")}   ${(0, uuid_1.v4)()}\tClient ${socket.id} message: ${data}`,
    );
    const sample = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("YOOOOOOOOOOOOO");
      }, 1600);
    });
    sample.then(function (result) {
      console.log(result);
    });
  });
  socket.on("rtc_sdp", function (data) {
    socket.broadcast.emit("rtc_sdp_broadcast", data);
    console.log(
      `${(0, date_fns_1.format)(new Date(), "yyyy-MM-dd HH:mm:ss")}   ${(0, uuid_1.v4)()}\t`,
      data,
    );
  });
  socket.on("disconnect", function () {
    console.log(
      `${(0, date_fns_1.format)(new Date(), "yyyy-MM-dd HH:mm:ss")}   ${(0, uuid_1.v4)()}\tClient ${socket.id} has disconnected`,
    );
    clients = clients.filter(function (item) {
      return item !== socket.id;
    });
    socket.broadcast.emit("client_disconnect", clients);
  });
});
