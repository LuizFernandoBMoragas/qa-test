import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I have items in my cart", () => {
  cy.addItemsToCart();
});

When("I view the cart", () => {
  cy.url().should('include', '/cart');
});

Then("I should see a {string} button next to each item in the cart", (buttonText) => {
  cy.get('.cart-item').each(($el) => {
    cy.wrap($el).find('.remove-button').should('be.visible').and('contain', buttonText);
  });
});

When("I click the {string} button next to an item", (buttonText) => {
  cy.get('.cart-item').first().within(() => {
    cy.get('.remove-button').contains(buttonText).click();
  });
});

Then("the item is removed from the cart", () => {
  cy.get('.cart-item').should('have.length', 2);
});

Then("the cart updates to show the correct total item count", () => {
  cy.get('.cart-total-items').should('contain', '2');
});

Then("the cart reflects the updated total price", () => {
  cy.get('.cart-total-price').should('be.visible').and('not.contain', '$0.00');
});
