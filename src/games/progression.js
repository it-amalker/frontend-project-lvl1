import getRandomNumber from '../utils';
import runGame from '../engine';

const gameRules = 'What number is missing in the progression?';

const generateGameConditions = () => {
  const startNumber = getRandomNumber();
  const diff = getRandomNumber();
  const progressionLength = 10;
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const progression = [];
  let hiddenNumber = 0;

  for (let i = 0; i < progressionLength; i += 1) {
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

export default () => runGame(gameRules, generateGameConditions);
