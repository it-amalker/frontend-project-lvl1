import getRandomNumber from '../utils';
import runGame from '../engine';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGreaterCommonDivisor = (number1, number2) => {
  let bigger = number1;
  let smaller = number2;
  if (number1 < number2) {
    bigger = number2;
    smaller = number1;
  }
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
  const condition = `${num1} ${num2}`;
  const answer = String(findGreaterCommonDivisor(num1, num2));

  return [condition, answer];
};

export default () => runGame(gameRules, generateGameConditions);
