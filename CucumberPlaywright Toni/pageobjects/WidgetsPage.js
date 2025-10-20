const { expect, } = require("@playwright/test");



class WidgetsPage
{
    
constructor (page)
{
    this.page = page;
    this.widgetsPage = page.getByText('Widgets', { exact: true });
    this.accordianPage = page.getByText('Accordian', { exact: true });
    this.section1AccordionTab = page.locator('#section1Heading');
    this.section2AccordionTab = page.locator('#section2Heading');
    this.section3AccordionTab = page.locator('#section3Heading');
    this.section1Text = page.locator('#section1Content');
    this.section2Text = page.locator('#section2Content');
    this.section3Text = page.locator('#section3Content');
    this.datePickerPage = page.getByText('Date Picker');
    this.selectDateDrpdwn = page.locator('##datePickerMonthYearInput');

}

async clickOnWidgetsPage()
{
   await this.widgetsPage.click();
}

async clickOnAccordianPage()
{
    await this.accordianPage.click();
}

async clickSection1Accordion()
{
    await this.section1AccordionTab.click();
}

async clickSection2Accordion()
{
    await this.section2AccordionTab.click();
}

async clickSection3Accordion()
{
    await this.section3AccordionTab.click();
}

async checkSection1Text()
{
    await expect(this.section1Text).toContainText('Lorem Ipsum is simply dummy text');
}

async clickOnDatePickerPage()
{
    await this.datePickerPage.click();
}

async clickOnSelectDateDropdown()
{
    await this.selectDateDrpdwn.click();
}





}
module.exports = {WidgetsPage};