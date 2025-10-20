 Feature: Testing Alerts, Frame and Windows
  
  @test5
  Scenario: Browser Windows
    Given the users lands on Browser Windows page
    When the user clicks on New Tab button a new tab will open in browser
    Then the user clicks on New Window button and a new window will open
    When the user clicks on New Window Message button a new window with sample text will open

    @test6
  Scenario: Alerts
    Given the user lands on Alerts page
    When the user clicks on the Click Me button
    Then an Alert will pop up