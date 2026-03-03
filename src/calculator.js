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

// Addition: returns the sum of two numbers
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of two numbers
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of two numbers
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of two numbers; throws on division by zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed.');
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

// Run as CLI only when executed directly
if (require.main === module) {
  const [,, operation, arg1, arg2] = process.argv;
  const num1 = parseFloat(arg1);
  const num2 = parseFloat(arg2);

  // Validate inputs
  if (!operation || isNaN(num1) || isNaN(num2)) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>');
    process.exit(1);
  }

  // Perform the requested operation
  try {
    switch (operation) {
      case 'add':
        console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
        break;
      case 'subtract':
        console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
        break;
      case 'multiply':
        console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
        break;
      case 'divide':
        console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);
        break;
      default:
        console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, or divide.`);
        process.exit(1);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
