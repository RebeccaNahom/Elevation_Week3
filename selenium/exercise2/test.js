const {Builder, By, Key} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const driver = new Builder().forBrowser("chrome").build();

let randomAge = Math.floor((Math.random() * 121) +1)
function randomHeightOrWeight(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let randomGender = Math.floor(Math.random() * 2)

async function BMICalculatorTest(){
    let age = driver.findElement(By.id("cage"))
    await driver.get("https://www.calculator.net/bmi-calculator.html")
    await age.sendKeys(Key.CONTROL,"a",Key.DELETE)
    await age.sendKeys(randomAge, Key.RETURN)   
    await driver.findElement(By.id("cheightmeter")).sendKeys(Key.CONTROL,"a",Key.DELETE)
    await driver.findElement(By.id("cheightmeter")).sendKeys(randomHeightOrWeight(80,210), Key.RETURN)
    await driver.findElement(By.id("ckg")).sendKeys(Key.CONTROL,"a",Key.DELETE)
    await driver.findElement(By.id("ckg")).sendKeys(randomHeightOrWeight(10,250), Key.RETURN)

          if(randomGender == 1){
            await driver.findElement(By.id("csex1")).click()
          }else{
            await driver.findElement(By.id("csex2")).click()
          }
 
          driver.findElement(By.xpath('//input[@value="Calculate"]')).click()

    setTimeout(function(){
        driver.quit()
    }, 5000)
            
}


BMICalculatorTest()
