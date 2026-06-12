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

const { add, subtract, multiply, divide, modulo, power, sqrt } = require('../calculator');

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

// ── Modulo ────────────────────────────────────────────────────────────────────
describe('modulo', () => {
  test('10 % 3 = 1', () => expect(modulo(10, 3)).toBe(1));
  test('even division returns zero remainder', () => expect(modulo(10, 5)).toBe(0));
  test('modulo with larger divisor returns dividend', () => expect(modulo(3, 10)).toBe(3));
  test('modulo with negative dividend', () => expect(modulo(-10, 3)).toBe(-1));
  test('modulo with decimal numbers', () => expect(modulo(10.5, 3)).toBeCloseTo(1.5));
  test('zero modulo any number is zero', () => expect(modulo(0, 7)).toBe(0));

  // Edge case: modulo by zero must throw
  test('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed.');
  });
});

// ── Power (Exponentiation) ────────────────────────────────────────────────────
describe('power', () => {
  test('2 ** 8 = 256', () => expect(power(2, 8)).toBe(256));
  test('squaring a number', () => expect(power(5, 2)).toBe(25));
  test('any number to the power of 0 is 1', () => expect(power(99, 0)).toBe(1));
  test('any number to the power of 1 is itself', () => expect(power(7, 1)).toBe(7));
  test('negative base with even exponent gives positive', () => expect(power(-3, 2)).toBe(9));
  test('negative base with odd exponent gives negative', () => expect(power(-3, 3)).toBe(-27));
  test('fractional exponent (cube root of 27)', () => expect(power(27, 1 / 3)).toBeCloseTo(3));
  test('zero to any positive power is zero', () => expect(power(0, 5)).toBe(0));
});

// ── Square Root ───────────────────────────────────────────────────────────────
describe('sqrt', () => {
  test('sqrt(144) = 12', () => expect(sqrt(144)).toBe(12));
  test('sqrt(4) = 2', () => expect(sqrt(4)).toBe(2));
  test('sqrt(0) = 0', () => expect(sqrt(0)).toBe(0));
  test('sqrt(1) = 1', () => expect(sqrt(1)).toBe(1));
  test('sqrt of a non-perfect square returns decimal', () => expect(sqrt(2)).toBeCloseTo(1.4142));
  test('sqrt(9) = 3', () => expect(sqrt(9)).toBe(3));

  // Edge case: square root of a negative number must throw
  test('throws an error for square root of a negative number', () => {
    expect(() => sqrt(-1)).toThrow('Square root of a negative number is not allowed.');
  });

  test('throws for large negative number', () => {
    expect(() => sqrt(-100)).toThrow('Square root of a negative number is not allowed.');
  });
});
