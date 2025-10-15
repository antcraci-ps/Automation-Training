const {test, expect} = require('@playwright/test');


test('Browser Context Playwright test', async function({page}) 
{
    await page.goto("http://www.rahulshettyacademy.com/client")
    await page.locator('input#username').fill('anshika@gmail.com')
    await page.locator('input#password').fill('Iamking@000') 
    // await page.locator("[type='password']").fill('learning');
    // await page.locator('input#signInBtn').click();
    // console.log(await page.locator("[style*='block']").textContent());
    // await expect(page.locator("[style*='block']")).toHaveText('Incorrect username/password.');
     
});
