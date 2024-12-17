Cypress.Commands.add("addItemsToCart", () => {
    cy.visit(Cypress.env.PRODUCT_URL);
    cy.get('span.Add to basket').each(($btn, index) => {
      if (index < 3) {
        cy.wrap($btn).click();
      }
    });
    //access cart
    cy.get('.header-menu-component_notification__1w1f- span').click();
  });