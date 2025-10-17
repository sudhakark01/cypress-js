// Import commands
require('./commands');

// Import plugins
require('cypress-mochawesome-reporter/register');
require('@cypress/xpath');
require('cypress-file-upload');
require('cypress-real-events');

// Global before hook
before(() => {
  cy.log('Starting test suite');
});

// Global after hook
after(() => {
  cy.log('Test suite completed');
});
