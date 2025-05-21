import name from "../src/cli.js";
import readlineSync from 'readline-sync';

const eaven = () => {
    
    const isEven = (num) => num % 2 === 0;
    const isOdd = (num) => num % 2 !== 0;
    
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
        return true
    } else if (isEven(num) && answer === "yes") {
        console.log("Correct!");
        return true
    } else {
        console.log(`${answer} is wrong answer ;( Correct answer was "${corrAnswer}". Let's try again, ${name}`);
        return false
    }
};

const brain_eaven = () => {
    for (let i = 0; i < 3; i++) {
        const result = eaven()
        if (result === false) {
            return false; 
        }
    }
    console.log("Congratulations, " + name + "!"); 
}
brain_eaven()

export default eaven;