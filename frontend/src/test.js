// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test_add', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('test_add', async function() {
    await driver.get("http://localhost:3001/")
    await driver.manage().window().setRect({ width: 1413, height: 839 })
    await driver.findElement(By.linkText("Add")).click()
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("test")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("hello world")
    await driver.findElement(By.css(".btn")).click()
  })
})
