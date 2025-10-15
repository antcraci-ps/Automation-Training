const { expect, } = require("@playwright/test");

class ElementsPage
{

constructor(page)
{
    this.page = page;
    this.textBox = page.locator('span:has-text("Text Box")');
    this.fullName = page.locator('#userName');
    this.email = page.locator('#userEmail');
    this.currentAddress = page.locator('#currentAddress');
    this.permanentAddress = page.locator('#permanentAddress');
    this.submitButton = page.locator('#submit');
    // this.outputBox = page.locator('#output');
    this.dbClickButton = page.locator('#doubleClickBtn');
    this.rightClickButton = page.locator('#rightClickBtn');
    this.clickMeButton = page.locator('button:has-text("Click Me")'); //dynamic element id
    this.buttons = page.locator('span:has-text("Buttons")');
    this.dbclckMessage = page.locator('#doubleClickMessage');
    this.rclckMessage = page.locator('#rightClickMessage');
    this.dynamicclckMessage = page.locator('#dynamicClickMessage');
    this.nameField = page.locator('#name');
    this.emailField = page.locator('#email');
    this.currentAddressField = page.locator('(//p[@id="currentAddress"])[1]');
    this.permanentAddressField = page.locator('//p[@id="permanentAddress"]');
    this.radioButton = page.locator('span:has-text("Radio Button")');
    this.yesRadionButton = page.locator('#yesRadio');
    this.impressiveRadioButton = page.locator('#impressiveRadio');
    this.noRadioButton = page.locator('#noRadio');
    this.yesMessage = page.locator('span:has-text("Yes")');
    this.impressiveMessage = page.locator('span:has-text("Impressive")');
    this.confirmationText = page.locator('p:has-text("You have selected ")');
}


async clickOnTextBox()
{
    await this.textBox.click();
}

async clickOnButtons()
{
    await this.buttons.click();
}

async clickOnRadioButton()
{
    await this.radioButton.click();
}

async clickSubmitButton()
{
    await this.submitButton.click();
}

async fillInInfo(full_name, email, current_address, permanent_address)
{
    await this.fullName.fill(full_name);
    await this.email.fill(email);
    await this.currentAddress.fill(current_address);
    await this.permanentAddress.fill(permanent_address);

}

async outputBoxConfirmation (full_name, email, current_address, permanent_address)
{
    await expect(this.nameField).toContainText(full_name);
    await expect(this.emailField).toContainText(email);
    await expect(this.currentAddressField).toContainText(current_address);
    await expect(this.permanentAddressField).toContainText(permanent_address);
}

async testClickingAllButtons()
{
    await this.dbClickButton.dblclick();
    await this.rightClickButton.click({button: 'right'});
    await this.clickMeButton.nth(2).click();
}

async testClickYesRadioButton()
{
    await expect(this.yesRadionButton).toBeVisible();
    await this.yesRadionButton.click({ force: true });
    await expect(this.yesMessage).toBeVisible();
        
}

async testClickImpressiveRadioButton()
{
    await expect(this.impressiveRadioButton).toBeVisible();
    await this.impressiveRadioButton.click({force: true});
    await expect(this.impressiveMessage).toBeVisible();
}

async confirmationMessage()
{
    await expect(this.dbclckMessage).toHaveText('You have done a double click');
    await expect(this.rclckMessage).toHaveText('You have done a right click');
    await expect(this.dynamicclckMessage).toContainText('You have done a dynamic click');
}

async confirmationTextField()
{
    await expect(this.confirmationText).toBeVisible();
}










}
module.exports = {ElementsPage};