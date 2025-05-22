import name from "../src/cli.js";

export const checkAnswer = (answer, corrAnswer) => {
        if (answer === corrAnswer) {
        console.log("Correct!");
        return true
    } else {
        console.log(`${answer} is wrong answer ;( Correct answer was "${corrAnswer}". Let's try again, ${name}`);
        return false
    }
}

export const brainСycle = (fnName) => {
// if (fnName === "even") {
//     const result = eaven()
// } else if (fnName === "calc") {
//     const result = calc()
// } else if (fnName === "gcd") {
//     const result = gcd()
// }
  for (let i = 0; i < 3; i++) {
    const result = fnName();
    if (result === false) {
      return false;
    }
  }
  console.log("Congratulations, " + name + "!");
  return true;
}










