// Array

// const myArr = [1, 2, 3, 4, 5,]
// Array in javascript are dynamic, can hold any type of data. Also they are mutable, meaning you can change the values in the array and the size of the array can change dynamically.

// myArr.push(6); // Add an element to the end of the array
// myArr.pop(); // Remove the last element of the array
// myArr.push("Hello"); // Add a string to the array
// myArr.push({ name: "John" }); // Add an object to the array

// console.log(myArr); 

// console.log(myArr.indexOf(3));
// console.log(myArr.includes("Hello"));

// const newArr = myArr.join()

// console.log(newArr); // Convert array to string
// console.log(typeof newArr); // The type is now string instead of array. So it chages the type of the variable. join() is quite useful when you want to convert an array to a string.

// Slice or Splice

const myArr = [0, 1, 2, 3, 4, 5] 

console.log("A", myArr);

const slicedArr = myArr.slice(1, 3); // Slice the array from index 1 to index 3 (not inclusive)

console.log(slicedArr);

const splicedArr = myArr.splice(1, 3); // Splice the array from index 1 to index 3 and remove those elements from the original array. So the original array will be changed.
console.log("B", myArr); // Original array is changed
console.log("C", splicedArr); // Spliced array is a new array with the elements from index 1 to index 3 

// Unshift and Shift

myArr.unshift(-1, -2); // Add elements to the beginning of the array
console.log("D", myArr); // Original array is changed




