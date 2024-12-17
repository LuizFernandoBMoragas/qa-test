import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { locators } from "../../support/locators";

Given("I have items in my cart", () => {
  cy.addItemsToCart();
});

When("I view the cart", () => {
  cy.url().should('include', '/cart');
});

Then("I should see a {string} button next to each item in the cart", () => {
  cy.get(locators.cart.cartItemsContainer).each(($el) => {
    cy.wrap($el).find(locators.cart.removeButton).should('be.visible');
  });
});

When("I click the {string} button next to an item", () => {
  cy.get(locators.cart.cartItemsContainer).first().within(() => {
    cy.get(locators.cart.removeButton).click();
  });
  cy.wait(1500);
});

Then("the item is removed from the cart", () => {
  cy.wait(500);
  cy.contains(locators.cart.emptyCartMessage)
});

Then("the cart updates to show the correct total item count", () => {
  cy.get(locators.cart.basketCount).should('not.exist');
});

Then("the cart reflects the updated total price", () => {
  cy.get(locators.cart.basketTotal).should('be.visible').and('contain', '£ 0.00');
});
