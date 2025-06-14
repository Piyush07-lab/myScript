// Arrow function

const user = {
    username: 'hitesh',
    id: 204505,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website!`);  
        console.log(this);
    }
}    

// user.welcomeMessage()
// user.username = "Piyush"
// user.id = 204506
// user.welcomeMessage()

// console.log(this); // This will return an empty object coz right now this is a node environment and not a browser environment. In the browser's console, it will return windows object coz that's how we get it's prototypes there.

// function chai(){
//     let username = "Piyush"
//     console.log(this);
//     console.log(this.username); // This returns undefined coz we can't use it within a function
// }

// chai()

const chai = () => {
    console.log(this);
}

chai()

// So what it arrow functions
// Basic syntax is () => {} for example

// const addnums = (num1, num2) => {
//     return num1 + num2        // this is basic! Simple!
// }

// The one below is implicit returns

const addnums = (num1, num2) => (num1 + num2);

console.log(addnums(78799652, 1));
