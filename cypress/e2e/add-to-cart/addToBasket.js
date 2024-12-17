require('cypress-xpath');
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';



Given('I am on the product page', () => {
  cy.visit(Cypress.env('PRODUCT_URL')); 
  cy.wait(500);
  cy.contains("Accept All").click();
});

Then('I should see the {string} button', (buttonText) => {
  cy.contains('button', buttonText).should('be.visible');
});

When('I select a quantity of the product', () => {
  cy.get('.product-detail-page-component_price-wrapper__1bM8S .card-component-module_card-component__1NA2E .add-to-basket-cta-component_cta-area-wrapper__26iyM .add-to-basket-cta-component_cta-area__35Jms .add-to-basket-cta-component_qty__Po_oC .dropdown-component-module_dropdown-wrapper___ub06').eq(0)
  .click()
  .type(0);
});

When('I click the {string} button', (buttonText) => {
  cy.contains('button', buttonText).click();
  cy.wait(500);
});

Then('a confirmation popup appears with the message {string}', (message) => {
  cy.get('div[data-testid="modal"]').should('contain', message);
});

When('I close the confirmation popup', () => {
  cy.get('[data-testid="modal-close-icon"]').click();
  cy.wait(500);
  cy.reload();
});

Then('I see the updated basket total in the header', () => {
  cy.get('.header-menu-component_info__2Ai5g').should('be.visible');
  cy.wait(500);
});

Then('the basket icon displays a red dot indicating an update', () => {
  // cy.get('svg.header-menu-component_icon__2AyuZ').eq(2)
  cy.get('.header-menu-component_notification__1w1f-').should('exist')
    cy.wait(500);
});

When('I hover over the basket icon', () => {
  cy.get('.header-menu-component_notification__1w1f-').trigger('mouseover');
  cy.wait(500);
});

Then('the basket displays the total number of items added', () => {
  cy.get('.header-menu-component_notification__1w1f- span').should('contain', '1');
  cy.wait(500);
});

Then('the basket total updates to reflect the product price', () => {
  cy.get('.header-menu-component_icon-button__2n1dO span.header-menu-component_info__2Ai5g').should('contain', '£ 92.80');
});

Then('the basket total updates to include the newly added product', () => {
  cy.reload();
  cy.get('.header-menu-component_icon-button__2n1dO span.header-menu-component_info__2Ai5g').should('contain', '£ 10.30');
});

Then('the basket displays the updated number of items', () => {
  cy.get('.header-menu-component_notification__1w1f- span').should('contain', '1');
  cy.wait(500);
});
