#!/usr/bin/env node
import * as myEngine from '../engine.js'
import * as myUtils from '../utils.js'

console.log('Find the greatest common divisor of given numbers.')
const gcd = () => {
  let num1 = myUtils.randomizer(1, 99)
  let num2 = myUtils.randomizer(1, 99)

  console.log(`Question: ${num1} ${num2}`)

  while (num2 !== 0) {
    let temp = num2
    num2 = num1 % num2
    num1 = temp
  }

  let corrAnswer = num1
  let answer = Number(myUtils.usAnswer())

  myEngine.checkAnswer(answer, corrAnswer)
  if (answer !== corrAnswer) {
    return false
  }
}

export const exGcd = () => {
  return myEngine.brainCycle(gcd)
}

// myEngine.brainCycle(gcd)
