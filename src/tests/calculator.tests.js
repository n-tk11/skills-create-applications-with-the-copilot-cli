/**
 * Unit tests for calculator.js
 *
 * Covers: addition, subtraction, multiplication, division, and edge cases.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// --- Addition ---
describe('add', () => {
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));
  test('10 + 4 = 14', () => expect(add(10, 4)).toBe(14));
  test('adds negative numbers: -5 + -3 = -8', () => expect(add(-5, -3)).toBe(-8));
  test('adds positive and negative: 7 + -2 = 5', () => expect(add(7, -2)).toBe(5));
  test('adds decimals: 1.5 + 2.5 = 4', () => expect(add(1.5, 2.5)).toBe(4));
  test('adds zero: 9 + 0 = 9', () => expect(add(9, 0)).toBe(9));
});

// --- Subtraction ---
describe('subtract', () => {
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));
  test('2 - 3 = -1', () => expect(subtract(2, 3)).toBe(-1));
  test('subtracts negative numbers: -5 - -3 = -2', () => expect(subtract(-5, -3)).toBe(-2));
  test('subtracts decimals: 5.5 - 2.5 = 3', () => expect(subtract(5.5, 2.5)).toBe(3));
  test('subtracts zero: 8 - 0 = 8', () => expect(subtract(8, 0)).toBe(8));
  test('same number: 7 - 7 = 0', () => expect(subtract(7, 7)).toBe(0));
});

// --- Multiplication ---
describe('multiply', () => {
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));
  test('6 * 7 = 42', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies by zero: 5 * 0 = 0', () => expect(multiply(5, 0)).toBe(0));
  test('multiplies negatives: -3 * -4 = 12', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplies positive and negative: 3 * -4 = -12', () => expect(multiply(3, -4)).toBe(-12));
  test('multiplies decimals: 2.5 * 4 = 10', () => expect(multiply(2.5, 4)).toBe(10));
  test('multiplies by one: 9 * 1 = 9', () => expect(multiply(9, 1)).toBe(9));
});

// --- Division ---
describe('divide', () => {
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));
  test('10 / 2 = 5', () => expect(divide(10, 2)).toBe(5));
  test('divides with decimal result: 7 / 2 = 3.5', () => expect(divide(7, 2)).toBe(3.5));
  test('divides negative: -12 / 3 = -4', () => expect(divide(-12, 3)).toBe(-4));
  test('divides two negatives: -12 / -4 = 3', () => expect(divide(-12, -4)).toBe(3));
  test('divides zero by number: 0 / 5 = 0', () => expect(divide(0, 5)).toBe(0));
  test('divides number by itself: 8 / 8 = 1', () => expect(divide(8, 8)).toBe(1));

  // Edge case: division by zero
  test('throws on division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });
  test('throws on division of zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed.');
  });
});

// --- Modulo ---
describe('modulo', () => {
  test('5 % 2 = 1', () => expect(modulo(5, 2)).toBe(1));
  test('10 % 3 = 1', () => expect(modulo(10, 3)).toBe(1));
  test('9 % 3 = 0 (evenly divisible)', () => expect(modulo(9, 3)).toBe(0));
  test('negative dividend: -7 % 3 = -1', () => expect(modulo(-7, 3)).toBe(-1));
  test('negative divisor: 7 % -3 = 1', () => expect(modulo(7, -3)).toBe(1));
  test('decimal: 5.5 % 2 = 1.5', () => expect(modulo(5.5, 2)).toBe(1.5));

  // Edge case: modulo by zero
  test('throws on modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Division by zero is not allowed.');
  });
});

// --- Power (Exponentiation) ---
describe('power', () => {
  test('2 ^ 3 = 8', () => expect(power(2, 3)).toBe(8));
  test('2 ^ 8 = 256', () => expect(power(2, 8)).toBe(256));
  test('5 ^ 2 = 25', () => expect(power(5, 2)).toBe(25));
  test('any number to the power of 0 = 1', () => expect(power(7, 0)).toBe(1));
  test('any number to the power of 1 = itself', () => expect(power(9, 1)).toBe(9));
  test('negative base: -2 ^ 3 = -8', () => expect(power(-2, 3)).toBe(-8));
  test('fractional exponent: 4 ^ 0.5 = 2', () => expect(power(4, 0.5)).toBe(2));
  test('negative exponent: 2 ^ -1 = 0.5', () => expect(power(2, -1)).toBe(0.5));
});

// --- Square Root ---
describe('squareRoot', () => {
  test('√16 = 4', () => expect(squareRoot(16)).toBe(4));
  test('√25 = 5', () => expect(squareRoot(25)).toBe(5));
  test('√9 = 3', () => expect(squareRoot(9)).toBe(3));
  test('√0 = 0', () => expect(squareRoot(0)).toBe(0));
  test('√2 ≈ 1.414', () => expect(squareRoot(2)).toBeCloseTo(1.414, 3));
  test('√0.25 = 0.5', () => expect(squareRoot(0.25)).toBe(0.5));

  // Edge case: square root of negative number
  test('throws for negative number', () => {
    expect(() => squareRoot(-4)).toThrow('Square root of a negative number is not allowed.');
  });
  test('throws for any negative number', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of a negative number is not allowed.');
  });
});
