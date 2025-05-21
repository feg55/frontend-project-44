#!/usr/bin/env node
console.log("Welcome to the Brain Games!")

// import readlineSync from 'readline-sync';
import calc from "../bin/brain-calc.js";
import eaven from "../bin/brain-even.js";
import name from "../src/cli.js";

const brain_calc = () => {
    for (let i = 0; i < 3; i++) {
        const result = calc()
        if (result === false) {
            return false; 
        }
    }
    console.log("Congratulations, " + name + "!"); 
}

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









