// Datatypes are of two types mainly: primitive and non-primitive

// | Feature                          | Primitive Datatypes                                      | Non-Primitive Datatypes         |
// |----------------------------------|----------------------------------------------------------|---------------------------------|
// | Examples                         | string, number, boolean, null, undefined, symbol, bigint | object, array, function         |
// | Mutability                       | Immutable                                                | Mutable                         |
// | Passing                          | By value                                                 | By reference                    |
// | Memory Storage                   | Stack                                                    | Heap                            |
// | Comparison                       | By value                                                 | By reference                    |
// | Size                             | Fixed                                                    | Variable                        |
// | Creation                         | Using literals                                           | Using constructors or literals  |
// | Object Nature                    | Not objects                                              | Objects                         |

// JS is dynamically typed, meaning you don't need to declare the type of a variable when you create it. The type is determined at runtime based on the value assigned to the variable.

 // Primitive datatypes are stored in stack memory.

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2) // false, because each Symbol is unique 

const bigNumber = 874672873876764764844626428n // n at the end indicates a BigInt

//Array, Obj, Functions     [These will go in heap memory]

const automotive = ["Ford", "Toyota", "Honda"];
const car = {
  make: "Ford",
  model: "Mustang",
  year: 2021,
  chassie: {
    type: "coupe",
    color: "red"
  }
}; 
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(typeof automotive); // "object"
console.log(typeof car); // "object"
console.log(typeof greet); // "function"

/*

 **************************************************

  * Stack Memory: [Primitive datatypes]

    - Stores primitive values like numbers, strings, booleans, null, undefined, symbols, and BigInts.
    - Each variable holds its value directly.
    - Memory allocation is fast and efficient.
    - It gives you a copy of the value when you assign it to another variable.
    - Changes to the value in one variable do not affect the other variable.
    - When you assign a primitive value to another variable, you're copying the actual data, not a reference.

  * Heap Memory: [Non-Primitive datatypes]

    - Stores non-primitive values like objects, arrays, and functions.
    - Variables hold references to the memory location where the actual data is stored.
    - Memory allocation is more complex and slower than stack memory.
    - Changes to the data in heap memory affect all references to that data.
    - When you assign an object or array to another variable, you're copying the reference, not the actual data.  
  
  **************************************************
  

*/
// Example of stack vs heap memory
let x = 10; // x is stored in stack memory
let y = x; // y gets a copy of the value in x
y = 20; // Changing y does not affect x

console.log(x); // 10
console.log(y); // 20

let obj1 = { name: "Alice" }; // obj1 is stored in heap memory
let obj2 = obj1; // obj2 gets a reference to the same object in heap memory
obj2.name = "Bob"; // Changing obj2 affects obj1 because they reference the same objects

console.log(obj1.name); // "Bob"
console.log(obj2.name); // "Bob"
