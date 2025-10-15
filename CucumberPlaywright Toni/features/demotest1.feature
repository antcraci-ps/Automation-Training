Feature: DEMOQA tutorial tests

  Scenario: Landing on demoqa.com
    Given the user lands on page
    When the page is fully loaded
    When the category cards are displayed
    Then the page sould be displayed