const { AlertsFrameWindowsPage } = require("./AlertsFrameWindowsPage");
const { ElementsPage } = require("./ElementsPage");
const { LandingPage } = require("./LandingPage");

class POmanager
{

constructor(page)
{
    this.page = page;
    this.landingPage = new LandingPage(this.page);
    this.elementsPage = new ElementsPage(this.page);
    this.alertsFrameWindowsPage = new AlertsFrameWindowsPage(this.page);
}

getLandingPage()
{
    return this.landingPage;
}

getElementsPage()
{
    return this.elementsPage;
}

getAlertsFrameWindowsPage()
{
    return this.alertsFrameWindowsPage;
}



}
module.exports = {POmanager};