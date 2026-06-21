function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function throwError() {
  throw new Error("This is an error");
}

module.exports = { add, subtract, throwError };