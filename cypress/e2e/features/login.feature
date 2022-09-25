Feature: Login Page

Background: Login Background
    Given the ParaBank home is loaded
    When user clicks Register
    And user enters user details
    Then user successfully registers new account

Scenario: Successful Login
    Given user logs out
    When the correct user details are entered
    And user clicks login
    Then user is successfully logged on

Scenario: Unsuccessful Login
    Given user logs out
    Given the incorrect user details are entered
    When user clicks login
    Then user is unable to log on
    

