// cypress/page-objects/CartPage.ts

export class CartPage {
  private addProduct1 = "button[name='add-to-cart-sauce-labs-backpack']";
  private addProduct2 = "button[name='add-to-cart-sauce-labs-bike-light']";
  private cartIcon = "a[class='shopping_cart_link']";
  private checkOut = "button[name='checkout']";
  private firstName = "input[name='firstName']";
  private lastName = "input[name='lastName']";
  private zipCode = "input[name='postalCode']";
  private continueButton = "input[name='continue']";
  private finishButton = "button[name='finish']";
  private backToHome = "button[name='back-to-products']";

  // Add products to cart
  clickAddProduct() {
    cy.get(this.addProduct1).should('be.visible').click();
    cy.get(this.addProduct2).should('be.visible').click();
    return this;
  }

  //  Click cart and proceed to checkout
  clickCartManagement() {
    cy.get(this.cartIcon).should('be.visible').click();
    cy.get(this.checkOut).should('be.visible').click();
    return this;
  }

  // Full checkout form (positive test flow)
  fillCheckoutForm(firstName: string, lastName: string, zip: string) {
    if (firstName) cy.get(this.firstName).clear().type(firstName);
    if (lastName) cy.get(this.lastName).clear().type(lastName);
    if (zip) cy.get(this.zipCode).clear().type(zip);
    cy.get(this.continueButton).click();
    return this;
  }

  // Individual input methods for negative testing
  enterFirstName(firstName: string) {
    if (firstName) cy.get(this.firstName).clear().type(firstName);
    return this;
  }

  enterLastName(lastName: string) {
    if (lastName) cy.get(this.lastName).clear().type(lastName);
    return this;
  }

  enterZipCode(zip: string) {
    if (zip) cy.get(this.zipCode).clear().type(zip);
    cy.get(this.continueButton).click(); // still click continue to trigger validation
    return this;
  }

  //  Final checkout steps
  verifyOverviewPage() {
    cy.get(this.finishButton).should('be.visible').click();
    cy.get(this.backToHome).should('be.visible').click();
    return this;
  }

  //  Error checkers
  verifyFirstNameError() {
    cy.contains('Error: First Name is required').should('be.visible'); // update to match actual message
  }

  verifyZipCodeError() {
    cy.contains('Error: Postal Code is required').should('be.visible'); // update to match actual message
  }

  clickContinueButton() {
  cy.get(this.continueButton).should('be.visible').click();
  return this;
}

verifyCheckoutContinuesWithoutProducts() {
  cy.url().should('include', '/checkout-step-two.html');
  cy.get(this.finishButton).should('be.visible').click();
  return this;
}

}
