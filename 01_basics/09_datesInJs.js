// Dates

let myDate = new Date(); // Current date and time
// console.log(myDate.toDateString); // Display date as a string
// console.log(myDate.toLocaleDateString()); // Local date format
// console.log(myDate.toTimeString()); // Current time
// console.log(myDate.toISOString()); // ISO format
// console.log(myDate.getFullYear()); // Get the year
// console.log(myDate.getMonth()); // Get the month (0-11)
// console.log(myDate.getDate()); // Get the day of the month (1-31)

let myBirthday = new Date(2002, 1, 7, 22, 16, 37);

// console.log(myBirthday.toLocaleString()); // Display birthday as a string

let aDate = new Date("02-07-2024"); // Create a date from a string
// console.log(aDate.toLocaleString()); // Display the date as a string

let myTimeStamp = Date.now(); // Get the current timestamp in milliseconds

// console.log(myTimeStamp); // Display the timestamp
// console.log(myBirthday.getTime()); // Get the timestamp of myBirthday 

console.log(`${myBirthday.toLocaleString('default', {
    weekday: 'long', // Full name of the day
    year: 'numeric', // Full year
    month: 'long', // Full name of the month
    day: 'numeric', // Day of the month
    hour: '2-digit', // Hour in 2-digit format
    minute: '2-digit', // Minute in 2-digit format
    second: '2-digit' // Second in 2-digit format
})} was born a small child, who would grow up to become the person who changes the world. Not just a human but a god. The great woman who gave birth to this child is unknown of the greatness of this child. To her, He's just her son, her hope and her life support.`);



