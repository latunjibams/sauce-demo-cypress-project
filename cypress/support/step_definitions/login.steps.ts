import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../page-objects/LoginPage';

const loginPage = new LoginPage();

Given('I am on the login page', () => {
    loginPage.visit()
  });

When('I enter username {string}', (username: string) => {
    loginPage.typeUsername(username);
  });

  When('I enter password {string}', (password: string) => {
    loginPage.typePassword(password);
  });
  
  When('I click the login button', () => {
    loginPage.clickLogin();
  });
  
  Then('I should be logged in successfully', () => {
    loginPage.shouldNavigateToHome();
  
  });
  