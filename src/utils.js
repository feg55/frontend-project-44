import readlineSync from 'readline-sync';

export const random = () => Math.floor(Math.random() * 99) + 1;

export const rundomSimb = () => {
    let simb = ["+", "*", "-"];
    let usimb = simb[Math.floor(Math.random() * 3)];
    return usimb;
};

export const usAnswer = () => {
    let answer = readlineSync.question("Your answer: ");
    return answer;
}
