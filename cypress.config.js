const {defineConfig}= require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
require('dotenv').config();

module.exports = defineConfig({
    e2e:{
        baseUrl: process.env.BASE_URL,
        viewportWidth: 1920,
        viewportHeight: 1080,
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 30000,
        requestTimeout:10000,
        responseTimeout:30000,
        video: true,
        screenshotOnRunFailure: true,
        chromeWebSecurity: false,
        retries:{
            runMode: 2,
            openMode: 0
        },
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions:{
            charts: true,
        },
        env:{
            baseUrl: process.env.BASE_URL,
            apiUrl: process.env.API_URL,
            username: process.env.TEST_USERNAME,
            password: process.env.TEST_PASSWORD
        },
        setupNodeEvents(on, config) {    
            require('cypress-mochawesome-reporter/plugin')(on);
            
            on('task', {
                log(message) {
                    console.log(message);
                    return null;
                }
            });
            return config;
        },
        specPattern: 'e2e/**/*.cy.{js,jsx}',
        supportFile: 'support/e2e.js'
    }
})