import name from "../src/cli.js";
import readlineSync from 'readline-sync';
let mass = [];
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;

const eaven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let num = Math.floor(Math.random() * 99) + 1;
    let corrAnswer;

    if (isEven(num)) {
        corrAnswer = "yes";
    } else {
        corrAnswer = "no";
    }

    console.log("Question:" + num);

    let answer = readlineSync.question("Your answer: ");

    if (isOdd(num) && answer === "no") {
        console.log("Correct!");
        mass.push("")
    } else if (isEven(num) && answer === "yes") {
        console.log("Correct!");
        mass.push("")
    } else {
        console.log(`${answer} is wrong answer ;( Correct answer was ${corrAnswer}. Let's try again, ${name}`);
    }
};
const isEvenGame = () => {
for (let i = 0; mass.length < 3; i++){
eaven();
}
console.log("Congratulations, " + name + "!")
}

export {isEvenGame}
export default eaven;

