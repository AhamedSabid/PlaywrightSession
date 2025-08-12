import {test,expect} from '@playwright/test';

test.skip('example test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  const title = await page.title();
  expect(title).toBe('Register');

  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("Ahamed");
  await page.locator("textarea[ng-model='Adress']").fill("123 Main St");
  await page.locator("text=Submit").click();

   await page.getByRole("link",{name:"Home"}).click();
   
   await page.goBack();

  await page.close();

});

test('test with different locators', async ({ page }) => {
  await page.goto('https://automationpanda.com/');
  const title = await page.title();
  expect(title).toBe('Automation Panda | A blog for software development and testing');

  await page.locator("id=subscribe-field").fill("Ahamed");
  await page.locator("id=subscribe-button").click();
  await page.close();
});
