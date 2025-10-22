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












}
module.exports = {InteractionsPage};