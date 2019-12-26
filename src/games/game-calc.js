import { getRandomNumber, getRandomOperator } from '..';

const gameRules = 'What is the result of the expression?\n';

const generateExpression = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const operator = getRandomOperator();

  return `${a} ${operator} ${b}`;
};

const calcExpression = (expression) => {
  const split = expression.split(' ');
  const [a, operator, b] = split;
  let result = 0;
  switch (operator) {
    case '+':
      result = (+a) + (+b);
      break;
    case '-':
      result = (+a) - (+b);
      break;
    case '*':
      result = (+a) * (+b);
      break;
    default:
      console.log('No such operator.');
  }
  return String(result);
};

export { gameRules, generateExpression, calcExpression };
