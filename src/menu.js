#!/usr/bin/env node
import readlineSync from 'readline-sync';
import runGameEven from './games/even';
import runGameCalc from './games/calc';
import runGameGcd from './games/gcd';
import runGameProgression from './games/progression';
import runGamePrime from './games/prime';

export default () => {
  console.log('Welcome to the Brain Games!');
  const games = ['Even', 'Calculation', 'Greater Common Divisor', 'Progression', 'Prime'];
  const gameIndex = readlineSync.keyInSelect(games, 'Choose the game: ');

  switch (gameIndex) {
    case 0:
      return runGameEven();
    case 1:
      return runGameCalc();
    case 2:
      return runGameGcd();
    case 3:
      return runGameProgression();
    case 4:
      return runGamePrime();
    default:
      return null;
  }
};
