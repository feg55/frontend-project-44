import * as myEngine from "../src/engine.js";
import * as myUtils from "../src/utils.js";

console.log("Find the greatest common divisor of given numbers.");
const gcd = () => {

    let num1 = myUtils.random();
    let num2 = myUtils.random();

    console.log(`Question: ${num1} ${num2}`);

    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    let corrAnswer = num1;
    let answer = Number(myUtils.usAnswer());

    myEngine.checkAnswer(answer, corrAnswer);
    if (answer !== corrAnswer) {
    return false;
    }
}

myEngine.brainСycle(gcd);








