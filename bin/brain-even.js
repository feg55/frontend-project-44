import name from "../src/cli.js";
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const eaven = () => {

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
    } else if (isEven(num) && answer === "yes") {
        console.log("Correct!");
    } else {
        console.log(`${answer} is wrong answer ;( Correct answer was ${corrAnswer}. Let's try again, ${name}`);
    }
};

console.log("Congratulations, " + name + "!")
eaven()
export default eaven;

