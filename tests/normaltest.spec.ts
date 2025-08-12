import {test,expect,chromium,firefox} from '@playwright/test';
test('has title', async () => {
    const browser = await firefox.launch();
    const page = await browser.newPage();
  
    await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await browser.close();
  await page.close();
});