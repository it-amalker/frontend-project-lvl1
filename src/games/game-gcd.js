import { getRandomNumber, compareNumbers } from '..';

const gameRules = 'Find the greatest common divisor of given numbers.\n';

const generateTwoNumbers = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();

  return `${a} ${b}`;
};

const findGcd = (numbers) => {
  const array = numbers.split(' ');
  const [num1, num2] = array;
  const bigger = compareNumbers(num1, num2, 'getBiggest');
  const smaller = compareNumbers(num1, num2, 'getSmallest');
  const result = 1;
  for (let i = smaller; i > 1; i -= 1) {
    if (bigger % i === 0 && smaller % i === 0) {
      return String(i);
    }
  }

  return String(result);
};

export { gameRules, generateTwoNumbers, findGcd };
