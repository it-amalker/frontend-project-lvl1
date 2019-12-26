import { getRandomNumber } from '..';

const gameRules = 'What number is missing in the progression?\n';

const generateProgression = () => {
  const sequenceLength = 10;
  const start = getRandomNumber();
  const diff = getRandomNumber();
  const hiddenIndex = getRandomNumber(sequenceLength, 'floor');
  const progression = [];
  for (let i = 0; i < sequenceLength; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(start + diff * i);
    }
  }

  return progression.join(' ');
};

const calcNumber = (progression) => {
  const numbers = progression.split(' ');
  const hiddenNumIndex = numbers.indexOf('..');
  const lastIndex = numbers.length - 1;
  let result = 0;
  if (hiddenNumIndex !== 0 && hiddenNumIndex !== lastIndex) {
    result = ((+numbers[hiddenNumIndex - 1]) + (+numbers[hiddenNumIndex + 1])) / 2;
  }
  if (hiddenNumIndex === 0) {
    const diff = ((+numbers[2]) - (+numbers[1]));
    result = (+numbers[1] - diff);
  }
  if (hiddenNumIndex === lastIndex) {
    const diff = ((+numbers[lastIndex - 1]) - (+numbers[lastIndex - 2]));
    result = (+numbers[lastIndex - 1] + diff);
  }

  return String(result);
};

export { gameRules, generateProgression, calcNumber };
