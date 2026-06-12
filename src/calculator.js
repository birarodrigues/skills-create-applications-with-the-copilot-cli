#!/usr/bin/env node

/**
 * calculator.js — Node.js CLI Calculator
 *
 * Supported operations:
 *   add      (+)  — addition
 *   subtract (-)  — subtraction
 *   multiply (x)  — multiplication
 *   divide   (÷)  — division
 *
 * Usage:
 *   node src/calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node src/calculator.js add 5 3        => 8
 *   node src/calculator.js subtract 10 4  => 6
 *   node src/calculator.js multiply 6 7   => 42
 *   node src/calculator.js divide 20 4    => 5
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

// Map operation names to their corresponding functions
const operations = { add, subtract, multiply, divide };

// CLI entry point
function main() {
  const [, , op, rawA, rawB] = process.argv;

  if (!op || rawA === undefined || rawB === undefined) {
    console.error('Usage: node src/calculator.js <add|subtract|multiply|divide> <num1> <num2>');
    process.exit(1);
  }

  if (!operations[op]) {
    console.error(`Unknown operation: "${op}". Use add, subtract, multiply, or divide.`);
    process.exit(1);
  }

  const a = parseFloat(rawA);
  const b = parseFloat(rawB);

  if (isNaN(a) || isNaN(b)) {
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

main();

module.exports = { add, subtract, multiply, divide };
