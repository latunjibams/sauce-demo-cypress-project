Feature: Login Functionality

  I want to log in to the application
  So that I can access my account

 Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should be logged in successfully

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter username "invalid_sa"
    And I enter password "okpassword"
    And I click the login button
