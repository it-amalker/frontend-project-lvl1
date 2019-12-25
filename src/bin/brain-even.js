#!/usr/bin/env node
import greeting, { getUserName, getUserAnswer } from '..';

greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
const userName = getUserName();
console.log(`Hello, ${userName}!`);
console.log('');

const maxRandomNumber = 100;

const isEven = (n) => n % 2 === 0;
const getRightAnswer = (n) => (isEven(n) ? 'yes' : 'no');
const evenGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * maxRandomNumber);
    console.log(`Question: ${randomNumber}`);
    const rightAnswer = getRightAnswer(randomNumber);
    const answer = getUserAnswer();
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

console.log(evenGame());
