import getRandomNumber from '../utils';
import runGame from '../engine';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateGameConditions = () => {
  const condition = getRandomNumber();
  const answer = isEven(condition) ? 'yes' : 'no';
  return [condition, answer];
};

export default () => runGame(gameRules, generateGameConditions);
