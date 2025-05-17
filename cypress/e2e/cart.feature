# cypress/e2e/features/cart.feature

Feature: Add Product to Cart

  As an authenticated user
  I want to access my inventory and add product to cart

  Scenario: Successfully add products to cart and checkout
    Given I am on the login page
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should be logged in successfully

    When I click add product to cart
    And I click on cart icon
    And I enter first name "Olatunji"
    And I enter last name "Bamgboye"
    Then I enter postal code "10224"

  Scenario: Show error when first name is missing
    Given I am on the login page
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should be logged in successfully

    When I click add product to cart
    And I click on cart icon
    And I enter first name ""
    And I enter last name "Bamgboye"
    And I enter postal code "10224"
    Then I should see a first name required error

  Scenario: Show error when postal code is missing
    Given I am on the login page
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should be logged in successfully

    When I click add product to cart
    And I click on cart icon
    And I enter first name "Olatunji"
    And I enter last name "Bamgboye"
    And I enter postal code ""
    Then I should see a postal code required error

  Scenario: Proceed to checkout with an empty cart
    Given I am on the login page
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should be logged in successfully

    When I click on cart icon
    And I click the checkout button
    And I enter first name "Ola"
    And I enter last name "Bams"
    And I enter postal code "00000"
    Then I should be able to continue even with empty cart
