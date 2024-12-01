const fs = require("fs");

describe("HTML Links Tests", () => {
  const htmlPath = "./index.html";
  const cssFile = "styles.css";
  const jsFile = "script.js";

  // Check if CSS is linked in HTML
  test("CSS file should be linked in HTML", () => {
    const data = fs.readFileSync(htmlPath, "utf8");
    const regex = new RegExp(`<link[^>]*href=["']${cssFile}["'][^>]*>`, "i");
    expect(regex.test(data)).toBe(true, "CSS file needs to be linked in HTML");
  });

  // Check if JavaScript is linked in HTML
  test("JavaScript file should be linked in HTML", () => {
    const data = fs.readFileSync(htmlPath, "utf8");
    const regex = new RegExp(
      `<script[^>]*src=["']${jsFile}["'][^>]*></script>`,
      "i"
    );
    expect(regex.test(data)).toBe(
      true,
      "JavaScript file needs to be linked in HTML"
    );
  });
});
