/*
const { driverHelper } = require('../local/driver-manager');
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


const {setDriverMethods} = require('../Libraries/example.js');

require("../helpers/setup");
const {DATA} = require('../test/test-settings.js');
const wd = require("wd");
const tesultsReporter = require("mocha-tesults-reporter")

const serverConfigLocal = {
    host: 'localhost',
    port: 4723
};
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

    before(function () {
        driver = wd.promiseChainRemote(serverConfigLocal);
        require("../helpers/logging").configure(driver);

        setDriverMethods(driver);
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

    it("login example",async function () {
        return driver.login("hakan","123456")

    });
});