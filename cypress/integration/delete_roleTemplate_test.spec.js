import { wait } from "@testing-library/user-event/dist/utils";
import config from "../../src/config.json"

describe('Delete users personalised template', ()=>{
    beforeEach(()=>{
        cy.login('mvo-coordinator', 'mvo-coordinator');
    })

    const url = config.url;
    it('should delete role template', ()=>{
        cy.visit(`${url}/roles`);
        cy.get("[data-cy=role_card]").eq(3).click();
        
        cy.wait(500);
        cy.get("[data-cy=option_card]").eq(3).click();
        
        cy.get('[data-cy=role_card]').eq(3).click();
        cy.get("[data-cy=option_switch]").eq(2).click();
        cy.get("[data-cy=error_noRoleTemplate]").contains("Geen template")
        
    })
})