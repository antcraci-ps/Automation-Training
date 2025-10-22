const assert = require('assert')
const { When, Then, Given, And } = require('@cucumber/cucumber');
const { POmanager } = require('../../pageobjects/POmanager');
const { LandingPage } = require('../../pageobjects/LandingPage');
const playwright = require('@playwright/test');
const {test, expect} = require('@playwright/test');
let poManager


 Given('the user lands on page', async function ()
{
    poManager = new POmanager(this.page);
    const landingPage = poManager.getLandingPage();
    await landingPage.goTo();
    console.log("the user lands on page")

});

When('the page is fully loaded', async function ()
{
    poManager = new POmanager(this.page);
    const landingPage = poManager.getLandingPage();
    await landingPage.getCardText();
    console.log("the page is fully loaded")
});

Then('the page sould be displayed', function ()
{
    console.log("the page sould be displayed")
});

When('the category cards are displayed', async function()
{
    poManager = new POmanager(this.page);
    const landingPage = poManager.getLandingPage();
    await landingPage.homeBannerVisible();
    console.log("the category cards are displayed")
});

// And('the category cards are displayed', function()
// {
//     console.log("AND step")
// });

Given('the user lands on the text box form page', async function ()
{
    poManager = new POmanager(this.page);
    const landingPage = poManager.getLandingPage();
    const elementsPage = poManager.getElementsPage();
    await landingPage.goTo();
    await landingPage.clickOnCard();
    await elementsPage.clickOnTextBox();
    console.log("the user lands on page")
});



When('the user inputs all the info into the form and clicks on Submit button {string}, {string}, {string}, {string}', async function (full_name, email, current_address, permanent_address)
{
    poManager = new POmanager(this.page);
    const elementsPage = poManager.getElementsPage();
    await elementsPage.fillInInfo(full_name, email, current_address, permanent_address);
    await elementsPage.clickSubmitButton();
    
});



Then('a summary of the provided info is displayed {string}, {string}, {string}, {string}', async function (full_name, email, current_address, permanent_address)
{
    poManager = new POmanager(this.page);
    const elementsPage = poManager.getElementsPage();
    console.log(full_name, email, current_address, permanent_address);
    await elementsPage.outputBoxConfirmation(full_name, email, current_address, permanent_address);
});


Given('the user lands on Buttons page', async function ()
{
    poManager = new POmanager(this.page);
    const landingPage = poManager.getLandingPage();
    const elementsPage = poManager.getElementsPage();
    await landingPage.goTo();
    await landingPage.clickOnCard();
    await elementsPage.clickOnButtons();
    console.log("the user lands on page")
});

When('the user performs all the clicks',{timeout: 100 * 1000}, async function ()
{
    poManager = new POmanager(this.page);
    const elementsPage = poManager.getElementsPage();
    await elementsPage.testClickingAllButtons();
});

Then('a confirmation message will be displayed', async function ()
{
    poManager = new POmanager(this.page);
    const elementsPage = poManager.getElementsPage();
    await elementsPage.confirmationMessage();
});

Given('the user lands on the Radio Button page', async function ()
{
    poManager = new POmanager(this.page);
    const landingPage = poManager.getLandingPage();
    const elementsPage = poManager.getElementsPage();
    await landingPage.goTo();
    await landingPage.clickOnCard();
    await elementsPage.clickOnRadioButton();
    console.log("the user lands on page")
    
});

When('the user clicks on all available radio buttons', async function ()
{
    poManager = new POmanager(this.page);
    const elementsPage = poManager.getElementsPage();
    await elementsPage.testClickYesRadioButton();
    await elementsPage.testClickImpressiveRadioButton();
    
});

Then('a confirmation message will be visible', async function ()
{
    poManager = new POmanager(this.page);
    const elementsPage = poManager.getElementsPage();
    await elementsPage.confirmationTextField();
    
});

Given('the user lands on the Check Box page', async function ()
{
    poManager = new POmanager(this.page);
    const landingPage = poManager.getLandingPage();
    const elementsPage = poManager.getElementsPage();
    await landingPage.goTo();
    await landingPage.clickOnCard();
    await elementsPage.clickOnCheckBox();
    console.log("the user lands on page")
});

When('the user clicks on Expand All button the entire list will be visible', async function ()
{
    poManager = new POmanager(this.page);
    const elementsPage = poManager.getElementsPage();
    await elementsPage.clickOnExpandAllButton();
    await elementsPage.filesAndFoldersExpanded();
});

Then('the user clicks on Collapse All button the entire list will be collapsed showing the initial state', async function ()
{
    poManager = new POmanager(this.page);
    const elementsPage = poManager.getElementsPage();
    await elementsPage.clickOnCollapseAllButton();
    await elementsPage.filesAndFoldersCollapsed();
});

When('the user clicks on Toggle button the subcategories will be visible', async function ()
{
    poManager = new POmanager(this.page);
    const elementsPage = poManager.getElementsPage();
    await elementsPage.clickOnToggleButton();
    await elementsPage.onlySubcategoriesAreVisible();
    
});

Then('the user clicks on the CheckBox button and a message will be displayed stating the selected subcategories', async function ()
{
    poManager = new POmanager(this.page);
    const elementsPage = poManager.getElementsPage();
    await elementsPage.clickOnCheckBoxButton();
    await elementsPage.resultFieldIsVisible();
    
});

Given('the user lands on the Upload and Download page', async function ()
{
    poManager = new POmanager(this.page);
    const landingPage = poManager.getLandingPage();
    const elementsPage = poManager.getElementsPage();
    await landingPage.goTo();
    await landingPage.clickOnCard();
    await elementsPage.clickOnUploadAndDownloadPage();
    
});

Given('the users lands on Browser Windows page', async function()
{
    poManager = new POmanager(this.page);
    const landingPage = poManager.getLandingPage();
    const alertsFrameWindowsPage = poManager.getAlertsFrameWindowsPage();
    await landingPage.goTo();
    await landingPage.clickOnCard();
    await alertsFrameWindowsPage.clickOnAlertsFrameWindowsPage();
    await alertsFrameWindowsPage.clickOnBrowserWindowsPage();
});

When('the user clicks on New Tab button a new tab will open in browser', async function ()
{
    poManager = new POmanager(this.page);
    const alertsFrameWindowsPage = poManager.getAlertsFrameWindowsPage();
    // await alertsFrameWindowsPage.clickOnNewTabButton();
    await alertsFrameWindowsPage.TESTnewTabOpen();    
});

Then('the user clicks on New Window button and a new window will open', async function ()
{
    poManager = new POmanager(this.page);
    const alertsFrameWindowsPage = poManager.getAlertsFrameWindowsPage();
    await alertsFrameWindowsPage.TESTnewWindowOpen();
});

When('the user clicks on New Window Message button a new window with sample text will open', async function ()
{
    poManager = new POmanager(this.page);
    const alertsFrameWindowsPage = poManager.getAlertsFrameWindowsPage();
    await alertsFrameWindowsPage.TESTnewWindowsMessageOpen();
});

Given('the user lands on Alerts page', async function ()
{
    poManager = new POmanager(this.page);
    const landingPage = poManager.getLandingPage();
    const alertsFrameWindowsPage = poManager.getAlertsFrameWindowsPage();
    await landingPage.goTo();
    await landingPage.clickOnCard();
    await alertsFrameWindowsPage.clickOnAlertsFrameWindowsPage();
    await alertsFrameWindowsPage.clickOnAlertsPage();   
})

When('the user clicks on the Click Me button', async function ()
{
    poManager = new POmanager(this.page);
    const alertsFrameWindowsPage = poManager.getAlertsFrameWindowsPage();
    await alertsFrameWindowsPage.clickOnSeeAlertButton();
    await alertsFrameWindowsPage.acceptAlertDialogue();
    
});

Then('an Alert will pop up', async function ()
{
    poManager = new POmanager(this.page);
    const alertsFrameWindowsPage = poManager.getAlertsFrameWindowsPage();
    await alertsFrameWindowsPage.dialoguePopUp();
});

Given('the user lands on the Accordian page', async function ()
{
    poManager = new POmanager(this.page);
    const landingPage = poManager.getLandingPage();
    const widgetsPage = poManager.getWidgetsPage();
    await landingPage.goTo();
    await landingPage.clickOnCard();
    await widgetsPage.clickOnWidgetsPage();
    await widgetsPage.clickOnAccordianPage();
    
});

When('the user clicks on all the accordian tabs', async function ()
{
    poManager = new POmanager(this.page);
    const widgetsPage = poManager.getWidgetsPage();
    await widgetsPage.clickSection1Accordion();
    await widgetsPage.clickSection2Accordion();
    await widgetsPage.clickSection3Accordion();
});

Then('the text will be visible inside the tabs', async function ()
{
    poManager = new POmanager(this.page);
    const widgetsPage = poManager.getWidgetsPage();
    await widgetsPage.clickSection1Accordion();
    await widgetsPage.checkSection1Text();
});

Given('the user lands on the Date Picker page', async function ()
{
    poManager = new POmanager(this.page);
    const landingPage = poManager.getLandingPage();
    const widgetsPage = poManager.getWidgetsPage();
    await landingPage.goTo();
    await landingPage.clickOnCard();
    await widgetsPage.clickOnWidgetsPage();
    await widgetsPage.clickOnDatePickerPage();
    
});

When('the user selects the desired date from Select Date field {string}', async function(birthday)
{
    poManager = new POmanager(this.page);
    const widgetsPage = poManager.getWidgetsPage();
    await widgetsPage.clickOnSelectDateDropdown();
    await widgetsPage.selectBirthday(birthday);
    
});

Then('the field will display the correct date {string}', async function (birthday)
{
    poManager = new POmanager(this.page);
    const widgetsPage = poManager.getWidgetsPage();
    await widgetsPage.checkBirthday(birthday);
    await widgetsPage.clickOnWidgetsPage();
     
});

When('the user picks the date and time from Date and Time field {string}', async function (date_time)
{
    poManager = new POmanager(this.page);
    const widgetsPage = poManager.getWidgetsPage();
    await widgetsPage.clickOnDateAndTimeDropdown();
    await widgetsPage.selectDateAndTime(date_time);
    
});

Then('the fiel will display the correct date and time {string}', async function (date_time)
{
    poManager = new POmanager(this.page);
    const widgetsPage = poManager.getWidgetsPage();
    await widgetsPage.checkDateAndTime(date_time);
    
});

Given('the user lands on Droppable page', async function ()
{
    poManager = new POmanager(this.page);
    const landingPage = poManager.getLandingPage();
    const interactionsPage = poManager.getInteractionsPage();
    await landingPage.goTo();
    await landingPage.clickOnCard();
    await interactionsPage.clickOnInteractionsPage();
    await interactionsPage.clickOnDroppablePage();
    
});

When('the user click and drags the Drag Me box to the Drop Here zone', async function ()
{
    poManager = new POmanager(this.page);
    const interactionsPage = poManager.getInteractionsPage();
    await interactionsPage.checkDragAndDropAreVisible();
    await interactionsPage.dragAndDropAction();
    
});

Then('the message from the dropping zone will be displayed as Dropped!', async function ()
{
    poManager = new POmanager(this.page);
    const interactionsPage = poManager.getInteractionsPage();
    await interactionsPage.checkDropBoxMessage();
    
})