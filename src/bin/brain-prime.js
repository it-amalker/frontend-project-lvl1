#!/usr/bin/env node
import runGame from '../engine';
import { gameRules, generateNumber, getAnswer } from '../games/game-prime';

console.log(runGame(gameRules, generateNumber, getAnswer));
