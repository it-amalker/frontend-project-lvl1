import readlineSync from 'readline-sync';

export const printGreeting = () => console.log('Welcome to the Brain Games!');
export const printGameRules = (rules) => console.log(rules);

export const getUserName = () => readlineSync.question('May I have your name? ');
export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const getRandomNumber = (maxNum = 100, round = 'ceil') => {
  const randomNum = Math.random() * maxNum;
  let result = 0;
  if (round === 'floor') {
    result = Math.floor(randomNum);
  }
  if (round === 'ceil') {
    result = Math.ceil(randomNum);
  }

  return result;
};

export const getRandomOperator = () => {
  const operators = '+-*';
  const index = getRandomNumber(operators.length, 'floor');

  return operators[index];
};

export const compareNumbers = (number1, number2, arg = 'getBiggest') => {
  const num1 = Number(number1);
  const num2 = Number(number2);
  let result = 0;
  if (arg === 'getBiggest') {
    result = (num1 >= num2 ? num1 : num2);
  }
  if (arg === 'getSmallest') {
    result = (num1 >= num2 ? num2 : num1);
  }

  return result;
};
