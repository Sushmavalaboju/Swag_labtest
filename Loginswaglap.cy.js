
// cypress/integration/login.spec.js

describe('Login Functionality', () => {
    it('should log in successfully', () => {
      cy.visit('https://www.saucedemo.com/'); 
  
      cy.get('[data-testid="standard_user"]').type('standard_user');
      cy.get('[data-testid="secret_sauce"]').type('yourPasswordsecret_sauce');
  
      cy.get('[data-testid="login-button"]').click();
  
    });
});