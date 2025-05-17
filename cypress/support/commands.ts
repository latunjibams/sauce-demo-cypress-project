/// <reference types="cypress" />

Cypress.Commands.add('signin', (username: string, password: string) => {
  cy.visit('/');
  cy.get("input[name='user-name']").type(username); 
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/inventory.html');
cy.on('window:alert', (str) => {
  expect(str).to.include('breaching data'); 
});
cy.on('window:confirm', () => true);
});
  
  declare global {
    namespace Cypress {
      interface Chainable {
        signin(username: string, password: string): Chainable<void>;
      }
    }
  }
  
  export {};
  