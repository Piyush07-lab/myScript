// console.log("2" > 1); // true (But don't use different datatypes in comparison)

// console.log(2 < 1); // false (This is a true number comparison)
// console.log(2 != 2); // false (This is a true number comparison)

// console.log(null > 0); // false (null is treated as 0 in comparisons)
// console.log(null < 0); // false (null is treated as 0 in comparisons)
// console.log(null === 0); // false (null is not equal to 0)
console.log(null <= 0); // true (null is treated as 0 in comparisons)

console.log(undefined > 0); // false (undefined is not a number)
console.log(undefined < 0); // false (undefined is not a number)
console.log(undefined == 0); // false (undefined is not equal to 0)
console.log(undefined <= 0); // false (undefined is not a number)

// Note: Comparisons with undefined and null can lead to unexpected results, so it's best to avoid them.

// Use strict equality (===) and inequality (!==) for better type safety
console.log(2 === "2"); // false (strict equality checks both value and type)
console.log(2 !== "2"); // true (strict inequality checks both value and type)
