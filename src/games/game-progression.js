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
  const array = progression.split(' ');
  const hiddenNumIndex = array.indexOf('..');
  const lastIndex = array.length - 1;
  let result = 0;
  if (hiddenNumIndex !== 0 && hiddenNumIndex !== lastIndex) {
    result = ((+array[hiddenNumIndex - 1]) + (+array[hiddenNumIndex + 1])) / 2;
  }
  if (hiddenNumIndex === 0) {
    const diff = ((+array[2]) - (+array[1]));
    result = (+array[1] - diff);
  }
  if (hiddenNumIndex === lastIndex) {
    const diff = ((+array[lastIndex - 1]) - (+array[lastIndex - 2]));
    result = (+array[lastIndex - 1] + diff);
  }

  return String(result);
};

export { gameRules, generateProgression, calcNumber };
