require("../../helpers/setup");
const {DATA} = require('../test-settings.js');
const wd = require("wd");
const tesultsReporter = require("mocha-tesults-reporter")

const serverConfigLocal = {
    host: 'localhost',
    port: 4723
};
describe("sample test", function () {
    this.timeout(300000);

    let driver;
    let allPassed = true;

    before(function () {
        
        driver = wd.promiseChainRemote(serverConfigLocal);
        require("../../helpers/logging").configure(driver);

        let desired = {
            platformName: 'Android',
            deviceName: '988d9145524846413130',
            app:"/Users/hakantektas/Desktop/wd-js-example/wd-js-example/app/sample.apk",
            fullReset: false,
            noReset: true
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
        return driver
            .waitForElementById("app.com.sandjs.bankaccountfakewallet:id/username_txt")
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