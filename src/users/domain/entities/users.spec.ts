import { Users } from "./users";

describe("constructor of users", () => {
  it("should create a user with name", () => {
    const users = new Users("Usuário");
    expect(users.name).toBe("Usuário");
  });
});
