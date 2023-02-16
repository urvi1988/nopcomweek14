Feature: Computer Page

  Scenario: User Should Navigate to ComputerPage Successfully.
    Given User is on Homepage
    When User to click on ComputerTab
    Then User should verify the text "Computer"

  Scenario: User Should Navigate to DesktopsPage Successfully.
    Given User is on Homepage
    When User to click on ComputerTab
    And User to click on Desktoplink
    Then User should verify the DesktopText "Desktops"

  Scenario:User Should BuildOwnComputer
    Given User is on Homepage
    When User to click on ComputerTab
    And User to click on Desktoplink
    And User to click on Build your own computer tab
    Then I want to build my own computer
