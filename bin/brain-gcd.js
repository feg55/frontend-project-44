import name from "../src/cli.js";
import * as myUtils from "../src/utils.js";

const gcd = () => {
    console.log("Find the greatest common divisor of given numbers.")
    let num1 = myUtils.random();
    let num2 = myUtils.random();

    console.log(`Question: ${num1} ${num2}`)

    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    let corrAnswer = num1;
    let answer = Number(myUtils.usAnswer())
    
    if (answer === corrAnswer) {
        console.log("Correct!");
        return true
    }   else {
        console.log(`${answer} is wrong answer ;( Correct answer was "${corrAnswer}". Let's try again, ${name}`);
        return false
    }
}

const brain_gcd = () => {
    for (let i = 0; i < 3; i++) {
        const result = gcd()
        if (result === false) {
            return false; 
        }
    }
    console.log("Congratulations, " + name + "!"); 
}
brain_gcd()










