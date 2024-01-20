"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v,
        });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
const io = __importStar(require("socket.io-client"));
const uuid_1 = require("uuid");
const socket = io.connect("http://192.168.1.19:7800");
const messageInputBox = document.getElementById("message-input-box");
const sendMessageButton = document.getElementById("send-message-button");
const showSocketIdButton = document.getElementById("show-id");
const sendSDPButton = document.getElementById("send-sdp-button");
showSocketIdButton.onclick = function () {
  const mySocketId = document.getElementById("my-id");
  mySocketId.textContent = socket.id;
};
sendMessageButton.onclick = function () {
  const message = messageInputBox.value;
  socket.emit("message", message);
  messageInputBox.value = "";
};
sendSDPButton.onclick = function () {
  socket.emit("rtc_sdp", {
    client_id: socket.id,
    type: "offer",
    sdp: (0, uuid_1.v4)(),
  });
};
socket.on("rtc_sdp_broadcast", function (data) {
  const receivedSDP = document.getElementById("sdp");
  const SDPSender = document.getElementById("sdp-sender");
  const SDPType = document.getElementById("sdp-type");
  SDPSender.textContent = `Sender: ${data["client_id"]}`;
  SDPType.textContent = `Type: ${data["type"]}`;
  receivedSDP.textContent = `SDP: ${data["sdp"]}`;
  console.log(data);
});
