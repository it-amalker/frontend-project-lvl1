import getRandomNumber from '../utils';
import runGame from '../engine';

const description = 'What is the result of the expression?';
const operators = '+-*';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const generateGameConditions = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator);

  return [question, String(answer)];
};

const exportFunctions = {
  calculate,
  run: () => runGame(description, generateGameConditions),
};

export default exportFunctions;
