import getRandomNumber from '../utils';
import runGame from '../engine';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateGameConditions = () => {
  const number = getRandomNumber();
  const answer = isEven(number) ? 'yes' : 'no';
  return [String(number), answer];
};

export default () => runGame(gameRules, generateGameConditions);
