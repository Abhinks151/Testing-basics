const { calculateDiscount, isAdult, formatUserName } = require("./pureFunctionExample")

//calculateDiscount
it("20% discount", () => {
  expect(calculateDiscount(1000, 0.2)).toBe(800);
})


it("30% discoun", () => {
  expect(calculateDiscount(1000, 0.3)).toBe(700);
})

it("0% discount", () => {
  expect(calculateDiscount(1000, 0)).toBe(1000);
})


//isAdult
describe("isAdult", () => {
  it("18 is an Adult", () => {
    expect(isAdult(18)).toBe(true);
  })
  it("10 is not an Adult", () => {
    expect(isAdult(10)).toBe(false);
  })
})


//formatUserName
describe("format user name", () => {
  it("formats firstname and lastname", () => {
    expect(formatUserName({ firstName: "Abhin", lastName: "ks" })).toBe("Abhin ks")
  })
  it("formats firstname and lastname", () => {
    expect(formatUserName({ firstName: "hai", lastName: "hai" })).toBe("hai hai")
  })
})

