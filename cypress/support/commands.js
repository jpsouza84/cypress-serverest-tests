import loginPage from "../pages/loginPage";
import userService from "../services/userService";

Cypress.Commands.add("createUser", (user, failOnStatusCode = true) => {
  return userService.createUser(user, failOnStatusCode);
});

Cypress.Commands.add("getUsers", () => {
  return userService.getUsers();
});

Cypress.Commands.add("login", (email, password) => {
  loginPage.visit();
  loginPage.login(email, password);
});