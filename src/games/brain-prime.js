#!/usr/bin/env node
import * as myUtils from '../utils.js'
import * as myEngine from '../engine.js'

console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
const prime = () => {
  let num = myUtils.randomizer(1, 99)
  let corrAnswer = 'yes'
  if (num <= 1) {
    corrAnswer = 'no'
  }
  else if (num === 2) {
    corrAnswer = 'yes'
  }
  else if (num % 2 === 0) {
    corrAnswer = 'no'
  }
  let sqrt = Math.sqrt(num)
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      corrAnswer = 'no'
      break
    }
  }

  console.log('Question: ' + num)

  let answer = myUtils.usAnswer()
  myEngine.checkAnswer(answer, corrAnswer)
  if (answer !== corrAnswer) {
    return false
  }
}

export const exPrime = () => {
  return myEngine.brainСycle(prime)
}

export default prime
