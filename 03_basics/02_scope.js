// Scope of a function

// var c = 300 this will get mutated coz th var declared below inside the block

let a = 300 // this is outside of the scope so reusing this variable is not a problem

// Same can't be said about var tho

if (true) {

    let a = 10
    const b = 20
    console.log("inner: ", a);
    
    // var c = 30    average red button
    
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log(a);
console.log(b);
console.log(c);

