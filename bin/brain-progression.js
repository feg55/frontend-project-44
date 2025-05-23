import * as myUtils from "../src/utils.js";
import * as myEngine from "../src/engine.js";

console.log("What number is missing in the progression?");

const progress = () => {

const progressMass = [];
const start = myUtils.randomStart();
const step = myUtils.randomStep();

    for (let i = 0; i < myUtils.randomLength(); i++) {
        progressMass.push(start + i * step);
    };
const numAns = myUtils.randomMassLength(progressMass)

let corrAnswer = progressMass[numAns];
    // console.log(progressMass);
progressMass[numAns] = "..";
const betterOutput = progressMass.join(" ");
    console.log("Question: " + betterOutput);
    let answer = Number(myUtils.usAnswer());

        myEngine.checkAnswer(answer, corrAnswer);
        if (answer !== corrAnswer) {
        return false;
        };
};
myEngine.brainСycle(progress);

export default progress;
