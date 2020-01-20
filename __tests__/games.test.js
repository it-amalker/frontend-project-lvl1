import { isEven } from '../src/games/even';
import { calculate } from '../src/games/calc';
import { findGreaterCommonDivisor as gcd } from '../src/games/gcd';
import { isPrime } from '../src/games/prime';

test('isEven', () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(3)).toBe(false);
  expect(isEven(0)).toBe(true);
});

test('calc', () => {
  expect(calculate(4, 3, '+')).toBe(7);
  expect(calculate(4, 3, '-')).toBe(1);
  expect(calculate(4, 3, '*')).toBe(12);
  expect(calculate(4, 3, '/')).toBeNull();
});

test('gcd', () => {
  expect(gcd(20, 5)).toBe(5);
  expect(gcd(81, 9)).toBe(9);
  expect(gcd(8, 7)).toBe(1);
  expect(gcd(8, 6)).toBe(2);
  expect(gcd(21, 15)).toBe(3);
});

test('prime', () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(661)).toBe(true);
  expect(isPrime(67)).toBe(true);
  expect(isPrime(20)).toBe(false);
  expect(isPrime(1)).toBe(false);
});
