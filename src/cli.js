import readlineSync from 'readline-sync'

const name = () => {
  console.log('Welcome to the Brain Games!')
  const usName = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + usName + '!')
  return usName
}

export default name
