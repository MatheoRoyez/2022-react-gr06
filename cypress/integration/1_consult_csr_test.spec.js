import config from "../../src/config.json"

describe('Consult csr as role except from management', ()=>{
    beforeEach(()=>{
        cy.login('mvo-coordinator', 'mvo-coordinator');
    })

    const url = config.url;

    it('should display the details of parent csr', ()=>{
        cy.visit(`${url}`);
        cy.get('[data-cy=dashboard_item]').eq(2).click();
        cy.get('[data-cy=dashboard_csr_item]').eq(1).click();

        //values of buttons/labels
        cy.get('[data-cy=card_name]').contains('CO2 Uitstoot');
        cy.get('[data-cy=sdg-icon]').eq(0).contains('13');
        cy.get('[data-cy=info_card]').contains("Behaalde waarde:");
        cy.get('[data-cy=info_card]').contains("Doelwaarde: ");

        //elements that should exist
        cy.get('[data-cy=graph]').should('exist');        
    })

    it('should display the details of child csr as any rol except from management', ()=>{
        cy.visit(`${url}`);
        cy.get('[data-cy=dashboard_item]').eq(2).click();
        cy.get('[data-cy=dashboard_csr_item]').eq(1).click();
        cy.get('[data-cy=dashboard_csr_item]').eq(0).click();  
        
        //waardes controleren
        cy.get('[data-cy=card_name]').contains('Bedrijfsvoertuigen');
        cy.get('[data-cy=sdg-icon]').eq(0).contains('13');
        cy.get('[data-cy=info_card_value]').eq(0).contains('12000.00 kWh');
        cy.get('[data-cy=itemList_name]').should('not.exist');
    })

    it('should display error message if the given csr does not exist', ()=>{
        cy.visit(`${url}/category/3/csr/10`)
       
        cy.get('[data-cy=error_description]').contains(`De data voor deze MVO kon niet worden opgehaald`);
        cy.get('[data-cy=error_title]').contains(`Oei, er is iets misgelopen`);
    })
})

describe('Consult csr as management', () => {
    beforeEach(()=>{
        cy.login('management', 'management');
    })

    const url = config.url;

    it('should display the details of child csr as management', ()=>{
        cy.visit(`${url}`);
        cy.get('[data-cy=dashboard_item]').eq(2).click();
        cy.get('[data-cy=dashboard_csr_item]').eq(1).click();
        cy.get('[data-cy=dashboard_csr_item]').eq(0).click();  
        
        cy.get('[data-cy=card_name]').contains('Bedrijfsvoertuigen');
        cy.get('[data-cy=sdg-icon]').eq(0).contains('13');
        cy.get('[data-cy=info_card_value]').eq(0).contains('12000.00 kWh');
        cy.get('[data-cy=itemList_name]').should('exist');
        cy.get('[data-cy=datasource_card]').should('have.length',2);
        cy.get('[data-cy=datasource_card]').eq(0).contains('Bedrijfsvoertuigen België')

    })
});