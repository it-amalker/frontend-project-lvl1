import getRandomNumber from '../utils';
import runGame from '../engine';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateGameConditions = () => {
  const guessNumber = getRandomNumber();
  const condition = guessNumber;
  const answer = isEven(guessNumber) ? 'yes' : 'no';

  return [condition, answer];
};

export default () => runGame(gameRules, generateGameConditions);
