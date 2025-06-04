describe('Custom Viewport Size - Flipkart', () => {
  it('Sets a custom resolution and visits Flipkart', () => {
    // Set the viewport to 1024x768 resolution
    cy.viewport(1024, 768);

    // Visit the amazonamazon website
    cy.visit('https://www.amazon.com');

   
  });
});
