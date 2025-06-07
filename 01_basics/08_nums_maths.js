const score = 100.024; // Usually a number

const bonus = new Number(50.356); // Using the Number object. It ultimately behaves like a number, but is an object;

// console.log(bonus.toString()); // "50"

const total = score + bonus; 

console.log(total); // 150.38

console.log(score.toPrecision(4)); // "100.0" - This will format the number to 4 significant digits

console.log(total.toPrecision(4)); // "150.4" - This will format the number to 4 significant digits

console.log(total.toFixed(3)); // "150.380" - This will format the number to 2 decimal places

const hundreds = 10000000;

console.log(hundreds.toLocaleString('en-IN')); // "1,00,00,000" - This will format the number with commas as thousands separators

/*
*********************** Maths ***********************
Maths is a built-in object that has properties and methods for mathematical constants and functions.

*/

// console.log(Math); // Math object

// console.log(Math.PI); // 3.141592653589793 - The value of PI
// console.log(Math.abs(-10)); // 10 - Absolute value

// console.log(Math.ceil(4.2)); // 5 - Rounds up to the nearest integer

// console.log(Math.floor(4.8)); // 4 - Rounds down to the nearest integer

// console.log(Math.round(4.5)); // 5 - Rounds to the nearest integer

// console.log(Math.max(1, 2, 3, 4, 5)); // 5 - Maximum value
// console.log(Math.min(1, 2, 3, 4, 5)); // 1 - Minimum value

console.log(Math.random()); // Random number between 0 and 1

console.log((Math.random() * 100) + 1); // Random number between 1 and 100

console.log(Math.floor(Math.random() * 100) + 1); // Random integer between 1 and 100

const min = 1;
const max = 100;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // Random integer between min and max


 
 