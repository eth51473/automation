import { Builder, Capabilities, By } from "selenium-webdriver"
 const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})


afterAll(async () => {
    await driver.quit()
})

test('I can test the movie list website', async () => {
  

  let inputBar = await driver.findElement(By.xpath('//input'))
  

  inputBar.sendKeys('Tenet')
  

  await driver.sleep(500)

  let addButton = await driver.findElement(By.xpath('//button[text()="Add"]'))
  addButton.click()
  await driver.sleep(2000)
  inputBar.sendKeys('Interstellar\n')
  
  await driver.sleep(2000)

  // let deleteBtn = await driver.findElement(By.xpath(`//button[text()="x"]`))
  let deleteBtn = await driver.findElement(By.id('Tenet'))
  deleteBtn.click()
  
  let message = await driver.findElement(By.id('message')).getText()
  
  expect(message).toBe('Tenet deleted!')
  await driver.sleep(3000)

  
  


  
})