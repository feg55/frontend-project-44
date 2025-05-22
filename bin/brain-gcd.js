import name from "../src/cli.js";
import readlineSync from 'readline-sync';
import { random } from "../src/random.js";

const gcd = () => {
    console.log("Find the greatest common divisor of given numbers.")
    let num1 = random();
    let num2 = random();

    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    let corrAnswer = num1;












}