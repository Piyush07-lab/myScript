// If

// if (true) {
//     return "something"
// }

// Example 

const isLoggedIn = true

// if (isLoggedIn == true) {
// console.log("User is logged in");
// } // this is one way to do it, but ofc there are more ways.

// We can check for true or false in more than one way which depends on what kind of project we are making and how much time we have.

// == , != or just !variable

// if (!isLoggedIn) { // This is "not operator" it checks the variable for negetive value. 
//     console.log("User is not logged in!");
// }

// // or we can do

// if (isLoggedIn != true) {
//     console.log("User is not logged in!")
// }

// all these do the same thing but the approach is different

// This is just one type of example.

// if-else

let bal = 275

function checkBalance() {

    if (bal === undefined || bal === null || isNaN(bal)) {
        return "No Balance!!!"
    } else if (bal <= 9 && bal >= 1) {
        return `Insufficient balance ${bal}, recharge immediately`
    } else if (bal <= 49 && bal >= 10) {
        return `Balance is ${bal}...\n  Balance is less than 50, recharge to avoid inconvinence.`
    } else if (bal > 1000) {
        return `Suspisipous balance amount.\n It is over the allowed limit!!! \n Please contact techinical support.`
    } else {
        return `Balance is ${bal}`;
    }

}

console.log(checkBalance());