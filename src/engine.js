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

export const brainСycle = (fnName) => {
  for (let i = 0; i < 3; i++) {
    const result = fnName()
    if (result === false) {
      return false
    }
  }
  console.log('Congratulations, ' + userName + '!')
  return true
}
