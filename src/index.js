import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
};

export const getUserName = () => readlineSync.question('May I have your name? ');

export const getUserAnswer = () => readlineSync.question('Your answer: ');
