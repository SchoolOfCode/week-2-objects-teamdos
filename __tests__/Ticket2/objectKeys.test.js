const { member1, member2, member3 } = require("script.js");

// Test if objects have the required keys age, eye color
describe("Object Keys Tests", () => {
  const keysToCheck = ["age", "eye colour"];

  // test member1
  test("member1 should have the required keys", () => {
    keysToCheck.forEach((key) => {
      expect(member1).toHaveProperty(key);
    });
  });

  // test member2
  test("member2 should have the required keys", () => {
    keysToCheck.forEach((key) => {
      expect(member2).toHaveProperty(key);
    });
  });

  // test member3
  test("member3 should have the required keys", () => {
    keysToCheck.forEach((key) => {
      expect(member3).toHaveProperty(key);
    });
  });
});
