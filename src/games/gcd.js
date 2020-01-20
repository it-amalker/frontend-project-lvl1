import getRandomNumber from '../utils';
import runGame from '../engine';

const description = 'Find the greatest common divisor of given numbers.';

export const findGreaterCommonDivisor = (number1, number2) => {
  const bigger = Math.max(number1, number2);
  const smaller = Math.min(number1, number2);
  const result = 1;

  for (let i = smaller; i > 1; i -= 1) {
    if (bigger % i === 0 && smaller % i === 0) {
      return i;
    }
  }

  return result;
};

const generateGameConditions = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const answer = findGreaterCommonDivisor(num1, num2);

  return [question, String(answer)];
};

export default () => runGame(description, generateGameConditions);
