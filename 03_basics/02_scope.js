// Scope of a function

// var c = 300 this will get mutated coz th var declared below inside the block

// let a = 300 // this is outside of the scope so reusing this variable is not a problem

// Same can't be said about var tho

// if (true) {

    // let a = 10
    // const b = 20
    // console.log("inner: ", a);
    
    // var c = 30    average red button
    
// }

// for (let i = 0; i < array.length; i++) {

    // const element = array[i];
    
// }

// nested scope

// function one(){
//     const userName = "Piyush"

//     function two(){
//         const website = "YouTube" 
//         console.log(userName); // Child function can use elements from parent function, coz obv that's like the global scope.
        
//     }
//     console.log(website); // But parent function can not use child's elements [it will throw a not defined error]

//     two()
// }

// one() // this entire shit is apparently called closure.


if (true){
    const username = "piyush"
    if (username ==="piyush") {
        const tagline = "707"
        console.log(username + tagline);
    }
    // console.log(website); // we already know it...
}
// console.log(username);

// ------------------< Interesting >--------------------\\

function addone(num){  // This is a typical function
    return num + 1
}

// An example function

addone(5)

const addtwo = function(num2){  // This is an example of an expression. Like a variable...
    return num2 + 2
}

// Declaring a function withing a variable means something to do with hoisting. You can't access a variable before it's declared but for a normal function declaration it is easy.

addtwo(5)