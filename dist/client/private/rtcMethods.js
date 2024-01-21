"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateICECandidates = exports.createAnswerSDP = exports.createOfferSDP = void 0;
const uuid_1 = require("uuid");
function createOfferSDP() {
    return (0, uuid_1.v4)();
}
exports.createOfferSDP = createOfferSDP;
function createAnswerSDP() {
    return (0, uuid_1.v4)();
}
exports.createAnswerSDP = createAnswerSDP;
function generateICECandidates() {
    let localICE = [];
    for (let i = 0; i < 5; i++) {
        localICE.push((0, uuid_1.v4)());
    }
    return localICE;
}
exports.generateICECandidates = generateICECandidates;
