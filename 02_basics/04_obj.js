// Obj part 2

const tinderUser = new Object() // Creating an empty object using the Object constructor


tinderUser.id = "123abc"
tinderUser.name = "Keshav"
tinderUser.age = 22
tinderUser.isActive = true

 // Creating an empty object using object literal notation

const tinderUser2 = {
    email: "someone@gmail,com",
    fullname: {
        userfullname: {
            firstName: "Prashant",
            lastName: "Mishra"
        }

    }
}

console.log(tinderUser2.fullname.userfullname.firstName); // Accessing nested properties in the object

const obj1 = {1: "a", 2: "b", 3: "c"}; // Object with numeric keys
const obj2 = {4: "x", 5: "y", 6: "z"}; // Object with string keys 

const obj3 = {...obj1, ...obj2}; // Merging two objects using spread operator

const obj4 = Object.assign({}, obj1, obj2); // Merging two objects using Object.assign

console.log(obj3); // Output: {1: "a", 2: "b", 3: "c", 4: "x", 5: "y", 6: "z"}
console.log(obj4); // Output: {1: "a", 2: "b", 3: "c", 4: "x", 5: "y", 6: "z"}