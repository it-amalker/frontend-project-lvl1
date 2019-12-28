import getRandomNumber from '..';
import runGame from '../engine';

export const getRandomOperator = () => {
  const operators = '+-*';
  const index = getRandomNumber(0, operators.length - 1);

  return operators[index];
};

const startCalcGame = () => {
  const gameRules = 'What is the result of the expression?\n';

  const generateGameConditions = () => {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const operator = getRandomOperator();
    const condition = `${a} ${operator} ${b}`;

    let result = 0;
    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      default:
        result = a * b;
    }
    const answer = String(result);

    return [condition, answer];
  };

  runGame(gameRules, generateGameConditions);
};

export default startCalcGame;
