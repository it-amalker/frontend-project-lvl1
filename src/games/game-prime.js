#!/usr/bin/env node
import { getRandomNumber } from '..';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const generateNumber = () => getRandomNumber();

const getAnswer = (number) => {
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  };

  const correctAnswer = (n) => (isPrime(n) ? 'yes' : 'no');

  return correctAnswer(number);
};

export { gameRules, generateNumber, getAnswer };
