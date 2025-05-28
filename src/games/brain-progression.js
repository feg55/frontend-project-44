#!/usr/bin/env node
import * as myUtils from '../utils.js'
import * as myEngine from '../engine.js'

console.log('What number is missing in the progression?')

const progress = () => {
  const progressMass = []
  const start = myUtils.randomizer(1, 20)
  const step = myUtils.randomizer(1, 10)

  for (let i = 0; i < myUtils.randomizer(5, 10); i++) {
    progressMass.push(start + i * step)
  }
  const numAns = myUtils.randomizer(0, progressMass.length - 1)

  let corrAnswer = progressMass[numAns]
  // console.log(progressMass);
  progressMass[numAns] = '..'
  const betterOutput = progressMass.join(' ')
  console.log('Question: ' + betterOutput)
  let answer = Number(myUtils.usAnswer())

  myEngine.checkAnswer(answer, corrAnswer)
  if (answer !== corrAnswer) {
    return false
  }
}

export const exProgression = () => {
  return myEngine.brainСycle(progress)
}

export default progress
