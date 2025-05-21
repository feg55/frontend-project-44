import name from "../src/cli.js";
import readlineSync from 'readline-sync';

const calc = () => {
    console.log("What is the result of the expression?");
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