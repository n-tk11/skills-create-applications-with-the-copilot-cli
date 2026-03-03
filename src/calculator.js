#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      - Addition: adds two numbers (e.g. node calculator.js add 5 3)
 *   subtract - Subtraction: subtracts the second number from the first (e.g. node calculator.js subtract 9 4)
 *   multiply - Multiplication: multiplies two numbers (e.g. node calculator.js multiply 6 7)
 *   divide   - Division: divides the first number by the second (e.g. node calculator.js divide 10 2)
 *
 * Usage: node calculator.js <operation> <num1> <num2>
 */

const [,, operation, arg1, arg2] = process.argv;

const num1 = parseFloat(arg1);
const num2 = parseFloat(arg2);

// Validate inputs
if (!operation || isNaN(num1) || isNaN(num2)) {
  console.error('Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>');
  process.exit(1);
}

// Perform the requested operation
switch (operation) {
  case 'add':
    // Addition: sum of num1 and num2
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;

  case 'subtract':
    // Subtraction: difference of num1 and num2
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;

  case 'multiply':
    // Multiplication: product of num1 and num2
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;

  case 'divide':
    // Division: quotient of num1 divided by num2 (with division by zero check)
    if (num2 === 0) {
      console.error('Error: Division by zero is not allowed.');
      process.exit(1);
    }
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
    break;

  default:
    console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, or divide.`);
    process.exit(1);
}
