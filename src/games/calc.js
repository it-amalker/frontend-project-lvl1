import getRandomNumber from '../utils';
import runGame from '../engine';

const gameRules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = '+-*';
  const index = getRandomNumber(0, operators.length - 1);

  return operators[index];
};

const generateGameConditions = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();
  const condition = `${num1} ${operator} ${num2}`;
  let result = 0;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return null;
  }
  const answer = String(result);

  return [condition, answer];
};

export default () => runGame(gameRules, generateGameConditions);
