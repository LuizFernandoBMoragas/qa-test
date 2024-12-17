Feature: Remove items from the cart

  As a customer,
  I want to be able to remove items from my cart
  So that I can change my order before checkout.

  Scenario: Bin button is visible next to each cart item
    Given I have items in my cart
    When I view the cart
    Then I should see a "bin" button next to each item in the cart

  Scenario: Successfully remove an item from the cart
    Given I have items in my cart
    When I click the "bin" button next to an item
    Then the item is removed from the cart
    And the cart updates to show the correct total item count
    And the cart reflects the updated total price

    @not-automated
  Scenario: Remove button updates cart with no items
    Given I have one item in my cart
    When I click the "bin" button for the item
    Then the cart should display a message "Your cart is empty"
    And the total item count should be zero
    And the cart total price should be zero

    @not-automated
  Scenario: Remove button does not affect other items in the cart
    Given I have multiple items in my cart
    When I click the "bin" button for a specific item
    Then only the selected item is removed from the cart
    And the remaining items are still visible in the cart
    And the cart updates the total item count and price accordingly
