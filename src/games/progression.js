import getRandomNumber from '../utils';
import runGame from '../engine';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateGameConditions = () => {
  const startNumber = getRandomNumber();
  const diff = getRandomNumber();
  const hiddenMemberIndex = getRandomNumber(0, progressionLength - 1);
  const progression = [];
  const answer = startNumber + diff * hiddenMemberIndex;

  for (let i = 0; i < progressionLength; i += 1) {
    const currentNumber = startNumber + diff * i;
    if (i === hiddenMemberIndex) {
      progression.push('..');
    } else {
      progression.push(currentNumber);
    }
  }
  const question = progression.join(' ');

  return [question, String(answer)];
};

export default () => runGame(description, generateGameConditions);
