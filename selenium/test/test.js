const {Builder, By, Key} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);


const driver = new Builder().forBrowser("chrome").build();



async function example(){
    await driver.get('https://www.google.com/');
    let googleQuestion = await driver.findElement(By.name('q'))
    await googleQuestion.sendKeys("Who am I?", Key.RETURN);
    

    setTimeout(function(){
        driver.quit()
      }, 2000)

    driver.quit()


}



    
  

example()