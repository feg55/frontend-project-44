// import name from "../src/cli.js";
import * as myUtils from "../src/utils.js";
import * as myEngine from "../src/engine.js"

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const eaven = () => {
    
    let num = myUtils.random();
    const isEven = (num) => num % 2 === 0;
    let corrAnswer;

    if (isEven(num)) {
        corrAnswer = "yes";
    } else {
        corrAnswer = "no";
    }

    console.log("Question:" + num);

    let answer = myUtils.usAnswer()
    myEngine.checkAnswer(answer, corrAnswer)
    if (answer !== corrAnswer) {
    return false
    }
    // if (answer === corrAnswer) {
    //     console.log("Correct!");
    //     return true
    // } else {
    //     console.log(`${answer} is wrong answer ;( Correct answer was "${corrAnswer}". Let's try again, ${name}`);
    //     return false
    // }
};

// const brain_eaven = () => {
//     for (let i = 0; i < 3; i++) {
//         const result = eaven()
//         if (result === false) {
//             return false; 
//         }
//     }
//     console.log("Congratulations, " + name + "!"); 
// }
// brain_eaven()

myEngine.brainСycle(eaven)

export default eaven;