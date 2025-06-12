// Fuctions basically packs a thread of codes in a package for reuse.

let name = 'Piyush'
let lastname = 'Mishra' // Obviously one way is this, add both these variables and return a single conjoined variable. But that is too many steps

// Functions will help us consize those steps.

function sayMyName(){
    return `You're ${name} ${lastname}!`
}

console.log(sayMyName());


function sumOf(num1, num2){
    console.log(num1 + num2);
}

sumOf(7476473, 67647741983)