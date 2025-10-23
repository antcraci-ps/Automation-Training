Feature: Testing Drag & Drop from Interactions Page


    @test9
Scenario: Checking droppable interactions
    Given the user lands on Droppable page
    When the user click and drags the Drag Me box to the Drop Here zone
    Then the message from the dropping zone will be displayed as Dropped!
    
    @test10
Scenario: Checking the Drop Zone by dragging Acceptable and Not Acceptable boxes
    Given the user lands on Droppable page and navigates to Accept tab
    When the user drags the Not Acceptable box into the Drop Zone
    Then the Drop Zone confirmation message is not visible
    When the user drags the Acceptable box into the Drop Zone
    Then the Drop Zone confirmation message is visible