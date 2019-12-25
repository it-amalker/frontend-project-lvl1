import readlineSync from 'readline-sync';

export const greeting = () => console.log('Welcome to the Brain Games!');
export const printGameRules = (rules) => console.log(rules);

export const getUserName = () => readlineSync.question('May I have your name? ');
export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const getRandomNumber = (maxNum) => Math.floor(Math.random() * maxNum);

export const game = (rules, conditions, correctAnswers) => {
  greeting();
  printGameRules(rules);

  const userName = getUserName();
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < conditions.length; i += 1) {
    console.log(`Question: ${conditions[i]}`);
    const userAnswer = getUserAnswer();
    if (userAnswer === correctAnswers[i]) {
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};
