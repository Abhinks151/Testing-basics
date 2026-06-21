const { add, subtract, throwError } = require("./math");

test("Should add 2 numbers", () => {
  expect(add(1, 2)).toBe(3);
});


// toEqual is used for objects and arrays (deep checking0)
test("Should subtract 2 numbers", () => {
  expect(subtract(1, 2)).toEqual(-1);
});



// toBeTruthy check if the value is truthy or not
test("Should subtract 2 numbers", () => {
  expect(subtract(1, 2)).toBeTruthy();
  expect(true).toBeTruthy();
});

// toBeFalsy check if the value is falsy or not
test("check if the value is falsy or not", () => {
  expect(false).toBeFalsy();
});


// toThrow check if the function throws an error
test("check if the function throws an error", () => {
  expect(throwError).toThrow();
});

// toContain check if the array contains the value
test("check if the array contains the value", () => {
  expect([1, 2, 3]).toContain(2);
});

