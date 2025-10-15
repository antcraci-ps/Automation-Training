const {After, Before,AfterStep,Status, context} = require('@cucumber/cucumber');
const playwright = require('@playwright/test');




Before(async function () {
    // console.log("i am first");
    const browser = await playwright.chromium.launch({headless: false,});
    const context = await browser.newContext();
    this.page =  await context.newPage();
  });

AfterStep( async function ({result}) { // This hook will be executed after all steps, and take a screenshot on step failure
  if (result.status === Status.FAILED)
    {
      const buffer = await this.page.screenshot();
      await this.page.screenshot({ path: 'screenshot1.png' });
      this.attach(buffer.toString('base64'), 'base64:image/png');
      console.log("Screenshot logged")

    }
  });
  
After(async function () {
    
    // console.log("i am last");
    
    
  });

  
