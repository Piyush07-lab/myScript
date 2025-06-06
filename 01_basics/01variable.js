const accountId = 22469  // Declaring constant means the data is non changable
let accountEmail = "piyushmishraone999@gmail.com"
var accountPassword = "12345"    // var is also mutable, but it's not recommended to use it in modern JavaScript, it has function scope, meaning it can be accessed outside the block where it was defined resulting in potential bugs in larger codebases.
let accountCity = "Jaipur"     // let and var are mutable, meaning we can change their content later
let accountState       //undefined

// accountId = 2    can't change content now, can we?

accountEmail = "theone1117@outlook.com"
accountPassword = "67890"
accountCity = "Jhumritalaiya"

console.table([accountId, accountEmail, accountPassword, accountState, accountCity])