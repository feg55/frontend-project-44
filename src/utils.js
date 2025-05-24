import readlineSync from 'readline-sync';

// Random for first's games
// export const random = () => Math.floor(Math.random() * 99) + 1;
export const randomizer = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const rundomSimb = () => {
    let simb = ["+", "*", "-"];
    let usimb = simb[randomizer(0, 2)];
    return usimb;
};

// Random for progress game
// export const randomLength = () => Math.floor(Math.random() * 6) + 5;
// export const randomStep = () => Math.floor(Math.random() * 10) + 1;
// export const randomStart = () => Math.floor(Math.random() * 20) + 1;
export const randomMassLength = (mass) => Math.floor(Math.random() * mass.length) + 0;

// User answer
export const usAnswer = () => {
    let answer = readlineSync.question("Your answer: ");
    return answer;
}

// потом перепишу рандомайзер на универсальный и вобью значения в функциях


