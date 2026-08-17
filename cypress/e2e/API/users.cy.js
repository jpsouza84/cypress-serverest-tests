import userService from "../../services/userService";

describe("Users API", () => {
  it("should create a new user", () => {
    const user = {
      nome: "QA Test",
      email: `qa_${Date.now()}@test.com`,
      password: "Test@123",
      administrador: "true",
    };

    userService.createUser(user).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq(
        "Cadastro realizado com sucesso"
      );
      expect(response.body).to.have.property("_id");
    });
  });

  it("should list users", () => {
  userService.getUsers().then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("quantidade");
    expect(response.body.usuarios).to.be.an("array");
  });
});

it("should not create a user with an existing email", () => {
  const user = {
    nome: "Duplicate User",
    email: `duplicate_${Date.now()}@test.com`,
    password: "Test@123",
    administrador: "true",
  };

  userService.createUser(user).then((firstResponse) => {
    expect(firstResponse.status).to.eq(201);

    userService.createUser(user, false).then((secondResponse) => {
      expect(secondResponse.status).to.eq(400);
      expect(secondResponse.body.message).to.eq(
        "Este email já está sendo usado"
      );
    });
  });
});
});