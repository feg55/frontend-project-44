#!/usr/bin/env node
import * as myEngine from '../engine.js'
import * as myUtils from '../utils.js'

console.log('What is the result of the expression?')
const calc = () => {
  let num1 = myUtils.randomizer(1, 99)
  let num2 = myUtils.randomizer(1, 99)
  let usimb = myUtils.rundomSimb()

  console.log(`Question: ${num1} ${usimb} ${num2}`)

  let corrAnswer = eval(num1 + usimb + num2)
  let answer = Number(myUtils.usAnswer())

  myEngine.checkAnswer(answer, corrAnswer)
  if (answer !== corrAnswer) {
    return false
  }
}
export const exCalc = () => {
  return myEngine.brainСycle(calc)
}
export default calc
