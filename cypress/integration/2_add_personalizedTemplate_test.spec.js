import config from "../../src/config.json"


describe('Add personalized template', ()=>{
    beforeEach(()=>{
        cy.login('mvo-coordinator', 'mvo-coordinator');
    })

    const url = config.url;
    it('should add personalise template and display it on dashboard', ()=>{
        cy.visit(`${url}/personalise`);
        cy.get("[data-cy=option_card]").eq(1).click();


        // TODO 
    })
})