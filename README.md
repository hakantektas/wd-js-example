
# wd.js ile appium
wd.js ile appium 1.0 test örneği


## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://github.com/hakantektas/wd-js-example.git
```

Proje dizinine gidin

```bash
  cd my-project
```

Gerekli paketleri yükleyin

```bash
  npm install
```

```bash
  npm install mocha
  npm install mocha-chai --save -dev
  npm install chai-as-promised
  npm install color
```

Sunucuyu çalıştırın

```bash
  npm run test
```

  
## Kullanım/Örnekler

```javascript
describe("sample test", function () {
    this.timeout(300000);

    let driver;
    let allPassed = true;

    before(function () {
      ******



    it("login example", function () {
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
```

## Test rapor arayüzü entegre etmek
```bash
  npm instal mocha-allure-reporter       

  npm install mocha-tesults-reporter --save       
```

## Test dosyalarını terminal üzerinden çalıştırma
```bash
      npx mocha ./test/localTest/example.js --reporter mochawesome    

  veya 

      npm run test