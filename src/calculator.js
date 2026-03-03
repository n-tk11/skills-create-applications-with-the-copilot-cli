#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      - Addition: adds two numbers (e.g. node calculator.js add 5 3)
 *   subtract - Subtraction: subtracts the second number from the first (e.g. node calculator.js subtract 9 4)
 *   multiply - Multiplication: multiplies two numbers (e.g. node calculator.js multiply 6 7)
 *   divide   - Division: divides the first number by the second (e.g. node calculator.js divide 10 2)
 *   modulo   - Modulo: returns the remainder of a divided by b (e.g. node calculator.js modulo 10 3)
 *   power    - Exponentiation: raises base to the given exponent (e.g. node calculator.js power 2 8)
 *   sqrt     - Square Root: returns the square root of a number (e.g. node calculator.js sqrt 25)
 *
 * Usage: node calculator.js <operation> <num1> [num2]
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

// Modulo: returns the remainder of a divided by b; throws on division by zero
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed.');
  return a % b;
}

// Power (Exponentiation): returns base raised to the given exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n; throws for negative numbers
function squareRoot(n) {
  if (n < 0) throw new Error('Square root of a negative number is not allowed.');
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// Run as CLI only when executed directly
if (require.main === module) {
  const [,, operation, arg1, arg2] = process.argv;
  const num1 = parseFloat(arg1);
  const num2 = parseFloat(arg2);

  // sqrt only needs one operand; all other operations need two
  const isSingleArg = operation === 'sqrt';

  if (!operation || isNaN(num1) || (!isSingleArg && isNaN(num2))) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power> <num1> <num2>');
    console.error('       node calculator.js sqrt <num>');
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
      case 'modulo':
        console.log(`${num1} % ${num2} = ${modulo(num1, num2)}`);
        break;
      case 'power':
        console.log(`${num1} ^ ${num2} = ${power(num1, num2)}`);
        break;
      case 'sqrt':
        console.log(`sqrt(${num1}) = ${squareRoot(num1)}`);
        break;
      default:
        console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, divide, modulo, power, or sqrt.`);
        process.exit(1);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
