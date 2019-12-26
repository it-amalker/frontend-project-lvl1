#!/usr/bin/env node
import { printGreeting, getUserName } from '..';

printGreeting();
console.log('');
console.log(`Hello, ${getUserName()}!`);
