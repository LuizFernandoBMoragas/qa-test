import { locators } from "./locators";

Cypress.Commands.add("addItemsToCart", () => {
    cy.visit(Cypress.env('PRODUCT_URL')); 
    cy.wait(500);
    cy.contains(locators.product.acceptCookiesButton).click();
    cy.contains('Add to basket').click();
    cy.get(locators.product.modalCloseIcon).click();
    //access cart
    cy.get(locators.cart.basketIconCount).eq(3).click();
    cy.wait(1500)
  });