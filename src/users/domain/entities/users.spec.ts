import { Users } from "./users";

describe("constructor of users", () => {
  it("should create a user with name", () => {
    let created_at = new Date();
    let users = new Users({
      name: "Usuário",
      email: "Novo",
      created_at,
    });
    expect(users.props).toStrictEqual({
      name: "Usuário",
      email: "Novo",
      created_at,
    });


    users = new Users({
      name: "Usuário",
      email: "Novo",
    });
    expect(users.props.created_at).toBeInstanceOf(Date);


    users = new Users({
      name: "Usuário",
      email: "Novo",
    });
    expect(users.props).toMatchObject({
      name: "Usuário",
      email: "Novo",
    });
  });
});
