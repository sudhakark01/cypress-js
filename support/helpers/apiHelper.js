class ApiHelper {
    request(method, url, options = {}) {
        return cy.request(
            {
                method,
                url,
                ...options,
                failOnStatusCode: false
            }
        )
    }

    get(url, options={}){
        return this.request('GET', url, options)
    }
    post(url,body, options={}){
        return this.request('POST',url, {body, ...options})
    }
    put(url, body, options={}){
        return this.request('PUT', url, {body, ...options})
    }
    delete(url, options={}){
        return this.request('DELETE', url, options)
    }


    validateResponse(response, expectedStatus, schema=null){
        expect(response.status).to.eq(expectedStatus);
        if(schema){

        }
        return response;
    }
}
module.exports = new ApiHelper();