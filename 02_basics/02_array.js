// Array part 2

console.log("Array part 2 :- ");

prashantSkills = ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"];

piyushSkills = ["Him", "God", "Real-G"];

const combinedSkills = prashantSkills.concat(piyushSkills); // This will combine both arrays into a new array.

// console.log("Prashant's Skills: ", prashantSkills);
// console.log("Piyush's Skills: ", piyushSkills);

prashantSkills.push(piyushSkills) // This will add the entire piyushSkills array as a single element to prashantSkills


// console.log("Combined Skills: ", combinedSkills);

const allSkills = [...prashantSkills, ...piyushSkills]; // This will combine both arrays into a new array using spread operator.

// console.log("All Skills using spread operator: ", allSkills);

const anotherOne = [1, 2, 3, [4, 5, 6, [7, 8]]] // This is a nested array with multiple levels of depth.

const flatArray = anotherOne.flat(2); // This will flatten the array to a depth of 2. We could also use flat(Infinity) to flatten it completely. but it is not recommended as it can cause performance issues.

// console.log("Flat Array: ", flatArray); // This will print the flattened array.

// console.log(Array.isArray("Piyush"));
// This will check if the given value is an array or not. It will return false as "Piyush" is a string.

// console.log(Array.from("Piyush")); // This will convert the string "Piyush" into an array of characters. It will return ['P', 'i', 'y', 'u', 's', 'h'].
// console.log(Array.from({name: "Piyush"})); // Empty array as the object is not iterable. It will return []. We'll see why later.

let score1 = 87
let score2 = 93
let score3 = 89

console.log("All the Scores", Array.of(score1, score2, score3)); // This will create an array with the given values. It will return [87, 93, 89].




