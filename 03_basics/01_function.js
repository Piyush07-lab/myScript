// Fuctions basically packs a thread of codes in a package for reuse.

let name = 'Piyush'
let lastname = 'Mishra' // Obviously one way is this, add both these variables and return a single conjoined variable. But that is too many steps

// Functions will help us cosize thhose steps.

function sayMyName(){
    return `You're ${name} ${lastname}!`
}

console.log(sayMyName());


