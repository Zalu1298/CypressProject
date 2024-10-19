import { LoginFunction } from "./CommonFunction.cy.js"

describe('Para bank Account Summary Scenarios', () => {

    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      })

      it('Validate Account Balance', () => {
    
        LoginFunction('Korey_Kohler57','iAscgrE44yua7n_');
        cy.get('h2').contains('Account Services');
        // cy.xpath('//table//tr[1]/td[2]').contains('$202.00');
    
      })

})
