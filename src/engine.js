import name from '../src/cli.js'
const userName = name()

export const checkAnswer = (answer, corrAnswer) => {
  if (answer === corrAnswer) {
    console.log('Correct!')
    return true
  }
  else {
    console.log(`${answer} is wrong answer ;( Correct answer was "${corrAnswer}". Let's try again, ${userName}!`)
    return false
  }
}

export const brainCycle = (fnName) => {
  const results = [0, 1, 2].reduce((acc) => {
    if (acc === false) return false
    return fnName()
  }, true)

  if (results === false) {
    return false
  }
  console.log('Congratulations, ' + userName + '!')
  return true
}
