import config from "../../src/config.json";

describe("Personalise template", () => {
  // beforeEach(()=>{
  //     cy.login('mvo-coordinator', 'mvo-coordinator');
  // })

  const url = config.url;
  it("should not display personaliseren in navigation bar", () => {
    cy.login("stakeholder", "stakeholder");
    cy.get("[data-cy=navigation_bar]").contains("personaliseren").should("not.exist");

    cy.visit(`${url}/personalise`);
    cy.get("[data-cy=option_card]").eq(1).click();
  });

  it("should add personalised template for management", () => {
    cy.login("management", "management");

    cy.get("[data-cy=navigation_bar]").contains("Personaliseren");

    cy.visit(`${url}/personalise`);
    cy.get("[data-cy=option_card]").eq(0).click();

    cy.get("[data-cy=cat_template").eq(0).click();
    Cypress._.times(8, (i) => {
      cy.get("[data-cy=add_cat_template]").eq(i).click();
    });
    cy.get("[data-cy=save_temp_button]").click();
    cy.url().should('include', '/categories');
    cy.get("[data-cy=dashboard_item]").contains("Energie")
  });
});
