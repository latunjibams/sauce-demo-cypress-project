export class LoginPage {
  private usernameInput = "input[name='user-name']";
  private passwordInput = "input[name='password']";
  private loginButton = "input[name='login-button']";
  private url = '/';

  visit() {
      cy.visit(this.url);
      return this;
  }

  typeUsername(username: string) {
      cy.get(this.usernameInput).should('be.visible').type(username);
      return this;
  }

  typePassword(password: string) {
      cy.get(this.passwordInput).should('be.visible').type(password);
      return this;
  }

  clickLogin() {
      cy.get(this.loginButton).should('be.visible').click();
      return this;
  }

shouldNavigateToHome() {
    cy.url().should('include', '/inventory.html');
    return this;
  }
  
  // Combined actions
  login(username: string, password: string) {
      this.typeUsername(username);
      this.typePassword(password);
      this.clickLogin();
      return this;
  }
}
