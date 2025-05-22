import * as myEngine from "../src/engine.js";
import * as myUtils from "../src/utils.js";

console.log("What is the result of the expression?");
const calc = () => {

    let num1 = myUtils.random();
    let num2 = myUtils.random();
    let usimb = myUtils.rundomSimb();

    console.log(`Question: ${num1} ${usimb} ${num2}`);

    let corrAnswer = eval(num1 + usimb + num2);
    let answer = Number(myUtils.usAnswer());

    myEngine.checkAnswer(answer, corrAnswer);
    if (answer !== corrAnswer) {
    return false;
    }
};
myEngine.brainСycle(calc);

export default calc;