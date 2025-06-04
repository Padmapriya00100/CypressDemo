describe('SauceDemo Cypress Cheat Sheet Demo', () => {

  it('Logs in using username and password', () => {
    cy.visit('https://www.saucedemo.com');
    cy.viewport(1280, 720);
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
    cy.get('.inventory_item').should('exist');
  });

  it('Verifies product list and interacts with items', () => {
    // Re-login again to maintain state
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Wait for inventory page
    cy.url().should('include', '/inventory.html');
    cy.contains('Products', { timeout: 10000 }).should('be.visible');
    cy.get('.inventory_item').should('exist');

    // Add 3 items
    cy.get('.inventory_item').first().within(() => {
      cy.contains('Add to cart').click();
    });

    cy.get('.inventory_item').eq(1).within(() => {
      cy.contains('Add to cart').click();
    });

    cy.get('.inventory_item').last().within(() => {
      cy.contains('Add to cart').click();
    });

    // Cart verification
    cy.get('.shopping_cart_link').click();
    cy.contains('Your Cart').should('be.visible');

    // Return and add all
    cy.go('back');
    cy.get('button').contains('Add to cart').each(($btn) => {
      cy.wrap($btn).click();
    });
  });

  it('Custom Commands, Fixtures, Screenshot, and Logging', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');

    cy.log('This is a custom log message');
    cy.screenshot();

    cy.fixture('example.json').then((data) => {
      cy.log('Fixture loaded: ' + data.username);
    });
  });
});
