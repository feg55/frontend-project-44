import name from "../src/cli.js";
import readlineSync from 'readline-sync';
import { random } from "../src/random.js";
import { rundomSimb } from "../src/random.js";

const calc = () => {
    console.log("What is the result of the expression?");

    let num1 = random();
    let num2 = random();
    let usimb = rundomSimb();

    console.log(`Question: ${num1} ${usimb} ${num2}`)

    let corrAnswer = eval(num1 + usimb + num2);
    let answer = readlineSync.question("Your answer: ")
    console.log(answer)
    if (Number(answer) === corrAnswer) {
        console.log("Correct!");
        return true
    }   else {
        console.log(`${answer} is wrong answer ;( Correct answer was "${corrAnswer}". Let's try again, ${name}`);
        return false
    }
};

const brain_calc = () => {
    for (let i = 0; i < 3; i++) {
        const result = calc()
        if (result === false) {
            return false; 
        }
    }
    console.log("Congratulations, " + name + "!"); 
}
brain_calc()


export default calc;