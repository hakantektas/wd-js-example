require("../../helpers/setup");
const {DATA} = require('../test-settings.js');
const wd = require("wd");
require("mocha-allure-reporter");

const serverConfigRemete = {
    hostname: DATA.CLOUD['momentum.hostname'],
    port: DATA.CLOUD['momentum.gw'],
    path: DATA.CLOUD['momentum.path'],
    protocol: DATA.CLOUD['momentum.protocol'],
};
describe("sample test", function () {
    this.timeout(300000);

    let driver;
    let allPassed = true;


    const testStep = allure.createStep("initial", () => {
        // do something
      });
      // If step will throw an exception or return a rejected promise, it will be marked as broken
      // in the report, and also  will fail the test
    const stepToBreak = allure.createStep("break test", () => {
    throw new Error("Make test broken");
    });


    before(function () {
        
        driver = wd.promiseChainRemote(serverConfigRemete);
        require("../../helpers/logging").configure(driver);

        let desired = {

            platformName: 'Android',
            "appium:automationName": "UiAutomator2",
            "appium:autoGrantPermissions": true,
            "appium:app":"ms://8bfd67f1d61f4b3bbae3c9fd7027c689",
            "appium:fullReset": true,
            "appium:noReset": false,
            "appium:deviceName": "",
            "appium:udid": "",
            "momentum:options": {
                "user": DATA.CLOUD['momentum.user'],
                "token": DATA.CLOUD['momentum.token'],
                "gw": DATA.CLOUD['momentum.deviceList'][0]
            }
        };
        return driver
            .init(desired)
            .setImplicitWaitTimeout(8000);
    });

    after(function () {
        return driver
            .quit();
    });

    afterEach(function () {
        allPassed = allPassed && this.currentTest.state === 'passed';
    });

    it("login example", function () {
        testStep()
        stepToBreak()
        return driver
            .elementById("app.com.sandjs.bankaccountfakewallet:id/username_txt")
            .should.eventually.exist
            .click()
            .elementById("app.com.sandjs.bankaccountfakewallet:id/username_txt")
            .sendKeys("hakana")
            .hideKeyboard()
            .elementById("app.com.sandjs.bankaccountfakewallet:id/password_txt")
            .sendKeys("123456Aa.")
            .hideKeyboard()
            .elementById("app.com.sandjs.bankaccountfakewallet:id/login_btn")
            .click()
            

    });
});