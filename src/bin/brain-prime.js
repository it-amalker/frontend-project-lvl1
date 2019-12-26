#!/usr/bin/env node
import { runGame } from '..';
import { gameRules, generateNumber, getAnswer } from '../games/game-prime';

console.log(runGame(gameRules, generateNumber, getAnswer));
