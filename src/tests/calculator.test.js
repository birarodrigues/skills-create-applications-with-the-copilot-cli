/**
 * calculator.test.js — Unit tests for calculator.js
 *
 * Covers all four basic arithmetic operations:
 *   add, subtract, multiply, divide
 *
 * Includes image-based examples (calc-basic-operations.png):
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 *
 * Also covers edge cases: negatives, decimals, zero operands,
 * large numbers, and division by zero.
 */

const { add, subtract, multiply, divide } = require('../calculator');

// ── Addition ──────────────────────────────────────────────────────────────────
describe('add', () => {
  // From image: 2 + 3 = 5
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds two positive integers', () => expect(add(10, 20)).toBe(30));
  test('adds a positive and a negative number', () => expect(add(10, -4)).toBe(6));
  test('adds two negative numbers', () => expect(add(-5, -3)).toBe(-8));
  test('adding zero returns the same number', () => expect(add(7, 0)).toBe(7));
  test('adds decimal numbers', () => expect(add(1.5, 2.5)).toBe(4));
  test('adds large numbers', () => expect(add(1_000_000, 2_000_000)).toBe(3_000_000));
});

// ── Subtraction ───────────────────────────────────────────────────────────────
describe('subtract', () => {
  // From image: 10 - 4 = 6
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts two positive integers', () => expect(subtract(20, 8)).toBe(12));
  test('result can be negative', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts a negative number (double negative)', () => expect(subtract(5, -3)).toBe(8));
  test('subtracting zero returns the same number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracts decimal numbers', () => expect(subtract(5.5, 2.5)).toBe(3));
  test('subtracting from zero gives negative result', () => expect(subtract(0, 7)).toBe(-7));
});

// ── Multiplication ────────────────────────────────────────────────────────────
describe('multiply', () => {
  // From image: 45 * 2 = 90
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies two positive integers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies by zero returns zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplies a positive and a negative number', () => expect(multiply(4, -3)).toBe(-12));
  test('multiplies two negative numbers gives positive', () => expect(multiply(-4, -3)).toBe(12));
  test('multiplies decimal numbers', () => expect(multiply(2.5, 4)).toBe(10));
  test('multiplies by one returns the same number', () => expect(multiply(42, 1)).toBe(42));
});

// ── Division ──────────────────────────────────────────────────────────────────
describe('divide', () => {
  // From image: 20 / 5 = 4
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides two positive integers evenly', () => expect(divide(10, 2)).toBe(5));
  test('division resulting in a decimal', () => expect(divide(7, 2)).toBe(3.5));
  test('divides a negative by a positive', () => expect(divide(-12, 4)).toBe(-3));
  test('divides two negatives gives positive', () => expect(divide(-12, -4)).toBe(3));
  test('divides zero by a number returns zero', () => expect(divide(0, 5)).toBe(0));
  test('divides large numbers', () => expect(divide(1_000_000, 1000)).toBe(1000));

  // Edge case: division by zero must throw
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });

  test('throws when dividing negative number by zero', () => {
    expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed.');
  });
});
