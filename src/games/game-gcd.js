import { getRandomNumber, compareNumbers } from '..';

const gameRules = 'Find the greatest common divisor of given numbers.\n';

const generateTwoNumbers = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();

  return `${a} ${b}`;
};

const findGcd = (numbers) => {
  const split = numbers.split(' ');
  const [num1, num2] = split;
  const bigger = compareNumbers(num1, num2, 'big');
  const smaller = compareNumbers(num1, num2, 'small');
  const result = 1;
  for (let i = smaller; i > 1; i -= 1) {
    if (bigger % i === 0 && smaller % i === 0) {
      return String(i);
    }
  }

  return String(result);
};

export { gameRules, generateTwoNumbers, findGcd };
