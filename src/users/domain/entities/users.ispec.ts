import { Users } from "./users";

describe("Users Unit Tests", () => {
  it("should create a user with name", () => {
    const users = new Users({
      name: "Usuário",
      email: "Novo",
      created_at: new Date(),
    });
    expect(users.name).toBe("Usuário");
    expect(users.email).toBe("Novo");
  });
});
