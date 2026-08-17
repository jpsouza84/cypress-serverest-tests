describe("Login Frontend", () => {
  it("should log in successfully", () => {
    const user = {
      nome: "Frontend User",
      email: `frontend_${Date.now()}@test.com`,
      password: "Test@123",
      administrador: "false",
    };

    cy.createUser(user).then((response) => {
      expect(response.status).to.eq(201);

      cy.login(user.email, user.password);

      cy.get('[data-testid="logout"]').should("be.visible");
    });
  });

  it("should display an error for invalid credentials", () => {
    cy.login("invalid@test.com", "invalidPassword");

    cy.contains("Email e/ou senha inválidos").should("be.visible");
    cy.url().should("include", "/login");
  });

  it("should log out successfully", () => {
    const user = {
      nome: "Logout User",
      email: `logout_${Date.now()}@test.com`,
      password: "Test@123",
      administrador: "false",
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