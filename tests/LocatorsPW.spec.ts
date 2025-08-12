import {test,expect} from '@playwright/test';

test.skip('example test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  const title = await page.title();
  expect(title).toBe('Register');

  //verify heading Register using getByRole
  const heading = await page.getByRole('heading', { name: 'Register' });
  //expect(heading).toBe("Register");
  console.log(heading.textContent);
  await page.getByPlaceholder('First Name').fill('John');
  await page.getByPlaceholder('Last Name').fill('Doe');
  await page.locator("textarea[ng-model='Adress']").fill("123 Main St");
  //await page.locator("text=Submit").click();
  await page.getByRole("button",{name:"Submit"}).click();

  await page.getByRole("link",{name:"Home"}).click();


  await page.close();

});

test('test with different locators', async ({ page }) => {
  await page.goto('https://automationpanda.com/');
  const title = await page.title();
  expect(title).toBe('Automation Panda | A blog for software development and testing');

  //await page.locator("id=subscribe-field").fill("Ahamed");
  //await page.locator("id=subscribe-button").click();

  //await page.locator('id=subscribe-field').fill("Ahamed");
  //await page.locator('input#subscribe-field').fill("Ahamed");
  //await page.locator('.wp-block-button__link').first().click();
  await page.locator('//input[@type="email"]').first().fill("Ahamed");
  await page.locator('//button[contains(text(),"Follow")]').click();
  await page.close();
});
