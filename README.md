## 🪐 OBJECTS

JavaScript has primitive data types like strings, numbers, and booleans for single values. It also has built-in data structures like objects to group related values. Objects store collections of keyed values, useful for representing real-world entities with many characteristics. For example, storing characteristics in separate variables is cumbersome. Instead, objects allow storing all of the values in one place.

Now that you know basics like variables and data types, let's explore objects next. They provide a critical ability to model real-world data in programs. 🎉

## 💡 OBJECTIVES FOR THE WORKSHOP

This workshop is all about _objects_! Here's a glimpse of what you'll have achieved by the end of this workshop:

- Objective 1: Be able to read and write objects using key/value pairs
- Objective 2: Be able to access and modify properties in an object
- Objective 3: Be able to nest objects

## 🎟️ TICKETS

Time to dive into action! 🏊🏽‍♀️ Here's what you'll be working on:

### 🎫 Ticket 1 - GETTING SET UP

**Tasks**:

1. create a `index.html` file in this workshop folder
2. paste the following code into your newly created HTML file and familiarise yourself with the code

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Objects</title>
  </head>
  <body>
    <h1>Objects</h1>
    <img src="./object.webp" alt="object in JavaScript" />
  </body>
</html>
```

3. create a `styles.CSS` file in this workshop folder
4. paste the following code into your newly created CSS file and familiarise yourself with the code

```css
body {
  text-align: center;
  background-color: beige;
  color: blueviolet;
}

img {
  border: 3px inset silver;
}
```

5. link your CSS file to your HTML file
6. create a `script.js` file in this workshop folder
7. link your JS file to your HTML file
8. write a basic console message in your JS file, such as 'Hello World'
9. run your HTML file with LiveServer to open it up in the browser and check everything is working
10. run `npm test ` to pass tests.
11. congratulate yourselves on a job well done 🎉

### 🎫 Ticket 2 - GETTING TO GRIPS WITH OBJECTS

Objects store data in a labeled way. Each value has a property (like a label). Objects organise related information in property-value pairs instead of separate variables. For example, representing a car with properties like make, model, and color. An object could contain `make: 'Toyota'`, `model: 'Prius'`, `color: 'silver'`. It can also contain methods like `drive()` and `brake()` to act on the car. So objects group related data and functionality together.

Read through the following resource https://javascript.info/object and discuss with your teammates:

- What does an object look like in JS?
- When are objects useful for real apps and websites?
- How do you create/initialise an object?

In `script.js`, have each team member create a new object `member1`, `member2`, `member3` representing a person. Inside each object, store properties like name, age, eye colour, height, favorite food, and other details. When you are finished, please copy and paste this line `module.exports = { member1, member2, member3 };` at the bottom of your js file and run `npm test ` in the terminal to pass the tests.

### 🎫 Ticket 3 - NOTATION: HOW TO READ, ACCESS AND MODIFY ITEMS IN AN OBJECT

Hooray, you've just created your first object! 🎉 You know how to create your own objects to store information (or properties) that you want to label using key/value pairs. But what if we want to access a specific piece of data, for example what if we wanted to find out your age?

**Tasks**:

- Using the objects you created earlier, log the age within each object to the console (what do you need to remember when using bracket notation with objects?)
- Using the objects you created earlier, log the eye colour within each object to the console
- It's your birthday, woo! 🎉 using either dot or bracket notation (driver's choice), modify the object's age property to be one year older and then log the object to the console to check it has worked

* Remember to run `npm test ` to pass the tests.

### 🎫 Ticket 4 - NESTED OBJECTS

In JavaScript, objects are flexible and may contain any data type, including other objects (or arrays if they need to be ordered!). As you can probably imagine, this means sometimes you might be working with deeply nested data structures.

For example, you could represent a family as an object (with each family member being a nested object):

```javascript
let family = {
  mum: {
    name: "Susan",
    age: 67,
    height: 179,
    favouriteSongs: [
      "If I Could Turn Back Time",
      "Hit Me Baby One More Time",
      "Bat Out Of Hell",
    ],
    likesCake: true,
  },
  dad: {
    name: "Alvin",
    age: 67,
    height: 178,
    favouriteSongs: ["What You Won't Do For Love", "Hit Me Baby One More Time"],
    likesCake: false,
  },
  brother: {
    name: "Ray",
    age: 45,
    height: 185,
    favouriteSongs: ["Dancing Queen", "All Shook Up"],
    likesCake: true,
  },
};
```

**Tasks**:

- create an object that represents your team `ourTeam`. Each team member `member1`, `member2`, `member3` should be represented as a nested object with the following properties (choose what you want for the values):
  - nickname
  - superpower
  - methodOfTransport
  - favouriteAnimal
- log the nested `favouriteAnimal` of each team member to the console
- please copy and paste this line `module.exports = { ourTeam};` at the bottom of your js file and run `npm test ` in the terminal to pass the tests.
- _stretch goal: add more properties with different data types (for example, functions) and explore accessing values within nested objects_

### 🎫 Ticket 5 - ITERATING THROUGH OBJECTS

We iterate through objects slightly differently to the way we do with arrays and this is because array items have an index to refer to them. One way we loop through objects is by using a `for...in` loop.

**Task**:

- Using the information within https://javascript.info/object#forin, create a function called `logFavouriteAnimals`and loop over your team object using a `for...in` loop that logs each team member's favourite animal to the console.
- Copy and paste this line `module.exports = { ourTeam, logFavouriteAnimals };` at the bottom of your js file and run `npm test ` in the terminal to pass the tests.

### 🎫 Final Ticket - REAL-WORLD EXAMPLE: TAMAGOTCHI GAME

Unfortunately, Keith from accounts is allergic to dogs so the office can't have animals in to boost morale. Your company has asked you to increase the happiness of staff by creating a virtual pet that everyone can play with in the office. Tamagotchi is a virtual pet simulation game.

Remember to copy and paste this line `module.exports = { Tamagotchi, startGame };` at the bottom of your js file and run `npm test ` in the terminal to pass the tests.

**Tasks**:

- Create an object (representing the Tamagotchi virtual pet) that has the properties `name`, `fullness`, `happiness` and `energy` and assign values to each property (the company suggests assigning a number between 1 and 100 to each `hunger`, `happiness` and `energy`)
- Use `prompt` to get user input and allow staff to name the office pet and modify the object to reflect the name the pet has been given.
- Loop while the pet is alive (using the criteria below):
  - When the `fullness` becomes greater than 100, the pet dies (due to overfeeding).
  - When any of the `fullness`, `energy` or `happiness` become less than or equal to 0, the pet dies (due to underfeeding, or no more energy or sadness respectively).
- Inside the loop:

  - Log the pet's current stats to the console. The company wants the pet to "interact" with the user in the console. Your team can decide how to implement this, for example:

    - If `fullness` is low, log a hungry emoji and message
    - If `happiness` is high, log a happy emoji and message
    - If `energy` is low, log a tired emoji and message

    Get creative with different emoji and messages based on the pet's needs to make it seem interactive in the console! This brings the virtual pet to life.

  - Use `prompt` to get user input and ask for either 1, 2 or 3 to ben entered. (The numbers relate to the actions in the table below):

    | Input | Action |
    | ----- | ------ |
    | 1     | Feed   |
    | 2     | Play   |
    | 3     | Sleep  |

  - When the input is "1" (in other words, the selected action is feed), increment the pet's `fullness` by 10
  - When the input is "2" (in other words, the selected action is play), decrement the pet's `fullness` and `energy` by 20 and increment `happiness` by 20.
  - When the input is "3" (in other words, the selected action sleep), decrement the pet's `fullness` by 10 and increment the `energy` by 20.

- When the pet has died, log a message to the console to let the user know.

- _Stretch goal:_ Handle the scenario where the user's input isn't valid (in other words, isn't 1, 2 or 3).
- _Stretch goal:_ As an additional challenge, you could add custom methods to the Tamagotchi object that handle each action like feeding, playing and sleeping. Then instead of directly changing the Tamagotchi properties in the loop, call these new methods that will update the object for you.

🎉 Hooray! Another workshop completed 👏🏼 Have a think about what we've covered in this workshop - what is an object? Why are they useful? What notation do we use to access and modify properties of an object? How do we nest objects and what applications will this have for us on our journey into code? 💪
