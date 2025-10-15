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
    this.checkBox = page.locator('span:has-text("Check Box")');
    this.expandAllButton = page.locator('[aria-label="Expand all"]');
    this.collapseAllButton = page.locator('[aria-label="Collapse all"]');
    this.toggleButton = page.getByTitle('Toggle');
    this.checkBoxButton = page.locator('.rct-checkbox');
    this.resultField = page.locator('#result');

    this.fileFolderHome = page.getByText('Home');
    this.fileFolderDesktop = page.getByText('Desktop');
    this.fileFolderNotes = page.getByText('Notes');
    this.fileFolderCommands = page.getByText('Commands');
    this.fileFolderDocuments = page.getByText('Documents');
    this.fileFolderWorkSpace = page.getByText('WorkSpace');
    this.fileFolderReact = page.getByText('React');
    this.fileFolderAngular = page.getByText('Angular');
    this.fileFolderVeu = page.getByText('Veu');
    this.fileFolderOffice = page.getByText('Office');
    this.fileFolderPublic = page.getByText('Public');
    this.fileFolderPrivate = page.getByText('Private');
    this.fileFolderClassified = page.getByText('Classified');
    this.fileFolderGeneral = page.getByText('General');
    this.fileFolderDownloads = page.getByText('Downloads');
    this.fileFolderWord = page.getByText('Word File.doc');
    this.fileFolderExcel = page.getByText('Excel File.doc');

    this.uploadAndDownloadPage = page.locator('span:has-text("Upload and Download")');

}


async clickOnTextBox()
{
    await this.textBox.click();
}

async clickOnCheckBox()
{
    await this.checkBox.click();
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

async clickOnExpandAllButton()
{
    await this.expandAllButton.click();
}

async clickOnCollapseAllButton()
{
    await this.collapseAllButton.click();
}

async clickOnToggleButton()
{
    await this.toggleButton.click();
}

async clickOnCheckBoxButton()
{
    await this.checkBoxButton.nth(0).click();
}

async clickOnUploadAndDownloadPage()
{
    await this.uploadAndDownloadPage.click();
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

async filesAndFoldersExpanded()
{
    await expect(this.fileFolderHome).toBeVisible();
    await expect(this.fileFolderDesktop).toBeVisible();
    await expect(this.fileFolderNotes).toBeVisible();
    await expect(this.fileFolderCommands).toBeVisible();
    await expect(this.fileFolderDocuments).toBeVisible();
    await expect(this.fileFolderWorkSpace).toBeVisible();
    await expect(this.fileFolderReact).toBeVisible();
    await expect(this.fileFolderAngular).toBeVisible();
    await expect(this.fileFolderVeu).toBeVisible();
    await expect(this.fileFolderOffice).toBeVisible();
    await expect(this.fileFolderPublic).toBeVisible();
    await expect(this.fileFolderPrivate).toBeVisible();
    await expect(this.fileFolderClassified).toBeVisible();
    await expect(this.fileFolderGeneral).toBeVisible();
    await expect(this.fileFolderDownloads).toBeVisible();
    await expect(this.fileFolderWord).toBeVisible();
    await expect(this.fileFolderExcel).toBeVisible();
}

async filesAndFoldersCollapsed()
{
    await expect(this.fileFolderHome).toBeVisible();
    await expect(this.fileFolderDesktop).toBeHidden();
    await expect(this.fileFolderNotes).toBeHidden();
    await expect(this.fileFolderCommands).toBeHidden();
    await expect(this.fileFolderDocuments).toBeHidden();
    await expect(this.fileFolderWorkSpace).toBeHidden();
    await expect(this.fileFolderReact).toBeHidden();
    await expect(this.fileFolderAngular).toBeHidden();
    await expect(this.fileFolderVeu).toBeHidden();
    await expect(this.fileFolderOffice).toBeHidden();
    await expect(this.fileFolderPublic).toBeHidden();
    await expect(this.fileFolderPrivate).toBeHidden();
    await expect(this.fileFolderClassified).toBeHidden();
    await expect(this.fileFolderGeneral).toBeHidden();
    await expect(this.fileFolderDownloads).toBeHidden();
    await expect(this.fileFolderWord).toBeHidden();
    await expect(this.fileFolderExcel).toBeHidden();
}

async onlySubcategoriesAreVisible()
{
    await expect(this.fileFolderHome).toBeVisible();
    await expect(this.fileFolderDesktop).toBeVisible();
    await expect(this.fileFolderNotes).toBeHidden();
    await expect(this.fileFolderCommands).toBeHidden();
    await expect(this.fileFolderDocuments).toBeVisible();
    await expect(this.fileFolderWorkSpace).toBeHidden();
    await expect(this.fileFolderReact).toBeHidden();
    await expect(this.fileFolderAngular).toBeHidden();
    await expect(this.fileFolderVeu).toBeHidden();
    await expect(this.fileFolderOffice).toBeHidden();
    await expect(this.fileFolderPublic).toBeHidden();
    await expect(this.fileFolderPrivate).toBeHidden();
    await expect(this.fileFolderClassified).toBeHidden();
    await expect(this.fileFolderGeneral).toBeHidden();
    await expect(this.fileFolderDownloads).toBeVisible();
    await expect(this.fileFolderWord).toBeHidden();
    await expect(this.fileFolderExcel).toBeHidden();
}

async resultFieldIsVisible()
{
    await expect(this.resultField).toBeVisible();
    await expect(this.resultField).toContainText('home');
}










}
module.exports = {ElementsPage};