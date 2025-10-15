Feature:Testing different elements
    @test
  Scenario: Input all necessary info into the form
    Given the user lands on the text box form page
    When the user inputs all the info into the form and clicks on Submit button "<full_name>", "<email>", "<current_address>", "<permanent_address>"
    Then a summary of the provided info is displayed "<full_name>", "<email>", "<current_address>", "<permanent_address>"

    Examples:
    |full_name|email         |current_address|permanent_address|
    |toni     |toni@gmail.com|test street 1  |test street 11   |

    @test1
  Scenario: Double Click, Right Click and Click
    Given the user lands on Buttons page
    When the user performs all the clicks
    Then a confirmation message will be displayed

    @test2
  Scenario: Radio buttons check
    Given the user lands on the Radio Button page
    When the user clicks on all available radio buttons
    Then a confirmation message will be visible

    @test3
  Scenario: Select checkbox and expand/collapse all
    Given the user lands on the Check Box page
    When the user clicks on Expand All button the entire list will be visible
    Then the user clicks on Collapse All button the entire list will be collapsed showing the initial state
    When the user clicks on Toggle button the subcategories will be visible
    Then the user clicks on the CheckBox button and a message will be displayed stating the selected subcategories

    @test4
  Scenario: Download and Upload
    Given the user lands on the Upload and Download page
  #   When the user clicks on Download button a sample file will be downloaded and saved on PC
  #   Then the sample file can be found in the Downloads folder
  #   When the user clicks on the Choose File button a window will popup and the user can select a file to Upload
  #   Then a confirmation message will be displayed