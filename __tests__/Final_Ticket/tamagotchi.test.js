// tamagotchi.test.js

const { Tamagotchi, startGame } = require("../../script.js");

// test for testing Tamagotchi
describe("Tamagotchi", () => {
  let pet;

  // Set up a new Tamagotchi before each test
  beforeEach(() => {
    pet = new Tamagotchi("TestPet");
  });

  // Test if the Tamagotchi is initialized correctly
  test("should initialize with a name and random fullness, happiness, and energy", () => {
    expect(pet.name).toBe("TestPet"); // Check the name
    expect(pet.fullness).toBeGreaterThan(0); // Fullness should be greater than 0
    expect(pet.fullness).toBeLessThan(101); // Fullness should be less than or equal to 100
    expect(pet.happiness).toBeGreaterThan(0); // Happiness should be greater than 0
    expect(pet.happiness).toBeLessThan(101); // Happiness should be less than or equal to 100
    expect(pet.energy).toBeGreaterThan(0); // Energy should be greater than 0
    expect(pet.energy).toBeLessThan(101); // Energy should be less than or equal to 100
  });

  // Test if the Tamagotchi is alive initially
  test("should be alive initially", () => {
    expect(pet.isAlive()).toBe(true); // Tamagotchi should be alive
  });

  // Test if the Tamagotchi dies when it's too full
  test("should die if fullness exceeds 100", () => {
    pet.fullness = 100; // Set fullness to 100
    pet.feed(); // Feed the pet to increase fullness
    expect(pet.isAlive()).toBe(false); // Expect the pet to be dead due to overfeeding
    expect(console.log).toHaveBeenCalled(); // Check if something was logged

    // Test if the Tamagotchi dies when underfed
    test("should die if fullness is 0 or less", () => {
      pet.fullness = 1; // Set fullness to 1
      pet.fullness -= 1; // Simulate neglect by reducing fullness
      expect(pet.isAlive()).toBe(false); // Expect the pet to be dead due to neglect
      expect(console.log).toHaveBeenCalled(); // Check if something was logged

      // Test if the Tamagotchi dies when too sad
      test("should die if happiness is 0 or less", () => {
        pet = new Tamagotchi("TestPet"); // Reinitialize the pet
        pet.happiness = 1; // Set happiness to 1
        pet.happiness -= 1; // Simulate neglect by reducing happiness
        expect(pet.isAlive()).toBe(false); // Expect the pet to be dead due to neglect
        expect(console.log).toHaveBeenCalled(); // Check if something was logged
      });

      // Test if the Tamagotchi dies when no energy
      test("should die if energy is 0 or less", () => {
        pet = new Tamagotchi("TestPet"); // Reinitialize the pet
        pet.energy = 1; // Set energy to 1
        pet.energy -= 1; // Simulate neglect by reducing energy
        expect(pet.isAlive()).toBe(false); // Expect the pet to be dead due to neglect
        expect(console.log).toHaveBeenCalled(); // Check if something was logged
      });

      // Test fullness is increased when fed
      test("should increase fullness when fed", () => {
        const initialFullness = pet.fullness; // Store initial fullness
        pet.feed(); // Feed the pet
        expect(pet.fullness).toBe(initialFullness + 10); // Expect fullness to increase by 10
        expect(console.log).toHaveBeenCalled(); // Check if something was logged
      });

      // Test fullness is decreased when playing
      test("should decrease fullness and energy when playing, and increase happiness", () => {
        const initialFullness = pet.fullness; // Store initial fullness
        const initialEnergy = pet.energy; // Store initial energy
        const initialHappiness = pet.happiness; // Store initial happiness

        pet.play(); // Play with the pet

        // Expect fullness to decrease by 20
        expect(pet.fullness).toBe(initialFullness - 20);
        // Expect energy to decrease by 20
        expect(pet.energy).toBe(initialEnergy - 20);
        // Expect happiness to increase by 20
        expect(pet.happiness).toBe(initialHappiness + 20);
        expect(console.log).toHaveBeenCalled(); // Check if something was logged
      });
    });

    // Test fullness is decreased and energy is increased when sleeping
    test("should decrease fullness and increase energy when sleeping", () => {
      const initialFullness = pet.fullness; // Store initial fullness
      const initialEnergy = pet.energy; // Store initial energy

      pet.sleep(); // Put the pet to sleep

      // Expect fullness to decrease by 10
      expect(pet.fullness).toBe(initialFullness - 10);
      // Expect energy to increase by 20
      expect(pet.energy).toBe(initialEnergy + 20);
      expect(console.log).toHaveBeenCalled(); // Check if console.log was called
    });
  });
});
