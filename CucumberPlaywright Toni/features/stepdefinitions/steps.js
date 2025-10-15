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
    
})