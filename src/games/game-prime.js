import getRandomNumber from '..';
import runGame from '../engine';

const startPrimeGame = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

  const generateGameConditions = () => {
    const number = getRandomNumber();
    const condition = number;

    const isPrime = (num) => {
      if (num < 2) {
        return false;
      }
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
          return false;
        }
      }

      return true;
    };
    const answer = isPrime(number) ? 'yes' : 'no';

    return [condition, answer];
  };

  runGame(gameRules, generateGameConditions);
};

export default startPrimeGame;
