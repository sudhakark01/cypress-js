const apiHelper = require("../../support/helpers/apiHelper")


describe("Verify main-controller endpoint calls", ()=>{

    const apiUrl = Cypress.env('apiUrl')

    it("post main controller with empty object", ()=>{
        apiHelper.post(`${apiUrl}/api/arya/main-controller`, {})
        .then((response)=>{
            apiHelper.validateResponse(response, 404)
            console.log(response)
        })
    })
})