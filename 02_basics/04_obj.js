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

// console.log(tinderUser2.fullname.userfullname.firstName); // Accessing nested properties in the object

const obj1 = {
    1: "a", 
    2: "b", 
    3: "c"
}; 
const obj2 = {
    4: "x", 
    5: "y", 
    6: "z"
};  

const obj3 = {...obj1, ...obj2}; // Merging two objects using spread operator

const obj4 = Object.assign({}, obj1, obj2); // Merging two objects using Object.assign

// console.log(obj3); 

// console.log(obj4); 

// Now when we recive data from the datbase, it's an array of objects. Now how do access the data of a particular object

// Let's say we have an array of players, each player is an object with various properties

// This is an example of an array of objects representing players in a gameworld. 

const players = [
    {
        playerid: 1,
        name: "Player One",
        details: {
            firstname: "Piyush",
            lastname: "Mishra",
            age: 23,
            email: "piyush@gmail.com",
            address: {
                street: "123 Main St",
                city: "Anytown",
                state: "CA",
                zip: "12345"
            },
            gameworldid: 101,
            gameworld: {
                name: "Fantasy World",
                description: "A magical realm filled with adventures.",
                level: 5,
                experience: 1500,
                items: [
                    { itemid: 1, name: "Sword", type: "Weapon", power: 10 },
                    { itemid: 2, name: "Shield", type: "Armor", power: 5 }
                ]
            }
        }
    },

    {
        playerid: 2,
        name: "Player Two",
        details: {
            firstname: "John",
            lastname: "Doe",
            age: 30,
            email: "someone@gmail.com",
            address: {
                street: "456 Elm St",
                city: "Othertown",
                state: "NY",
                zip: "67890"
            },
            gameworldid: 102,
            gameworld: {
                name: "Mystic Land",
                description: "A land of mystery and magic.",
                level: 10,
                experience: 3000,
                items: [
                    { itemid: 3, name: "Bow", type: "Weapon", power: 15 },
                    { itemid: 4, name: "Helmet", type: "Armor", power: 8 }
                ]
            }
        }
    },

    {
        playerid: 3,
        name: "Player Three",
        details: {
            firstname: "Alice",
            lastname: "Smith",
            age: 28,
            email: "someone@rmail.com",
            address: {
                street: "789 Oak St",
                city: "Sometown",
                state: "TX",
                zip: "54321"
            },
        },
        gameworldid: 103,
        gameworld: {
            name: "Adventure Realm",
            description: "A realm of endless adventures.",
            level: 8,
            experience: 2000,
            items: [
                { itemid: 5, name: "Staff", type: "Weapon", power: 12 },
                { itemid: 6, name: "Boots", type: "Armor", power: 6 }
            ]
        }
    }
]

// console.log(Object.keys(players[0]));
// console.log(Object.values(players[0]));
console.log(Object.entries(players[0])); // This will give you an array of key-value pairs for the first player object

// objects has many possiblities, you can create objects with any properties you want.
// You can also create objects with methods, which are functions that are properties of the object.
// For example, you can create an object that represents a person with a method that returns the person's full name.

console.log(players[0].hasOwnProperty("name")); 
// This will check if the player object has a property called "name" and return true or false



    

