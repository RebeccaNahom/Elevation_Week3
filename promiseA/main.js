//========= Boilerplate =========
const { Builder, By, Key } = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const driver = new Builder().forBrowser("chrome").build();


//========= Interesting code =========
// function example() {
//     driver.get('https://www.google.com/');
//     let googleInput = driver.findElement(By.name('q'))
//         googleInput
//             .then(function (element) {
//                 return element.sendKeys("who am i?", Key.RETURN)
//             }).then(function () {
//                 driver.quit()
//             })
// }

// googleInput.then(function() {
//     const sent = googleInput.sendKeys("who am i?", Key.RETURN)
//     sent.then(function() {
//       driver.quit();
//     })
//   })


// example()
// const x = //some async operation

//     x.then(function () {
//         //do something if Promise was resolved
//     }).catch(function (error) {
//         //do something if Promise was rejected
//     })


async function example() {
    driver.get('https://www.amazon.com/');
    let amazonInput = driver.findElement(By.id('twotabsearchtextbox'))
    amazonInput.then(function (element) {
        return element.sendKeys("Computer", Key.RETURN)
    }).then(function () {
        return driver.findElement(By.className("s-image"))
    }).then(function (item) {
        return item.click()
    }).then(function () {
        driver.quit()
    }).catch(function (eror) {
        console.log("problem");
        console.log(eror);

    })

}

example()

// function example2() {
//     driver.get('https://www.amazon.com/');
//     let amazonInput = driver.findElement(By.id('twotabsearchtextbox'))
//     amazonInput.then(function (element) {
//         return element.sendKeys("Computer", Key.RETURN)
//     }).then(function () {
//         return driver.findElement(By.className("s-image"))
//     }).then(function (item) { // `item` is the element that was found!
//         return item.click()
//     }).then(function () {
//         driver.quit()
//     }).catch(function (error) {
//         console.log("Problem")
//         console.log(error)
//     })
// }