/**
 * Unit tests for calculator.js
 *
 * Covers: addition, subtraction, multiplication, division, and edge cases.
 */

const { add, subtract, multiply, divide } = require('../calculator');

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
