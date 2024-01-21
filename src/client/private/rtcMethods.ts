import { v4 } from 'uuid';

function createOfferSDP(): string {
    return v4();
}

function createAnswerSDP(): string {
    return v4();
}

function generateICECandidates(): string[] {
    let localICE: string[] = [];
    for (let i: number = 0; i < 5; i++) {
        localICE.push(v4());
    }
    return localICE;
}

export { createOfferSDP, createAnswerSDP, generateICECandidates };
