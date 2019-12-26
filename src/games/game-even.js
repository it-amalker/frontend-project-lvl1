import { getRandomNumber } from '..';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const generateNumber = () => getRandomNumber();

const getAnswer = (number) => {
  const correctAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

  return correctAnswer(number);
};

export { gameRules, generateNumber, getAnswer };
