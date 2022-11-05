import config from "../../src/config.json"

describe('Delete users personalised template', ()=>{
    beforeEach(()=>{
        cy.login('management', 'management');
    })

    const url = config.url;
    it('should delete personalized template ', ()=>{
        cy.visit(`${url}/personalise`);
        cy.get("[data-cy=option_card]").eq(2).click();
        cy.url().should('include', '/categories');
        cy.get("[data-cy=dashboard_item").contains("Energie");
    })
})