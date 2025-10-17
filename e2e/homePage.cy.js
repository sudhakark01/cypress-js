const homePage = require('../support/page-objects/HomePage')

describe('Verify HomePage', ()=>{
    beforeEach(()=>{
        homePage.visitHomePage()
    })

    it("should contain the header logo", ()=>{
        homePage.verifyHomePageLogo();
        cy.getByTestId('arya-logo').should('be.visible');
    })


})