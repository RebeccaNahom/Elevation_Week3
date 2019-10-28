const {Builder, By, Key} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const driver = new Builder().forBrowser("chrome").build();

async function test(){
    await driver.get("file:///C:/RLN/Dev/ElevationBC/Elevation_Week3/selenium/exercise1/index.html")
    let infoText = await driver.findElement(By.id("textinserted"))
    await infoText.sendKeys("Rebecca", Key.RETURN)
    await driver.findElement(By.id("addbutton")).click()
    let divTxt = await driver.findElement(By.id("newText")).getText()
        if(divTxt == "Rebecca"){
            console.log(true);
        }

        setTimeout(function(){
            driver.quit()
        }, 4000)
            
        
}


test()

