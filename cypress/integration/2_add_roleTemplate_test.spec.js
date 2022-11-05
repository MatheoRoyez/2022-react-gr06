import config from "../../src/config.json"


describe('Add role template', ()=>{
    beforeEach(()=>{
        cy.login('mvo-coordinator', 'mvo-coordinator');
    })

    const url = config.url;
    it('should add role template', ()=>{
        cy.visit(`${url}/roles`);
        cy.get("[data-cy=role_card]").eq(1).click();
        cy.wait(500);
        cy.get("[data-cy=option_card]").eq(1).click();
        cy.url().should('include', '/template/management/create');
        //cy.get("[data-cy=template_cat]").click();

        // TODO 
    })
})
