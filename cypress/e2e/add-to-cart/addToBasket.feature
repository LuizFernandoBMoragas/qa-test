Feature: Add to Basket Functionality

  As a customer,
  I want to add products to my basket
  So that I can review and purchase them at checkout.

  Scenario: Add to Basket button is visible on the product page
    Given I am on the product page
    Then I should see the "Add to basket" button

  Scenario: Product is added to the basket successfully
    Given I am on the product page
    When I select a quantity of the product
    And I click the "Add to basket" button
    Then a confirmation popup appears with the message "Added to basket!"
    When I close the confirmation popup
    Then I see the updated basket total in the header
    And the basket icon displays a red dot indicating an update
    When I hover over the basket icon
    Then the basket displays the total number of items added
    And the basket total updates to reflect the product price

  Scenario: Basket updates with the correct number of items
    Given I am on the product page
    When I click the "Add to basket" button
    Then the basket total updates to include the newly added product
    And the basket icon displays a red dot indicating an update
    When I hover over the basket icon
    Then the basket displays the updated number of items

  @not-automated
  Scenario: Display error message when adding to basket fails
    Given I am on the product page
    And the system encounters an error
    When I click the "Add to basket" button
    Then I should see an error message "Failed to add product to basket"
    And the basket icon does not display a red dot
    When I hover over the basket icon
    Then the basket does not display any item count
