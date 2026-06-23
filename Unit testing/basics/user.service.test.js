const UserService = require("./user.service");




describe("User service", () => {
  let userService;
  beforeEach(() => {
    userService = new UserService();
  });

  it("Should create a vaild name", () => {
    const user = userService.createUser("Abhin")

    expect(user).toEqual({
      id: 1,
      name: "Abhin"
    })
  })

  it("Throws an error when name is empty string", () => {

    expect(() => {
      userService.createUser("")
    }).toThrow("Name required");
  })

  it("Throws an error when name is not provided", () => {

    expect(() => {
      userService.createUser()
    }).toThrow("Name required");
  })
})