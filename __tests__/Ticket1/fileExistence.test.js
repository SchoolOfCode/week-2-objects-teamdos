const fs = require("fs");

// Test for index.html
describe("File Existence Tests", () => {
  test("index.html should exist", () => {
    expect(fs.existsSync("./index.html")).toBe(true, "html file needs to be created");
  });

// Test for styles.css
  test("styles.css should exist", () => {
    expect(fs.existsSync("./styles.css")).toBe(true, "css file needs to be created");
  });

// Test for script.js
  test("script.js should exist", () => {
    expect(fs.existsSync("./script.js")).toBe(true, "js file needs to be created");
  });
});
