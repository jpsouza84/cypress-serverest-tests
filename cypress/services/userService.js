const API_URL = "https://serverest.dev";

class UserService {
  createUser(user, failOnStatusCode = true) {
    return cy.request({
      method: "POST",
      url: `${API_URL}/usuarios`,
      failOnStatusCode,
      body: {
        nome: user.nome,
        email: user.email,
        password: user.password,
        administrador: user.administrador,
      },
    });
  }

  getUsers() {
    return cy.request({
      method: "GET",
      url: `${API_URL}/usuarios`,
    });
  }
}

export default new UserService();