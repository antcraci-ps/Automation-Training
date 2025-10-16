const { expect } = require("@playwright/test");


class AlertsFrameWindowsPage
{

    constructor(page)
    {
        this.page = page;
        this.alertsFrameWindowsPage = page.locator('span:has-text("Alerts, Frame & Windows")');
        this.browserWindowsPage = page.locator('span:has-text("Browser Windows")');
        this.newTabButton = page.locator('#tabButton');
        this.newWindowButton = page.locator('#windowButton');
        this.newWindowMessageButton = page.locator('#messageWindowButton');


    }

    async clickOnAlertsFrameWindowsPage()
    {
        await this.alertsFrameWindowsPage.click();
    }

    async clickOnBrowserWindowsPage()
    { 
        await this.browserWindowsPage.click();
    }

    async clickOnNewTabButton()
    {
        await this.newTabButton.click();
    }

    async TESTnewTabOpen()
    {
        const [newPage] = await Promise.all
        ([
            this.page.waitForEvent('popup'),
            this.page.click('#tabButton'),
        ])

        await newPage.waitForLoadState()

        await expect(newPage).toHaveURL('https://demoqa.com/sample')

        // await this.page.waitForEvent('popup');
    }











}
module.exports = {AlertsFrameWindowsPage};