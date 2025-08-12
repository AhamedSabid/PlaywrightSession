import { test, expect,page } from '@playwright/test';




test('Parabank login test', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer.firstName"]').click();
  await page.locator('[id="customer.firstName"]').fill('Ahamed');
  await page.locator('[id="customer.lastName"]').click();
  await page.locator('[id="customer.lastName"]').fill('Sabid');
  await page.locator('[id="customer.address.street"]').click();
  await page.locator('[id="customer.address.street"]').fill('ABC str');
  await page.locator('[id="customer.address.city"]').click();
  await page.locator('[id="customer.address.city"]').fill('cochin');
  await page.locator('[id="customer.address.state"]').click();
  await page.locator('[id="customer.address.state"]').fill('kerala');
  await page.locator('[id="customer.address.zipCode"]').click();
  await page.locator('[id="customer.address.zipCode"]').press('ArrowRight');
  await page.locator('[id="customer.address.zipCode"]').press('ArrowUp');
  await page.locator('[id="customer.address.zipCode"]').press('Insert');
  await page.locator('[id="customer.address.zipCode"]').press('ArrowRight');
  await page.locator('[id="customer.address.zipCode"]').press('ArrowRight');
  await page.locator('[id="customer.address.zipCode"]').press('ArrowRight');
  await page.locator('[id="customer.address.zipCode"]').click();
  await page.locator('[id="customer.address.zipCode"]').fill('680666');
  await page.locator('[id="customer.phoneNumber"]').click();
  await page.locator('[id="customer.phoneNumber"]').fill('1234567890');
  await page.locator('[id="customer.ssn"]').click();
  await page.locator('[id="customer.ssn"]').fill('2323233');
  await page.locator('[id="customer.username"]').click();
  //give a random user name
  var usrname='User' + Math.floor(Math.random() * 1000);
  await page.locator('[id="customer.username"]').fill(usrname);
  await page.locator('[id="customer.password"]').click();
  await page.locator('[id="customer.password"]').fill('abc123');
  await page.locator('#repeatedPassword').click();
  await page.locator('#repeatedPassword').fill('abc123');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByRole('img', { name: 'ParaBank' })).toBeVisible();
  await expect(page.getByText('Experience the difference')).toBeVisible(); 
  await expect(page.getByRole('heading', { name: `Welcome ${usrname}` })).toBeVisible();
  await expect(page.getByText('Your account was created')).toBeVisible();
  await expect(page.getByRole('link', { name: 'home', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Log Out' }).click();
  await expect(page.getByText('Solutions About Us Services Products Locations Admin Page home about contact')).toBeVisible();
  await expect(page.locator('#rightPanel')).toContainText('ATM Services');
  await expect(page.locator('#rightPanel')).toContainText('Online Services');
  await page.close();
});