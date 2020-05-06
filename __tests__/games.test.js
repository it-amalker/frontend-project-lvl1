import gameEven from '../src/games/even';
import gameCalc from '../src/games/calc';
import gameGcd from '../src/games/gcd';
import gamePrime from '../src/games/prime';
import gameProgression from '../src/games/progression';

const genProgressionProps = (length, start, diff, hiddenIndex) => (
  {
    progressionLength: length,
    start,
    diff,
    hiddenIndex,
  }
);

test('isEven', () => {
  expect(gameEven.isEven(4)).toBe(true);
  expect(gameEven.isEven(3)).toBe(false);
  expect(gameEven.isEven(0)).toBe(true);
});

test('calc', () => {
  expect(gameCalc.calculate(4, 3, '+')).toBe(7);
  expect(gameCalc.calculate(4, 3, '-')).toBe(1);
  expect(gameCalc.calculate(4, 3, '*')).toBe(12);
  expect(gameCalc.calculate(4, 3, '/')).toBeNull();
});

test('gcd', () => {
  expect(gameGcd.findGreaterCommonDivisor(20, 5)).toBe(5);
  expect(gameGcd.findGreaterCommonDivisor(8, 7)).toBe(1);
  expect(gameGcd.findGreaterCommonDivisor(8, 6)).toBe(2);
});

test('prime', () => {
  expect(gamePrime.isPrime(2)).toBe(true);
  expect(gamePrime.isPrime(67)).toBe(true);
  expect(gamePrime.isPrime(20)).toBe(false);
  expect(gamePrime.isPrime(1)).toBe(false);
});

test('progression', () => {
  expect(gameProgression
    .buildProgression(genProgressionProps(10, 1, 5, 2)))
    .toBe('1 6 .. 16 21 26 31 36 41 46');
  expect(gameProgression
    .buildProgression(genProgressionProps(5, 24, 10, 0)))
    .toBe('.. 34 44 54 64');
  expect(gameProgression
    .buildProgression(genProgressionProps(5, 5, 10, 4)))
    .toBe('5 15 25 35 ..');
});
