// Fuctions basically packs a thread of codes in a package for reuse.

let name = 'Piyush'
let lastname = 'Mishra' // Obviously one way is this, add both these variables and return a single conjoined variable. But that is too many steps

// Functions will help us consize those steps.

function sayMyName(){
    return `You're ${name} ${lastname}!`
}

// console.log(sayMyName());


function sumOf(num1, num2){
    return num1 + num2
}

const result = sumOf(20, 4)

// console.log("Result: ", result); // Or I could just declare result variable within the scope of the function before rturning it. Depends on the need.

// function loginUserMessage(userName){
//     if(userName === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${userName} just logged in!`
// } // This works obv but it's not used coz big argument inside and me lazy.

// function loginUserMessage(userName = ""){
//     return `${userName} just logged in!`
// } // This is what I would do coz it's less typing.


// console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1    // [Rest operator]
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    userName: "piyush",
    id: "A0240764"
}

function handleObj(anyobject) {
    console.log(`Username is ${anyobject.userName}, and their Id is ${anyobject.id}`);
}

handleObj(user)