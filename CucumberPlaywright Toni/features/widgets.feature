Feature: Testing different widgets from the Widgets page


    @test7
Scenario: Checking the text is displayed inside the Accordian
    Given the user lands on the Accordian page
    When the user clicks on all the accordian tabs
    Then the text will be visible inside the tabs

Scenario: Select the desired date and time
    Given the user lands on the Date Picker page
    When the user selects the desired date from Select Date field
    # Then the field will display the correct date
    # When the user picks the date and time from Date and Time field
    # Then the fiel will display the correct date and time