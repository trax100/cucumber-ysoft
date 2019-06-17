const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const {Builder, By, until} = require('selenium-webdriver');
const {registrationPageObjects} = require('../../page-objects/registration-page.js');

let driver = new Builder().forBrowser('chrome').build();
let data = require('../../test-data/register-data');

Given('I am on the main page', {timeout: 2 * 5000}, async function () {
  await driver.get('http://automationpractice.com');
});

When('I click Sign-in Button',async function () {
  await driver.findElement(By.className(registrationPageObjects.login)).click();
});

When('I enter registered student ID',async function () {
  let messageFieldObject = await driver.findElement(By.id(registrationPageObjects.accountIdInput));
  await driver.wait(until.elementIsVisible(messageFieldObject),1000);
  await driver.findElement(By.id(registrationPageObjects.accountIdInput)).sendKeys(data.newEmailAddress);
});

When('I click Create an account Button',async function () {
  await driver.findElement(By.id(registrationPageObjects.registerButton)).click();
});

When('I click Register Button',async function () {
  let button = await driver.wait(until.elementLocated(By.id(registrationPageObjects.submitAccount)), 10000);
  await button.click();
});

Then('I should see There are 8 errors', async function () {
  let messageFieldObject = await driver.findElement(By.css(registrationPageObjects.errorMessageField));
  await driver.wait(until.elementIsVisible(messageFieldObject),1000);
  let actualResult = await messageFieldObject.getText();
  assert.equal(actualResult, 'There are 8 errors');
  
});

