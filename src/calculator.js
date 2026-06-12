#!/usr/bin/env node

/**
 * calculator.js — Node.js CLI Calculator
 *
 * Supported operations:
 *   add      (+)   — addition
 *   subtract (-)   — subtraction
 *   multiply (x)   — multiplication
 *   divide   (÷)   — division
 *   modulo   (%)   — remainder after division          [two operands]
 *   power    (**)  — exponentiation (base ^ exponent)  [two operands]
 *   sqrt     (√)   — square root                       [one operand]
 *
 * Usage:
 *   node src/calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node src/calculator.js add 5 3        => 8
 *   node src/calculator.js subtract 10 4  => 6
 *   node src/calculator.js multiply 6 7   => 42
 *   node src/calculator.js divide 20 4    => 5
 *   node src/calculator.js modulo 10 3    => 1
 *   node src/calculator.js power 2 8      => 256
 *   node src/calculator.js sqrt 144       => 12
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Error: Division by zero is not allowed.');
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b
// Throws an error if b is zero to prevent modulo by zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Error: Modulo by zero is not allowed.');
  }
  return a % b;
}

// Power: returns base raised to the exponent (base ** exponent)
function power(base, exponent) {
  return base ** exponent;
}

// Square root: returns the square root of a
// Throws an error if a is negative (result would be imaginary)
function sqrt(a) {
  if (a < 0) {
    throw new Error('Error: Square root of a negative number is not allowed.');
  }
  return Math.sqrt(a);
}

// squareRoot: alias for sqrt — returns the square root of n
// Throws an error if n is negative (result would be imaginary)
function squareRoot(n) {
  return sqrt(n);
}

// Single-operand operations (only require one number)
const singleOperandOps = new Set(['sqrt', 'squareRoot']);

// Map operation names to their corresponding functions
const operations = { add, subtract, multiply, divide, modulo, power, sqrt, squareRoot };

// CLI entry point
function main() {
  const [, , op, rawA, rawB] = process.argv;

  if (!op || rawA === undefined) {
    console.error('Usage: node src/calculator.js <add|subtract|multiply|divide|modulo|power|sqrt> <num1> [num2]');
    process.exit(1);
  }

  if (!operations[op]) {
    console.error(`Unknown operation: "${op}". Use add, subtract, multiply, divide, modulo, power, or sqrt.`);
    process.exit(1);
  }

  const a = parseFloat(rawA);
  if (isNaN(a)) {
    console.error('Error: Operand must be a valid number.');
    process.exit(1);
  }

  // sqrt only needs one operand
  if (singleOperandOps.has(op)) {
    try {
      const result = operations[op](a);
      console.log(`${op}(${a}) = ${result}`);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
    return;
  }

  if (rawB === undefined) {
    console.error(`Operation "${op}" requires two operands.`);
    process.exit(1);
  }

  const b = parseFloat(rawB);
  if (isNaN(b)) {
    console.error('Error: Both operands must be valid numbers.');
    process.exit(1);
  }

  try {
    const result = operations[op](a, b);
    console.log(`${a} ${op} ${b} = ${result}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

// Only run CLI entry point when executed directly (not when imported by tests)
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, power, sqrt, squareRoot };
