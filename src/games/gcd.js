import getRandomNumber from '../utils';
import runGame from '../engine';

export const compareNumbers = (num1, num2, arg = 'getBiggest') => {
  let result = 0;
  if (arg === 'getBiggest') {
    result = (num1 >= num2 ? num1 : num2);
  }
  if (arg === 'getSmallest') {
    result = (num1 >= num2 ? num2 : num1);
  }

  return result;
};

const startGcdGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.\n';

  const generateGameConditions = () => {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const condition = `${a} ${b}`;

    const findGcd = (number1, number2) => {
      const bigger = compareNumbers(number1, number2, 'getBiggest');
      const smaller = compareNumbers(number1, number2, 'getSmallest');
      const result = 1;
      for (let i = smaller; i > 1; i -= 1) {
        if (bigger % i === 0 && smaller % i === 0) {
          return i;
        }
      }

      return result;
    };
    const answer = String(findGcd(a, b));

    return [condition, answer];
  };

  runGame(gameRules, generateGameConditions);
};

export default startGcdGame;
