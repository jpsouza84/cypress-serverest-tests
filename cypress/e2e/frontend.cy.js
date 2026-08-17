describe("Login Frontend", () => {
  let users;

  before(() => {
    cy.fixture("users").then((data) => {
      users = data;
    });
  });

  it("should log in successfully", () => {
    const userData = users.frontendUser;

    const user = {
      nome: userData.nome,
      email: `${userData.emailPrefix}_${Date.now()}@test.com`,
      password: userData.password,
      administrador: userData.administrador,
    };

    cy.createUser(user).then((response) => {
      expect(response.status).to.eq(201);

      cy.login(user.email, user.password);

      cy.get('[data-testid="logout"]').should("be.visible");
    });
  });

  it("should display an error for invalid credentials", () => {
    const credentials = users.invalidCredentials;

    cy.login(credentials.email, credentials.password);

    cy.contains("Email e/ou senha inválidos").should("be.visible");
    cy.url().should("include", "/login");
  });

  it("should log out successfully", () => {
    const userData = users.logoutUser;

    const user = {
      nome: userData.nome,
      email: `${userData.emailPrefix}_${Date.now()}@test.com`,
      password: userData.password,
      administrador: userData.administrador,
    };

    cy.createUser(user).then((response) => {
      expect(response.status).to.eq(201);

      cy.login(user.email, user.password);

      cy.get('[data-testid="logout"]').should("be.visible").click();

      cy.url().should("include", "/login");
      cy.get('[data-testid="entrar"]').should("be.visible");
    });
  });
});