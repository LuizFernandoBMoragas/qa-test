import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { locators } from "../../support/locators";


Given('I am on the product page', () => {
  cy.visit(Cypress.env('PRODUCT_URL')); 
  cy.wait(500);
  cy.contains("Accept All").click();
});

Then('I should see the {string} button', (buttonText) => {
  cy.contains('button', buttonText).should('be.visible');
});

When('I select a quantity of the product', () => {
  cy.get(locators.product.productSelection).eq(0)
  .click()
  .type(0);
});

When('I click the {string} button', (buttonText) => {
  cy.contains('button', buttonText).click();
  cy.wait(500);
});

Then('a confirmation popup appears with the message {string}', (message) => {
  cy.get(locators.product.confirmationMessage).should('contain', message);
});

When('I close the confirmation popup', () => {
  cy.get(locators.product.modalCloseIcon).click();
  cy.wait(500);
  cy.reload();
});

Then('I see the updated basket total in the header', () => {
  cy.get(locators.cart.basketTotal).should('be.visible');
  cy.wait(500);
});

Then('the basket icon displays a red dot indicating an update', () => {
  // cy.get('svg.header-menu-component_icon__2AyuZ').eq(2)
  cy.get(locators.cart.basketDot).should('exist')
    cy.wait(500);
});

When('I hover over the basket icon', () => {
  cy.get(locators.cart.basketDot).trigger('mouseover');
  cy.wait(500);
});

Then('the basket displays the total number of items added', () => {
  cy.get(locators.cart.basketDotCount).should('contain', '1');
  cy.wait(500);
});

Then('the basket total updates to reflect the product price', () => {
  cy.get(locators.cart.basketTotal).should('contain', '£ 92.80');
});

Then('the basket total updates to include the newly added product', () => {
  cy.reload();
  cy.get(locators.cart.basketTotal).should('contain', '£ 10.30');
});

Then('the basket displays the updated number of items', () => {
  cy.get(locators.cart.basketDotCount).should('contain', '1');
  cy.wait(500);
});
