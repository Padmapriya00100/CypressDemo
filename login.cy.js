describe('Login Test - SauceDemo', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
cy.get('[data-test="shopping-cart-badge"]').click()
cy.get('[data-test="checkout"]').click()
cy.get('[data-test="firstName"]').type('padma')
cy.get('[data-test="lastName"]').type('priya')
cy.get('[data-test="postalCode"]').type('603202')
cy.get('[data-test="continue"]').click()
cy.get('[data-test="finish"]').click()
cy.get('[data-test="checkout-complete-container"]').click()
cy.get('[data-test="back-to-products"]').click()

//Navigation 

cy.reload()
cy.go('back')
cy.go('forward')











  });
});
