const add = require("./math");

test("Should add 2 numbers", () => {
  expect(add(1, 2)).toBe(3);
});