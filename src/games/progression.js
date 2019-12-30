import getRandomNumber from '../utils';
import runGame from '../engine';

const startProgressionGame = () => {
  const gameRules = 'What number is missing in the progression?\n';

  const generateGameConditions = () => {
    const sequenceLength = 10;
    const startNumber = getRandomNumber();
    const diff = getRandomNumber();
    const hiddenIndex = getRandomNumber(0, sequenceLength - 1);
    const progression = [];
    let hiddenNumber = 0;
    for (let i = 0; i < sequenceLength; i += 1) {
      if (i === hiddenIndex) {
        progression.push('..');
        hiddenNumber = startNumber + diff * i;
      } else {
        progression.push(startNumber + diff * i);
      }
    }
    const condition = progression.join(' ');
    const answer = String(hiddenNumber);

    return [condition, answer];
  };

  runGame(gameRules, generateGameConditions);
};

export default startProgressionGame;
