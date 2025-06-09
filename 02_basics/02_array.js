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

console.log("Flat Array: ", flatArray); // This will print the flattened array.
