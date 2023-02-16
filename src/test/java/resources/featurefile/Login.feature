Feature:LoginPage

  Scenario: User should navigate to Loginpage successFully.
    Given User is on Homepage
    When User click on LoginLink
    Then User should verify welcome message"Welcome, Please Sign In!"

  Scenario Outline: User should get The ErrorMessage With InValidCredentials.
    Given User is on Homepage
    When User click on LoginLink
    And User enter E"<Email>"
    And User enter P"<Password>"
    And User click on Login Button
    Then User should verify the "<error message>"

    Examples:
      | Email             | Password   | error message                                                                             |
      | orange@gmail.com  | orange123@ | Login was unsuccessful. Please correct the errors and try again.No customer account found |
      | orange1@gmail.com | orange123  | Login was unsuccessful. Please correct the errors and try again.No customer account found |
      | orange2@gmail.com | orange123  | Login was unsuccessful. Please correct the errors and try again.No customer account found |

  Scenario:User Should Login SuccessFully With Valid Credentials.
    Given User is on Homepage
    When User click on LoginLink
    And User enter E"sam@gmail.com"
    And User enter P"sam123"
    And User click on Login Button
    Then User should verify the Log out link display"Log out"

  Scenario: Verify User should LogOut SuccessFully.
    Given User is on Homepage
    When User click on LoginLink
    And User enter E"sam@gmail.com"
    And User enter P"sam123"
    And User click on Login Button
    Then User to verify Login link display "Log in"




