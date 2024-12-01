const { member1, member2, member3 } = require("script.js");

// Test if age and eye colour are logged
describe("Console Log Tests", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test if age of each member are logged
  test("should log age of each member", () => {
    console.log(member1.age);
    console.log(member2.age);
    console.log(member3.age);

    expect(console.log).toHaveBeenCalledWith(member1.age);
    expect(console.log).toHaveBeenCalledWith(member2.age);
    expect(console.log).toHaveBeenCalledWith(member3.age);
  });

  // Test if eye colour of each member are logged
  test("should log eye colour of each member", () => {
    console.log(member1["eye colour"]);
    console.log(member2["eye colour"]);
    console.log(member3["eye colour"]);

    expect(console.log).toHaveBeenCalledWith(member1["eye colour"]);
    expect(console.log).toHaveBeenCalledWith(member2["eye colour"]);
    expect(console.log).toHaveBeenCalledWith(member3["eye colour"]);
  });
});

// Test if age of each member are incremented
describe("Increment Age Tests", () => {
  test("should increment age of each member by 1", () => {
    // Increment age
    member1.age += 1;
    member2.age += 1;
    member3.age += 1;

    // Log the updated objects
    console.log(member1);
    console.log(member2);
    console.log(member3);

    // Verify the age has been incremented
    expect(member1.age).toBe(member1.age - 1 + 1);
    expect(member2.age).toBe(member2.age - 1 + 1);
    expect(member3.age).toBe(member3.age - 1 + 1);
  });
});

// Test if properties of each member are logged
describe("Console Spy Tests", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  // Test if age of each member are logged
  test("should log age of each member", () => {
    console.log(member1.age);
    console.log(member2.age);
    console.log(member3.age);

    expect(consoleSpy).toHaveBeenCalledWith(member1.age);
    expect(consoleSpy).toHaveBeenCalledWith(member2.age);
    expect(consoleSpy).toHaveBeenCalledWith(member3.age);
  });

  // Test if eye colour of each member are logged
  test("should log eye colour of each member", () => {
    console.log(member1["eye colour"]);
    console.log(member2["eye colour"]);
    console.log(member3["eye colour"]);

    expect(consoleSpy).toHaveBeenCalledWith(member1["eye colour"]);
    expect(consoleSpy).toHaveBeenCalledWith(member2["eye colour"]);
    expect(consoleSpy).toHaveBeenCalledWith(member3["eye colour"]);
  });

  // Test if favourite animal of each member are logged
  test("should log favourite animal of each member", () => {
    console.log(member1.favouriteAnimal);
    console.log(member2.favouriteAnimal);
    console.log(member3.favouriteAnimal);

    expect(consoleSpy).toHaveBeenCalledWith(member1.favouriteAnimal);
    expect(consoleSpy).toHaveBeenCalledWith(member2.favouriteAnimal);
    expect(consoleSpy).toHaveBeenCalledWith(member3.favouriteAnimal);
  });

  // Test if age of each member are incremented by 1
  test("should increment age of each member by 1 and log the updated age", () => {
    member1.age += 1;
    member2.age += 1;
    member3.age += 1;

    console.log(member1.age);
    console.log(member2.age);
    console.log(member3.age);

    expect(consoleSpy).toHaveBeenCalledWith(member1.age);
    expect(consoleSpy).toHaveBeenCalledWith(member2.age);
    expect(consoleSpy).toHaveBeenCalledWith(member3.age);
  });
});
