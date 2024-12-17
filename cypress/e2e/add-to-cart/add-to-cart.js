import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the product page", () => {
  cy.visit(Cypress.env.CYPRESS_PRODUCT_URL)
});

Then("I should see the {string} button", (buttonText) => {
  cy.contains("button", buttonText).should("be.visible");
});

When("I click the {string} button", (buttonText) => {
  cy.contains("button", buttonText).click();
});

Then("the product is added to the cart", () => {
  cy.get(".cart-items").should("have.length.at.least", 1);
});

Then("the cart icon in the header updates to show {int} item(s)", (itemCount) => {
  cy.get(".cart-icon").should("contain", itemCount);
});

Given("I have {int} item(s) in my cart", (itemCount) => {
  cy.setLocalStorage("cartItems", JSON.stringify(Array(itemCount).fill({ id: 1 })));
  cy.reload();
});

Given("the system encounters an error", () => {
  cy.intercept("POST", "/api/cart", { statusCode: 500, body: { message: "Failed to add product to cart" } });
});

Then("I should see an error message {string}", (errorMessage) => {
  cy.contains(errorMessage).should("be.visible");
});
