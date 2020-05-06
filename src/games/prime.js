import getRandomNumber from '../utils';
import runGame from '../engine';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [String(question), answer];
};

const exportFunctions = {
  isPrime,
  run: () => runGame(description, generateGameConditions),
};

export default exportFunctions;
