#!/usr/bin/env node
import * as myUtils from '../utils.js'
import * as myEngine from '../engine.js'

console.log('Answer "yes" if the number is even, otherwise answer "no".')
const eaven = () => {
  let num = myUtils.randomizer(1, 99)
  const isEven = num => num % 2 === 0
  let corrAnswer

  if (isEven(num)) {
    corrAnswer = 'yes'
  }
  else {
    corrAnswer = 'no'
  }

  console.log('Question: ' + num)

  let answer = myUtils.usAnswer()
  myEngine.checkAnswer(answer, corrAnswer)
  if (answer !== corrAnswer) {
    return false
  }
}

export const exEven = () => {
  return myEngine.brainСycle(eaven)
}

export default eaven
