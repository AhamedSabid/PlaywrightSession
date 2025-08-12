import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer.firstName"]').click();
  await page.locator('[id="customer.firstName"]').fill('Ahamed');
  await page.locator('[id="customer.lastName"]').click();
  await page.locator('[id="customer.lastName"]').fill('Sabid');
  await page.locator('[id="customer.address.street"]').click();
  await page.locator('[id="customer.address.street"]').fill('ABC');
  await page.locator('[id="customer.address.city"]').click();
  await page.locator('[id="customer.address.city"]').fill('cochin');
  await page.locator('[id="customer.address.state"]').click();
  await page.locator('[id="customer.address.state"]').fill('kerala');
  await page.locator('[id="customer.address.zipCode"]').click();
  await page.locator('[id="customer.address.zipCode"]').press('PageDown');
  await page.locator('[id="customer.address.zipCode"]').press('ArrowUp');
  await page.locator('[id="customer.address.zipCode"]').press('Insert');
  await page.locator('[id="customer.address.zipCode"]').press('PageDown');
  await page.locator('[id="customer.address.zipCode"]').press('PageDown');
  await page.locator('[id="customer.address.zipCode"]').click();
  await page.locator('[id="customer.address.zipCode"]').press('ArrowRight');
  await page.locator('[id="customer.address.zipCode"]').press('ArrowUp');
  await page.locator('[id="customer.address.zipCode"]').press('Insert');
  await page.locator('[id="customer.address.zipCode"]').click();
  await page.locator('[id="customer.address.zipCode"]').press('NumLock');
  await page.locator('[id="customer.address.zipCode"]').fill('680000');
  await page.locator('[id="customer.phoneNumber"]').click();
  await page.locator('[id="customer.phoneNumber"]').fill('1234567890');
  await page.locator('[id="customer.ssn"]').click();
  await page.locator('[id="customer.ssn"]').fill('123');
  await page.locator('[id="customer.username"]').click();
  //create username random string
  const randomString = Math.random().toString(36).substring(2, 15);
  await page.locator('[id="customer.username"]').fill(randomString);
  await page.locator('[id="customer.password"]').click();
  await page.locator('[id="customer.password"]').fill('aha123');
  await page.locator('#repeatedPassword').click();
  await page.locator('#repeatedPassword').fill('aha123');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.locator('h1')).toContainText(`Welcome ${randomString}`);
  await expect(page.locator('#rightPanel')).toContainText('Your account was created successfully. You are now logged in.');
  await page.getByRole('link', { name: 'Log Out' }).click();
  await page.close();
});

