import getRandomNumber from '../utils';
import runGame from '../engine';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameConditions = () => {
  const condition = getRandomNumber();
  const answer = isPrime(condition) ? 'yes' : 'no';
  return [condition, answer];
};

export default () => runGame(gameRules, generateGameConditions);
