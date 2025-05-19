import name from "../src/cli.js";
import readlineSync from 'readline-sync';
let sum = 0;
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
        console.log(`${answer} is wrong answer ;( Correct answer was "${corrAnswer}". Let's try again, ${name}`);
        sum = sum + 1
    }
};

eaven()
eaven()
eaven()

if (sum === 0) {
console.log("Congratulations, " + name + "!")
} else {
console.log("I know you can better)))")
}

export default eaven;