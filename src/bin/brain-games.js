#!/usr/bin/env node
import { greeting, getUserName } from '..';

greeting();
console.log('');
console.log(`Hello, ${getUserName()}!`);
