# QA-TEST Cypress Project

This is a Cypress-based end-to-end testing project for automating the testing of key functionalities such as adding items to a basket and removing items from a cart.

---

## Project Structure

The folder structure is as follows:


```bash
QA-TEST/
│
├── cypress/
│   ├── downloads/                # Downloaded files from tests
│   ├── e2e/                      # End-to-End test files
│   │   ├── add-to-cart/          # Tests related to adding items to the basket
│   │   │   ├── addToBasket.feature   # Feature file for BDD
│   │   │   └── addToBasket.js        # Test script for adding items
│   │   ├── cart-item.removal/    # Tests related to removing items
│   │   │   ├── removeFromCart.feature # Feature file for BDD
│   │   │   └── removeFromCart.js     # Test script for removal
│   │
│   ├── fixtures/                 # Static test data in JSON format
│   │   └── example.json
│   │
│   ├── support/                  # Custom commands and utilities
│   │   ├── commands.js           # Custom Cypress commands
│   │   ├── e2e.js                # Global hooks and configurations
│   │   └── locators.js           # Test element locators
│
├── docs/                         # Documentation for project components
│   ├── productPage.md
│   ├── removeButton.md
│   └── theoreticalQuestions.md
│
├── node_modules/                 # Node.js dependencies (auto-generated)
├── .env                          # Environment variables
├── .gitignore                    # Git ignore file
├── cypress.config.js             # Cypress configuration
├── cypress.env.json              # Cypress environment-specific settings
├── package-lock.json             # Dependency lock file
└── package.json                  # Project dependencies and scripts
```

---

## Prerequisites

- **Node.js** and **npm** installed. Verify by running:
  ```bash
  node -v
  npm -v

- **Cypress** installed globally or locally in the project.

## Setup Instructions
### Clone the repository:

git clone <repository-url>
cd QA-TEST

### Install dependencies:

npm install

## Running Tests

### Run all Cypress tests in headed or headless mode:

npx cypress open    # Opens Cypress Test Runner
npx cypress run     # Runs tests in headless mode

### To run a specific test:

npx cypress run "cypress/e2e/add-to-cart/addToBasket.js"

## Custom Commands

Custom Cypress commands can be found in cypress/support/commands.js

## **Documentation**

### Detailed documentation can be found in the docs/ folder:
productPage.md: Answers to QA-related question 1.5.
removeButton.md: Answers to QA-related question 1.4.
theoreticalQuestions.md: Answers to QA-related question 1.4.

## Notes
Cypress environment-specific configurations are in cypress.env.json.

Test locators for UI elements are stored in cypress/support/locators.js.