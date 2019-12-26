import {
  printGreeting, printGameRules, getUserName, getUserAnswer,
} from '.';


const runGame = (rules, generateTask, getCorrectAnswer) => {
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

export default runGame;
