Feature:RegisterPage

  Scenario: As user i should navigate to RegisterPage sucessfully.
    Given User is on Homepage
    When User click on RegisterLink
    Then User should verify the Register Text "Register"

  Scenario Outline:  As User i should verify that Firstname Lastname Email Password and Confirmpassword Fields are Mendatory.
    Given User is on Homepage
    When User click on RegisterLink
    And User select Gender Female
    And User enter F"<name>"
    And User enter L"<name1>"
    And User should select D"<Day>"
    And User should select M"<Month>"
    And User should select Y"<Year>"
    And User enter E"<Email>"
    And User enter P"<Password>"
    And User enter CP"<ConfirmPassword>"
    And User click on Register Button
    Then User should verify the "<error message>"

    Examples:

      | name  | name1  | Day | Month    | Year | Email                  | Password  | ConfirmPassword | error message           |
      |       | banana | 1   | December | 1920 | apple.banana@gmail.com | apple123@ | apple123@       | First name is required. |
      | apple |        | 1   | December | 1920 | apple.banana@gmail.com | apple123@ | apple123@       | Last name is required.  |
      | apple | banana | 1   | December | 1920 |                        | apple123@ | apple123@       | Email is required.      |
      | apple | banana | 1   | December | 1920 | apple.banana@gmail.com |           | apple123@       | Password is required.   |
      | apple | banana | 1   | December | 1920 | apple.banana@gmail.com | apple123@ |                 | Password is required.   |

  Scenario: As a user i should create an Account sucessfully.
    Given User is on Homepage
    When User click on RegisterLink
    And User select Gender Female
    And User enter F"apple"
    And User enter L"banana"
    And User should select D"1"
    And User should select M"December"
    And User should select Y"1920"
    And User enter E"star123@gmail.com"
    And User enter P"apple123@"
    And User enter CP"apple123@"
    And User click on Register Button
    Then User should verify Register Text "Your registration completed"
      
      
      






