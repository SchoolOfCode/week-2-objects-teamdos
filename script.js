
//In script.js, have each team member create a new object member1, member2, member3 representing a person. 
//Inside each object, store properties like name, age, eye colour, height, favorite food, and other details. 
//When you are finished, please copy and paste this line module.exports = { member1, member2, member3 }; 
//at the bottom of your js file and run npm test  in the terminal to pass the tests.

let member1 = {
    name: "Dani",
    age: 34,
    eyeColour: "Blue",
    height: "5ft 4inch",
    favouriteFood: "Sushi",
    favouriteColour: "Blue",
    livesIn: "Wakefield",
}

let member2 = {
    name: "Sumeya",
    age: 25,
    eyeColour: "Brown",
    height: "5ft 4inch",
    favouriteFood: "Sushi",
    favouriteColour: "Green",
    livesIn: "London",
};

let member3 = {
    name: "Oliver",
    age: 28,
    eyeColour: "Brown",
    height: "6ft",
    favouriteFood: "Pizza",
    favouriteColour: "Red",
    livesIn: "Birmingham",
};

const members = [member1, member2, member3];




//Using the objects you created earlier, log the age within each object to the console (what do you need to remember when using bracket notation with objects?)
//Using the objects you created earlier, log the eye colour within each object to the console
//It's your birthday, woo! 🎉 using either dot or bracket notation (driver's choice), modify the object's age property to be one year older and then log the object to the console to check it has worked
//Remember to run npm test  to pass the tests.

for (let i = 0; i < members.length; i++) {
    console.log(members[i].age) }

for (let i = 0; i < members.length; i++) {
        console.log(members[i].eyeColour) }

//It's your birthday, woo! 🎉 using either dot or bracket notation (driver's choice),
//modify the object's age property to be one year older and then log the object to the console to check it has worked

for (let i = 0; i > members.length; i++) {
    members[i].age += 1;
    console.log(members[i])
}


const ourTeam = {
   Dani: {
    nickname: "Dandan",
    superpower: "Flying",
    methodOfTransport: "Flight",
    favouriteAnimal: "Capybara",
    name: "Dani",
    age: 34,
    eyeColour: "Blue",
    height: "5ft 4inch",
    favouriteFood: "Sushi",
    favouriteColour: "Blue",
    livesIn: "Wakefield",
    },
   Sumeya: {
        name: "Sumeya",
        age: 24,
        favouriteAnimal: "Penguin",
        eyeColour: "Brown",
        height: "5ft 4inch",    
        favouriteFood: "Sushi",
        favouriteColour: "Green",
        livesIn: "London",
    },
    Oliver: {
        name: "Oliver",
        favouriteAnimal: "Dog",
        age: 28,
        eyeColour: "Brown",
        height: "6ft",
        favouriteFood: "Pizza",
        favouriteColour: "Red",
        livesIn: "Birmingham",
    },
   };

function logFavouriteAnimals() {
for (let i = 0; i < Object.keys(ourTeam).length; i++) {
    const key = Object.keys(ourTeam)[i];
    // Access the favouriteAnimal property of each team member
    console.log(ourTeam[key].favouriteAnimal);}}



//Tamagotchi game
function tamagotchiGame() {

const tamagotchi = {
    name: prompt("What would you like to name your Tamagotchi?"),
    fullness: 50,
    happiness: 50,
    energy: 50,
}
console.log(`Your Tamagotchi ${tamagotchi.name} is born!`);
console.log(`Fullness: ${tamagotchi.fullness}, Happiness: ${tamagotchi.happiness}, Energy: ${tamagotchi.energy}`);
while (tamagotchi.fullness > 0 || tamagotchi.happiness > 0 || tamagotchi.energy > 0) {
    let action = prompt(`What would you like to do with ${tamagotchi.name}? Feed, Play, Sleep`);
    if (action === "feed" || action === "Feed") {tamagotchi.fullness += 10} else if (action === "play" || action === "Play") 
    {tamagotchi.happiness += 10; tamagotchi.fullness -= 20; tamagotchi.energy -= 20} else if (action === "sleep" || action === "Sleep")
         {tamagotchi.energy += 10; tamagotchi.fullness -= 10; tamagotchi.happiness -= 10}
    if (tamagotchi.fullness > 100) {
    return console.log(`${tamagotchi.name} has died due to overfeeding!`)
    }
    else if (tamagotchi.fullness < 0 || tamagotchi.happiness < 0 || tamagotchi.energy <= 0) {
       alert(`${tamagotchi.name} has died!`);
       return console.log(`${tamagotchi.name} has died!`);
    } else if (tamagotchi.fullness < 50 && tamagotchi.fullness > 0) {
     console.log(`${tamagotchi.name} is hungry!`)
    } else if (tamagotchi.happiness < 50) {
    console.log(`${tamagotchi.name} is unhappy!`)
    }  else if (tamagotchi.energy < 50) {
    console.log(`${tamagotchi.name} is tired!`)
    }
    console.log(`Fullness: ${tamagotchi.fullness}, Happiness: ${tamagotchi.happiness}, Energy: ${tamagotchi.energy}`);
}};

do {
    tamagotchiGame();
} while (prompt("Do you want to play again?") === "yes");
