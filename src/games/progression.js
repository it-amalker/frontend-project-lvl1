import getRandomNumber from '../utils';
import runGame from '../engine';

const description = 'What number is missing in the progression?';

const buildProgression = (props) => {
  const progression = [];
  const {
    start,
    diff,
    hiddenIndex,
    progressionLength,
  } = props;

  for (let i = 0; i < progressionLength; i += 1) {
    const currentNumber = start + diff * i;
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(currentNumber);
    }
  }
  return progression.join(' ');
};

const generateGameConditions = () => {
  const progressionLength = 10;
  const progressionProps = {
    progressionLength,
    start: getRandomNumber(),
    diff: getRandomNumber(),
    hiddenIndex: getRandomNumber(0, progressionLength - 1),
  };
  const answer = ({ start, diff, hiddenIndex }) => `${start + diff * hiddenIndex}`;
  const question = buildProgression(progressionProps);

  return [question, answer(progressionProps)];
};

const exportFunctions = {
  buildProgression,
  run: () => runGame(description, generateGameConditions),
};

export default exportFunctions;
