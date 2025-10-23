# Cypress Test Automation Framework

This project is a test automation framework built with Cypress for end-to-end testing. It includes configuration for Mochawesome reporting, environment variable management, and page object model implementation.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sudhakark01/cypress-js.git
cd cypress-js
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root with the following variables:
```plaintext
BASE_URL=<your-application-url>
API_URL=<your-api-url>
TEST_USERNAME=<your-test-username>
TEST_PASSWORD=<your-test-password>
```

## Project Structure

```
cypress-js/
├── cypress/
│   ├── downloads/           # Downloaded files during tests
│   ├── e2e/                # Test files
│   │   └── homePage.cy.js
│   └── support/            # Support files
│       ├── commands.js     # Custom commands
│       ├── e2e.js         # Entry point for support files
│       ├── constants/     # Test constants
│       │   └── selectors.js
│       └── page-objects/  # Page Object Models
│           ├── BasePage.js
│           └── HomePage.js
├── .env                    # Environment variables
├── .gitignore
├── cypress.config.js       # Cypress configuration
├── package.json
└── README.md
```

## Configuration

The framework uses the following configuration:

- Viewport: 1920x1080
- Default timeout: 10 seconds
- Page load timeout: 30 seconds
- Request timeout: 10 seconds
- Response timeout: 30 seconds
- Video recording: enabled
- Screenshots on failure: enabled
- Chrome web security: disabled
- Retries: 2 in run mode, 0 in open mode

## Running Tests

Run tests in Cypress Test Runner:
```bash
npm run cypress:open
```

Run tests in headless mode:
```bash
npm run cypress:run
```

## Test Reports

The framework uses Cypress Mochawesome Reporter for generating test reports. Reports can be found in:
```
cypress/reports/html/index.html
```

## Features

- Page Object Model design pattern
- Environment variable management with dotenv
- Mochawesome reporting
- Custom commands support
- File upload capability
- XPath support
- Real events simulation
- Screenshot and video capture
- Automatic retries for flaky tests

## Custom Commands

The framework includes several custom commands in `support/commands.js`:
- File upload support
- XPath selectors
- Real event simulation

## Best Practices

1. Use Page Object Model for better maintainability
2. Keep selectors in a separate constants file
3. Use custom commands for repeated actions
4. Add meaningful test descriptions
5. Use environment variables for sensitive data
6. Follow proper naming conventions for test files and functions

## Environment Variables

The following environment variables are required:
- `BASE_URL`: Base URL of the application under test
- `API_URL`: API endpoint URL
- `TEST_USERNAME`: Test user username
- `TEST_PASSWORD`: Test user password

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Write or update tests
4. Submit a pull request

## Troubleshooting

If you encounter issues with environment variables:
1. Verify `.env` file exists in project root
2. Check if all required variables are defined
3. Try prefixing variables with `CYPRESS_`
4. Clear Cypress cache: `npx cypress cache clear`

## Additional Documentation

- [Cypress Documentation](https://docs.cypress.io)
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)
