const { AlertsFrameWindowsPage } = require("./AlertsFrameWindowsPage");
const { ElementsPage } = require("./ElementsPage");
const { LandingPage } = require("./LandingPage");
const { WidgetsPage } = require("./WidgetsPage");

class POmanager
{

constructor(page)
{
    this.page = page;
    this.landingPage = new LandingPage(this.page);
    this.elementsPage = new ElementsPage(this.page);
    this.alertsFrameWindowsPage = new AlertsFrameWindowsPage(this.page);
    this.widgetsPage = new WidgetsPage(this.page);
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

getWidgetsPage()
{
    return this.widgetsPage;
}



}
module.exports = {POmanager};