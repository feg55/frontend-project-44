import readlineSync from 'readline-sync';

// Random for all games
export const randomizer = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Random for calc game
export const rundomSimb = () => {
    let simb = ["+", "*", "-"];
    let usimb = simb[randomizer(0, 2)];
    return usimb;
};

// Random for progress game
export const randomMassLength = (mass) => Math.floor(Math.random() * mass.length) + 0;

// User answer
export const usAnswer = () => {
    let answer = readlineSync.question("Your answer: ");
    return answer;
}

