// Objects

// object litrals

const mySym = Symbol('key1');

const JsUser = {
    name: "Piyush",
    age: 23,
    [mySym]: "mykey1", // Using a symbol as a key1. 
    location: "Delhi",
    email: "piyushmihraone999@gmail.com",
    isActive: true,
}



// console.log(JsUser.email); // Accessing object properties, but it seems like a function call
// console.log(JsUser['email']); // Accessing object properties using bracket notation. Appropriate for dynamic property names.
console.log(typeof JsUser[mySym]); // Accessing the property using a symbol key

JsUser.email = "theone1117@outlook.com"; // Updating the email property
// console.log(JsUser.email); // Accessing the updated email property

// Object.freeze(JsUser); // Freezing the object to prevent further modifications

console.log(JsUser);

JsUser.greeting = function() {
    return `Hello, ${this.name}! Welcome to the world of JavaScript!`;
};

console.log(JsUser.greeting()); // Calling the greeting method
// It didn't work because the object was frozen






// Singleton object
// const person = {
//   name: 'John',
// }

