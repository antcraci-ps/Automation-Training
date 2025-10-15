const {test, expect} = require('@playwright/test');


test('Browser Context Playwright test', async function({browser}) 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/")
    await page.locator('input#username').fill('rahulshetty')
    // await page.locator('input#password').fill('learning') 
    await page.locator("[type='password']").fill('learning');
    await page.locator('input#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toHaveText('Incorrect username/password.');
     
});

test('Page Playwright test', async function({browser, page}) // use test.only if you want to run only 1 test
{
    // const context = await browser.newContext(); // if you use the global variable (page) you don't need to write these 2 lines of code because it does the same thing
    // const page = await context.newPage();
    await page.goto("https://google.com/")
    // get the title of the page and check if that is correct
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
     
});


test.only('Better tutorial test', async function ({page})
{
const userName = page.locator('input#username')
const passWord = page.locator('input#password')
const signIn = page.locator('input#signInBtn')
const cardTitles = page.locator(".card-body a")

await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/")
console.log(await page.title());
await userName.fill('rahulshetty')
await passWord.fill('learning')
await signIn.click()
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toHaveText('Incorrect username/password.');
await userName.fill('')
await userName.fill('rahulshettyacademy')
await signIn.click()
console.log(await cardTitles.nth(0).textContent()); // use nth() to select an element based on index 
// console.log(await page.locator(".card-body a").locator('nth=0').textContent()); // same thing as above but this code is from Playwright documentation
// console.log(await page.locator(".card-body a").first().textContent()); // same thing 
// console.log(await page.locator(".card-body a").last().textContent()); // use this to select the last element 
// console.log(await page.locator(".card-body a").locator('nth=-1').textContent()); //same thing as above but this code is from Playwright documentation
console.log(await cardTitles.allTextContents());
});