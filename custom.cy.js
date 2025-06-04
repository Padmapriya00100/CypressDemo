describe('SauceDemo Cypress Cheat Sheet Demo', () => {
  
  beforeEach(() => {
    // Visit login page
    cy.visit('https://www.saucedemo.com');

    // Use fixture for username/password
    cy.fixture('example').then((data) => {
      cy.get('[data-test="username"]').type(data.username);
      cy.get('[data-test="password"]').type(data.password);
      cy.get('[data-test="login-button"]').click();
    });

    // Confirm navigation to inventory page before tests start
    cy.url().should('include', '/inventory.html');
  });

  it('Logs in using username and password', () => {
    cy.url().should('include', '/inventory.html');
  });

  it('Verifies product list and interacts with items', () => {
    cy.url().should('include', '/inventory.html');

    // Debug logs
    cy.url().then(url => cy.log('Current URL: ' + url));
    cy.get('body').then($body => cy.log('Body length: ' + $body.length));

    cy.get('.inventory_item').should('have.length.greaterThan', 0);
    cy.get('.inventory_item').first().contains('Add to cart').click();
  });

  it('Custom Commands, Fixtures, Screenshot, and Logging', () => {
    cy.url().should('include', '/inventory.html');

    cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
    cy.wait(1000); // to avoid race conditions before screenshot
    cy.screenshot({ capture: 'runner' });
    cy.log('Screenshot taken successfully');
  });
});
