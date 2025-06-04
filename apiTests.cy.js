describe('API Test', () => {
  it('should fetch users from a public API', () => {
    cy.request('GET', 'https://www.saucedemo.com')
      .its('status').should('eq', 200);
  });
});
