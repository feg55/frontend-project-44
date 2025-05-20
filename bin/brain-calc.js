import name from "../src/cli.js";
import readlineSync from 'readline-sync';

console.log("What is the result of the expression?");
let sum = 0;
const calc = () => {

    let simb = ["+", "*", "-"];

    let num1 = Math.floor(Math.random() * 99) + 1;
    let num2 = Math.floor(Math.random() * 99) + 1;
    let usimb = simb[Math.floor(Math.random() * 3)];

    console.log(`Question: ${num1} ${usimb} ${num2}`)

    let corrAnswer = eval(num1 + usimb + num2);
    let answer = readlineSync.question("Your answer: ")
    console.log(answer)
    if (Number(answer) === corrAnswer) {
        console.log("Correct!");
    }   else {
        console.log(`${answer} is wrong answer ;( Correct answer was "${corrAnswer}". Let's try again, ${name}`);
        sum = sum + 1
    }
};

calc();
calc();
calc();

if (sum === 0) {
    console.log("Congratulations, " + name + "!")
    } else {
    console.log("I know you can better)))")
}

export default calc;