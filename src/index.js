import readlineSync from 'readline-sync';

export const printGreeting = () => console.log('Welcome to the Brain Games!');
export const printGameRules = (rules) => console.log(rules);

export const getUserName = () => readlineSync.question('May I have your name? ');
export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const getRandomNumber = (maxNum = 100) => Math.ceil(Math.random() * maxNum);
export const getRandomOperator = () => {
  const operators = '+-*';
  const index = Math.floor(Math.random() * operators.length);
  return operators[index];
};

export const runGame = (rules, generateTask, getCorrectAnswer) => {
  printGreeting();
  printGameRules(rules);

  const userName = getUserName();
  console.log(`Hello, ${userName}!\n`);

  const attempts = 3;
  for (let i = 0; i < attempts; i += 1) {
    const task = generateTask();
    console.log(`Question: ${task}`);
    const correctAnswer = getCorrectAnswer(task);
    const userAnswer = getUserAnswer();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};
