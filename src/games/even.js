import getRandomNumber from '../utils';
import runGame from '../engine';

const startEvenGame = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\n';

  const generateGameConditions = () => {
    const guessNumber = getRandomNumber();
    const condition = guessNumber;
    const answer = guessNumber % 2 === 0 ? 'yes' : 'no';

    return [condition, answer];
  };

  runGame(gameRules, generateGameConditions);
};

export default startEvenGame;
