// script.test.js

// Import the ourTeam object from script.js
const { ourTeam } = require("../../script");

// Test Suite for ourTeam object
describe("ourTeam Object Definition Tests", () => {
  // Test to check if the ourTeam object is defined
  test(
    "ourTeam should be defined",
    () => {
      expect(ourTeam).toBeDefined();
    },
    "Expected ourTeam to be defined, but it was not."
  );

  // Test to check if ourTeam is an object
  test(
    "ourTeam should be an object",
    () => {
      expect(typeof ourTeam).toBe("object");
    },
    "Expected ourTeam to be an object, but it was not."
  );

  // Test to check if ourTeam has member1, member2, and member3
  test(
    "ourTeam should have member1, member2, and member3",
    () => {
      expect(ourTeam).toHaveProperty("member1");
      expect(ourTeam).toHaveProperty("member2");
      expect(ourTeam).toHaveProperty("member3");
    },
    "Expected ourTeam to have member1, member2, and member3, but one or more were missing."
  );

  // Group of tests for the nested member objects
  describe("Nested Member Objects Tests", () => {
    // Array of member names to iterate over
    const members = ["member1", "member2", "member3"];

    // Loop through each member and test for required keys
    members.forEach((member) => {
      test(
        `${member} should have required keys`,
        () => {
          // Check if the member object is defined
          expect(ourTeam[member]).toBeDefined();

          // Check if the member is an object
          expect(typeof ourTeam[member]).toBe("object");
        },
        `Expected ${member} to be defined and be an object, but it was not.`
      );

      // Check for the presence of required keys
      expect(ourTeam[member]).toHaveProperty("nickname");
      expect(ourTeam[member]).toHaveProperty("superpower");
      expect(ourTeam[member]).toHaveProperty("methodOfTransport");
      expect(ourTeam[member]).toHaveProperty("favouriteAnimal");
    }, `Expected ${member} to have the required keys, but one or more were missing.`);
  });
});

// Check for console logging of favouriteAnimal
describe("Logging Tests", () => {
  // Test to spy on console.log and check favouriteAnimal logging
  test("should log the favouriteAnimal of each team member", () => {
    // Spy on console.log
    console.log = jest.fn();

    // Log the favouriteAnimal of each member
    Object.values(ourTeam).forEach((member) => {
      console.log(member.favouriteAnimal);
    });

    // Check if console.log was called for each member's favouriteAnimal
    expect(console.log).toHaveBeenCalledTimes(3); // Expecting it to be called 3 times
    Object.keys(ourTeam).forEach((member) => {
      expect(console.log).toHaveBeenCalledWith(ourTeam[member].favouriteAnimal);
    });

    // Restore the original console.log
    console.log.mockRestore();
  });
});
