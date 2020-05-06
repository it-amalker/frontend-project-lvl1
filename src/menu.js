#!/usr/bin/env node
import readlineSync from 'readline-sync';
import gameEven from './games/even';
import gameCalculate from './games/calc';
import gameGcd from './games/gcd';
import gameProgression from './games/progression';
import gamePrime from './games/prime';

export default () => {
  console.log('Welcome to the Brain Games!');
  const games = ['Even', 'Calculation', 'Greater Common Divisor', 'Progression', 'Prime'];
  const gameIndex = readlineSync.keyInSelect(games, 'Choose the game: ');

  switch (gameIndex) {
    case 0:
      return gameEven.run();
    case 1:
      return gameCalculate.run();
    case 2:
      return gameGcd.run();
    case 3:
      return gameProgression.run();
    case 4:
      return gamePrime.run();
    default:
      return null;
  }
};
