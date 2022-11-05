import config from "../../src/config.json";

Cypress.Commands.add('login', (username, password) => {
    const url=config.url;
    cy.intercept('/api/users/login').as('login');
    cy.visit(`${url}/login`);
    cy.get('[data-cy=username_input').type(username);
    cy.get('[data-cy=password_input').type(password);
    cy.get('[data-cy=submit_btn').click();
    cy.wait('@login')
});