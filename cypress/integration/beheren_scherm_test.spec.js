import { wait } from "@testing-library/user-event/dist/utils";
import config from "../../src/config.json"

describe('Consult category', ()=>{
    beforeEach(()=>{
        cy.login('mvo-coordinator', 'mvo-coordinator');
    });
    const url = config.url;

    it('should go to templae beheren scherm when click on button', () => {
        cy.visit(`${url}`)

        cy.get('[data-cy=nav_beheren]').click();
        cy.get('[data-cy=beheren_title]').contains('Rollen');
        cy.get('[data-cy=beheren_info]').contains('Kies de rol waarvan u het template overzicht wenst te beheren');
    });

    it('should display "geen template beschikbaar" for roll without template (stakeholder)', ()=>{
        cy.visit(`${url}`)

        cy.get('[data-cy=nav_beheren]').click();
        cy.get('[data-cy=role_card]').eq(3).click();

        cy.wait(500);
        cy.get('[data-cy=beheren_opties_title]').contains('Opties');
        cy.get('[data-cy=toggle_switch]').eq(2).click();
        cy.get('[data-cy=beheren_template_title]').contains('Template');
        cy.get('[data-cy=error_noRoleTemplate]').contains('Geen template beschikbaar.');
    });

    it('should display a template for all roles with a template', () => {
        cy.visit(`${url}`)

        cy.get('[data-cy=nav_beheren]').click();
        cy.get('[data-cy=role_card]').eq(0).click();
        cy.get('[data-cy=beheren_opties_title]').contains('Opties');
        cy.get('[data-cy=toggle_switch]').eq(2).click();
        cy.get('[data-cy=beheren_template_title]').contains('Template');
        cy.get('[data-cy=dashboard]').eq(2).should("exist");
        cy.get('[data-cy=dashboard]').eq(2).contains("Economie");
    });

    it('should change customizable for a roll', () => {
        cy.visit(`${url}`)

        cy.get('[data-cy=nav_beheren]').click();
        cy.get('[data-cy=role_card]').eq(0).click();
        cy.get('[data-cy=beheren_opties_title]').contains('Opties');
        cy.get('[data-cy=toggle_switch]').eq(0).click();

        cy.get('[data-cy=log_out]').click();
        cy.login('directie', 'directie');
        cy.get('[data-cy=personaliseren]').should('not.exist');
    });
});