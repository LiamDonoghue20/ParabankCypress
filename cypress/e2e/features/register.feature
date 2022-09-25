Feature: Register Page

Scenario: Successful account creation
    Given the ParaBank home is loaded
    When user clicks Register
    And user enters user details
    Then user successfully registers new account

Scenario: Umsuccessful account creation
    Given the ParaBank home is loaded
    When user clicks Register
    And user enters incorrect user details
    Then user is unable to register a new account
