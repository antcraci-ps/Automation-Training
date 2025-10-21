Feature: Testing Drag & Drop from Interactions Page


    @test9
Scenario: Checking droppable interactions
    Given the user lands on Droppable page
    When the user click and drags the Drag Me box to the Drop Here zone
    Then the message from the dropping zone will be displayed as Dropped!