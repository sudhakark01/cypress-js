const BasePage = require("./BasePage");
const SELECTORS = require('../constants/selectors').HOME

class HomePage extends BasePage {
    constructor(){
        super();
        this.url = "/"
    }

    visitHomePage(){
        this.visit(this.url);
        return this;
    }

    verifyHomePageLogo(){
        this.verifyElementVisible(SELECTORS.HEADER_LOGO)
    }

}

module.exports = new HomePage();