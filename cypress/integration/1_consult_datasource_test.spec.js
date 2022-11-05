import config from "../../src/config.json"


describe('Consult datasource', ()=>{
    beforeEach(()=>{
        
    })

    const url = config.url;
    it('should display datasource', ()=>{
        cy.login('management', 'management');
        
        cy.visit(`${url}/categories`);
        cy.get("[data-cy=dashboard_item]").eq(2).click();
        cy.get("[data-cy=dashboard_csr_item]").eq(0).click();
        
        cy.get("[data-cy=datasource_card]").eq(0).contains("Bedrijfsvoertuigen België");
        cy.get("[data-cy=datasource_card]").eq(0).click();

        
        cy.get("[data-cy=datasource_title]").contains('Bedrijfsvoertuigen België')

        cy.get('[data-cy=datasource_content]').contains("HoGent,654781")
        cy.get('[data-cy=datasource_content]').contains("KULeuven,687684")
        cy.get('[data-cy=datasource_content]').contains("VUB,365735")
    })

    it('should not display datasources when consulting csrs if the logged in user is not a manager', ()=>{
        cy.login("stakeholder", "stakeholder");

        cy.visit(`${url}/categories`);
        cy.get("[data-cy=dashboard_item]").eq(2).click();
        cy.get("[data-cy=dashboard_csr_item]").eq(0).click();
        cy.get("[data-cy=datasource_card]").should("not.exist")
    })

    it('should display error if logged in user is not a manager', ()=>{
        
        cy.login("directie", "directie");

        cy.visit(`${url}/category/3/csr/2/datasource/4`);
        cy.get('[data-cy=error_title]').contains(`Geen toegang.`);

    })
})
