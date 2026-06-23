class UserService {
  createUser(name) {
    if (!name) {
      throw new Error("Name required");
    }

    return {
      id: 1,
      name,
    };
  }
}

module.exports = UserService;