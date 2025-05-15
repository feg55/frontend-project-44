import name from "../src/cli";
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;

const eaven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let num = Math.floor(Math.random() * 99) + 1;
    let corrAnswer;

    if (isEven(num)) {
        corrAnswer = "yes";
    } else {
        corrAnswer = "no";
    }

    console.log("Question: " + num);

    let answer = prompt("Your answer: ");

    if (isOdd(num) && answer === "no") {
        return "Correct!";
    } else if (isEven(num) && answer === "yes") {
        return "Correct!";
    } else {
        return `${answer} is wrong answer ;( Correct answer was ${corrAnswer}. Let's try again, ${name}`;
    }
};

export default eaven;