#!/usr/bin/env node
import { runGame } from '..';
import { gameRules, generateTwoNumbers, findGcd } from '../games/game-gcd';

console.log(runGame(gameRules, generateTwoNumbers, findGcd));
