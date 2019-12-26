#!/usr/bin/env node
import { runGame } from '..';
import { gameRules, generateNumber, getAnswer } from '../games/game-even';

console.log(runGame(gameRules, generateNumber, getAnswer));
