// cypress/e2e/step-definitions/settingSteps.ts

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { CartPage } from '../page-objects/CartPage';

const cartPage = new CartPage();

When('I click add product to cart', () => {
  cartPage.clickAddProduct();
});

When('I click on cart icon', () => {
  cartPage.clickCartManagement();
});

When('I enter first name {string}', (firstName: string) => {
  cartPage.enterFirstName(firstName);
});

When('I enter last name {string}', (lastName: string) => {
  cartPage.enterLastName(lastName);
});

When('I enter postal code {string}', (zip: string) => {
  cartPage.enterZipCode(zip);
});

Then('I should see a first name required error', () => {
  cartPage.verifyFirstNameError();
});

Then('I should see a postal code required error', () => {
  cartPage.verifyZipCodeError();
});

When('I click the checkout button', () => {
  cartPage.clickContinueButton();
});

Then('I should be able to continue even with empty cart', () => {
  cartPage.verifyCheckoutContinuesWithoutProducts();
});
