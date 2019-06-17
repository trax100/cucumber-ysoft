Feature: Registering Client Online
  Register client on registration page

  Scenario: Failed to create a new account - 8 errors
    Given I am on the main page
    When I click Sign-in Button
    And I enter registered student ID
    And I click Create an account Button
    And I click Register Button
    Then I should see There are 8 errors