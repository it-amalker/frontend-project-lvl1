#!/usr/bin/env node
import { getRandomNumber } from '..';

const maxRandomNumber = 100;

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\n';

export default () => {
  const conditions = [];
  const answers = [];
  const correctAnswer = (value) => (value % 2 === 0 ? 'yes' : 'no');
  for (let i = 0; i < 3; i += 1) {
    conditions.push(getRandomNumber(maxRandomNumber));
    answers.push(correctAnswer(conditions[i]));
  }

  return [conditions, answers];
};
