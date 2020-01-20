import getRandomNumber from '../utils';
import runGame from '../engine';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (num) => num % 2 === 0;

const generateGameConditions = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [String(question), answer];
};

export default () => runGame(description, generateGameConditions);
