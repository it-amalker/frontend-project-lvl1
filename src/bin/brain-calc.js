#!/usr/bin/env node
import { runGame } from '..';
import { gameRules, generateExpression, calcExpression } from '../games/game-calc';

console.log(runGame(gameRules, generateExpression, calcExpression));
