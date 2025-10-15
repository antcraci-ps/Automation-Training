const { expect } = require("@playwright/test");

class LandingPage
{

constructor(page)
{
    this.page = page;
    this.cardText = page.locator(".card-body")
    this.homeBanner = page.locator(".home-banner")
}

async goTo()
{
    await this.page.goto("https://demoqa.com/");
}

async getCardText()
{
    console.log(await this.cardText.allTextContents());
}

async homeBannerVisible()
{
    await expect(this.homeBanner).toBeVisible();
}

async clickOnCard()
{
    await this.cardText.nth(0).click();    
}



}
module.exports = {LandingPage};