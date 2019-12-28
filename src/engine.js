import readlineSync from 'readline-sync';

const runGame = (rules, generateGameConditions) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const attempts = 3;
  for (let i = 0; i < attempts; i += 1) {
    const [taskConditions, correctAnswer] = generateGameConditions();
    console.log(`Question: ${taskConditions}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default runGame;
