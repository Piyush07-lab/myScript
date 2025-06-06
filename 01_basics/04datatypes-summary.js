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
 
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2) // false, because each Symbol is unique 

const bigNumber = 874672873876764764844626428n // n at the end indicates a BigInt

//Array, Obj, Functions

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
