/*const { driverHelper } = require('../local/driver-manager');
const path = require('path');
let Momentum = require(path.join(__dirname, '../local/Momentum'));
var driver = {};
process.env.SCREENSHOT_ORDER = 0;


[Momentum.Section(Id=3669, Title='test')]
[Momentum.Case(Id=15746, Title='test')]
describe('Case_15746', function () {
    this.timeout(17000000);
  
    before(async function () {
    await driverHelper.getDriver().then((connector) => {
            driver = connector;
        });            setDriverMethods(driver);
    });

    beforeEach(async function () {
        await driver.saveScreen(`${this.currentTest.title}_Before`);
    });
    
    afterEach(async function () {
        await driver.saveScreen(`${this.currentTest.title}_After`);
    });



    Momentum.Step(Id = 51342, Title = 'test').run(
        it('Step_test', async function () {
            return driver.getCard();
        })
    );

  });


*/


require("../helpers/setup");
const wd = require("wd");



var DEFAULT_TIMEOUT=8000;
var DEFAULT_TIMEOUT_MID=1500;
var DEFAULT_TIMEOUT_MIN=500;

/********* ELEMENTS ********/
var ELEMENT = {

    ///Login Ekranı
        USERNAME_TXT         : "app.com.sandjs.bankaccountfakewallet:id/username_txt", 
        PASSWORD_TXT         : "app.com.sandjs.bankaccountfakewallet:id/password_txt",
        LOGIN_BTN            : "app.com.sandjs.bankaccountfakewallet:id/login_btn",
    //////Accaount Ekranı ///////
}

exports.setDriverMethods = (driver) => {
    
    wd.addPromiseChainMethod('login',(user,pass) => {
        return driver
        .waitForElementById(ELEMENT.USERNAME_TXT, DEFAULT_TIMEOUT)
        .sendKeys(user)
        .sleep(DEFAULT_TIMEOUT_MIN)
        .waitForElementById(ELEMENT.PASSWORD_TXT, DEFAULT_TIMEOUT)
        .sendKeys(pass)
        .sleep(DEFAULT_TIMEOUT_MIN)
        .waitForElementById(ELEMENT.LOGIN_BTN, DEFAULT_TIMEOUT)
        .click()
        .sleep(DEFAULT_TIMEOUT_MID)
    })
};

