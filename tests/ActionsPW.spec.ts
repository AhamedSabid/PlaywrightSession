import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    const title = await page.title();
    expect(title).toBe('Register');

    await page.getByPlaceholder("First Name").click();
    await page.getByPlaceholder("First Name").pressSequentially("Ahamed");

    await page.goBack();

    await page.close();

});

test('Checkbox', async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');

    await page.locator(".rct-checkbox").click();
    expect(page.locator(".rct-checkbox")).toBeChecked();


    await page.close();

});

test('Drop down', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');

    const dropdown = await page.locator("#Skills");
    await dropdown.selectOption({ index: 5 });

    await page.close();
});

test('Upload files', async ({ page }) => {
    await page.goto('https://demoqa.com/upload-download');

    const fileInput = await page.locator("input[type='file']");
    await fileInput.setInputFiles('./tsconfig.json');
    await page.waitForTimeout(3000);
    await page.close();
});

test('Drop down with locator', async ({ page }) => {
    await page.goto('https://demoqa.com/droppable/');

    const source = page.locator('#draggable').first();
    const target = page.locator('#droppable').first();

    //await source.dragTo(target);
    await source.hover();
    await page.mouse.down();
    await source.hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);
    await page.close();
});