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
        // this.alertsPage = page.locator('span:has-text("Alerts")');
        this.alertsPage = page.getByText('Alerts', { exact: true });
        this.seeAlertButton = page.locator('#alertButton');


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

    async clickOnAlertsPage()
    {
        await this.alertsPage.click();
    }

    async clickOnSeeAlertButton()
    {
        await this.seeAlertButton.click();
    }

    async TESTnewTabOpen() // test if promis function is still needed
    {
        await this.page.click('#tabButton')
        const [newTabOpen] = await Promise.all
        ([
            this.page.waitForEvent('popup'),
            // this.page.click('#tabButton'),
        ])

        await newTabOpen.waitForLoadState()
        await expect(newTabOpen).toHaveURL('https://demoqa.com/sample')
        await newTabOpen.close();

        // await this.page.waitForEvent('popup');
    }

    async TESTnewWindowOpen()
    {
        this.page.click('#windowButton');
        const [newWindowOpen] = await Promise.all
        ([
            this.page.waitForEvent('popup'),
            // this.page.click('#windowButton'),
        ])

        await newWindowOpen.waitForLoadState();
        await expect(newWindowOpen).toHaveURL('https://demoqa.com/sample');
        await newWindowOpen.close();

    }

    async TESTnewWindowsMessageOpen()
    {
        this.page.click('#messageWindowButton');
        const [newWindowsMessageOpen] = await Promise.all
        ([
            this.page.waitForEvent('popup'),
            // this.page.click('messageWindowButton'),
        ])

        await newWindowsMessageOpen.waitForLoadState();
                        
        console.log(await newWindowsMessageOpen.content());
        
        await newWindowsMessageOpen.close();
    }

    async acceptAlertDialogue()
    {
        // this.page.click('#alertButton');
        
        // this.page.on('alert', async alert => {
        // console.log(alert.message()); // Optional: log the message
        // await alert.accept();         // Accept the dialog (click "OK")
        
  
        // });

        this.page.click('#alertButton');
        // const [newWindowOpen] = await Promise.all
        // ([
        //     this.page.waitForEvent('dialog'),
        //     // this.page.click('#windowButton'),
        // ])

        // await newWindowOpen.waitForLoadState();
        this.page.waitForEvent('dialog');
        // this.page.getByText('OK').click();

        console.log('ojbihvugcyfxtzeryctuvyibuovyictuxyrtzertdexyfcguv');
        
        // this code works somehow

    }

    async dialoguePopUp()
    {
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
    }











}
module.exports = {AlertsFrameWindowsPage};