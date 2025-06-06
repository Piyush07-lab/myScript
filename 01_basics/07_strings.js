let id = "Piyush";
let repoCount = '7';

//console.log(`Hello, my name is ${id} and I have ${repoCount} repositories.`); // Template literals allow for multi-line strings and string interpolation. The way to use them is by using backticks (`) instead of single or double quotes.It is the way to future-proof your code.

// ways to declare strings
// let str1 = "Hello, World!"; // double quotes
// let str2 = 'Hello, World!'; // single quotes
// let str3 = `Hello, World!`; // backticks (template literals)
const userName = new String("Piyush, Mishra"); // String object (not recommended for simple strings)

const str1 = userName; // Using a string object

// String methods

// console.log(str1.length); // Length of the string
// console.log(str1.toUpperCase()); // Convert to uppercase
//console.log(str1.toLowerCase()); // Convert to lowercase
// console.log(str1.indexOf("is")); // Find the index of a substring
// console.log(str1.slice(0, 5)); // Extract a substring (from index 0 to 5)
// console.log(str1.replace("Mishra", "JavaScript")); // Replace a substring
// console.log(str1.split(", ")); // Split the string into an array
// console.log(str1.trim()); // Remove whitespace from both ends       
// console.log(str1.startsWith("Piyush")); // Check if the string starts with a substring
// console.log(str1.endsWith("!")); // Check if the string ends with a substring
// console.log(str1.includes("Mishra")); // Check if the string contains a substring
// console.log(str1.charAt(0)); // Get the character at a specific index
// console.log(str1.split("")); // Split the string into an array of characters
// console.log(str1.repeat(2)); // Repeat the strings
// console.log(str1.concat(" How are you?")); // Concatenate two strings

console.log(userName);
console.log(str1);   //just to check...


