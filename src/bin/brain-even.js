#!/usr/bin/env node
import runGame from '../engine';
import { gameRules, generateNumber, getAnswer } from '../games/game-even';

console.log(runGame(gameRules, generateNumber, getAnswer));
