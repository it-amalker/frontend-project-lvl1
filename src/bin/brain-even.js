#!/usr/bin/env node
import { game } from '..';
import generateConditions, { gameRules } from '../games/game-even';

const [conditionsArr, answersArr] = generateConditions();

console.log(game(gameRules, conditionsArr, answersArr));
