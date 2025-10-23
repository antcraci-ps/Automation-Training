const { expect, } = require("@playwright/test");
const { setTimeout } = require("node:timers/promises");



class InteractionsPage
{

constructor (page)
{
    this.page = page;
    this.interactionsPage = page.getByText('Interactions');
    this.droppablePage = page.getByText('Droppable');
    this.draggableBox = page.locator('#draggable');
    this.droppableBox = page.locator('#droppable').nth(0);
    this.acceptTab = page.locator('#droppableExample-tab-accept');
    this.notAcceptableBox = page.locator('#notAcceptable');
    this.droppableBoxAccept = page.locator('#droppable').nth(1);
    this.acceptableBox = page.locator('#acceptable');

    this.TEST = page.locator('#acceptDropContainer');


}

async clickOnInteractionsPage()
{
    await this.interactionsPage.click();
}

async clickOnDroppablePage()
{
    await this.droppablePage.click();
}

async dragAndDropAction()
{
    await this.draggableBox.dragTo(this.droppableBox);
}

async checkDragAndDropAreVisible()
{
    await expect(this.draggableBox).toBeVisible();
    await expect(this.draggableBox).toContainText('Drag me');
    await expect(this.droppableBox).toBeVisible();
    await expect(this.droppableBox).toContainText('Drop here');
}

async checkDropBoxMessage()
{
    await expect(this.droppableBox).toContainText('Dropped!');
}

async clickOnAcceptTab()
{
    await this.acceptTab.click();
}

async dragNotAcceptableToDropZone()
{
    await this.notAcceptableBox.dragTo(this.droppableBoxAccept);
}

async dragTEST()
{
    await this.notAcceptableBox.dragTo(this.TEST);
}

async checkDropBoxNotAcceptMessage()
{
    await expect(this.droppableBoxAccept).toBeVisible();
    await expect(this.droppableBoxAccept).toContainText('Drop here');
}

async dragAcceptableToDropZone()
{
    await this.acceptableBox.dragTo(this.droppableBoxAccept);
}

async checkDropBoxAcceptMessage()
{
    await expect(this.droppableBoxAccept).toBeVisible();
    await expect(this.droppableBoxAccept).toContainText('Dropped!');
}












}
module.exports = {InteractionsPage};