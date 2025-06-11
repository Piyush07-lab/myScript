// Bored so trying just anything to elevate my JS skills
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

// console.log(Object.getPrototypeOf(players[0])); // Returned [object: null prototype].

const {items} = players;






