class BasePage {
    constructor(){
        this.timeout = 10000;
    }

    visit(url){
        cy.visit(url);
        return this;
    }

    getElement(locator){
        return cy.get(locator, {timeout:this.timeout});
    }

    clickElement(locator){
        this.getElement(locator).should('be.visible').click();
        return this;
    }

    typeText(locator){
        this.getElement(locator)
        .should('be.visible')
        .clear()
        .type(text);
        return this;
    }

    verifyElementVisible(locator){
        this.getElement(locator).should('be.visible');
        return this;
    }

    verifyText(locator, expectedText){
        this.getElement(locator).should('contain.text',expectedText)
        return this;
    }

    waitForElement(locator,timeout = this.timeout){
        cy.get(locator,{timeout}).should('exist')
        return this;
    }
}

module.exports = BasePage