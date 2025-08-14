import { test, expect } from '@playwright/test';

test('Drop down', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await expect(page).toHaveTitle('Register');

    const skillDropdown = page.locator('#Skills');
    //await skillDropdown.selectOption({label: 'iPhone'});
    await skillDropdown.selectOption({ index: 5 });
    //add wait
    await page.waitForTimeout(3000);
    await page.close();
});

test('Drag and Drop', async ({ page }) => {
    await page.goto('https://demoqa.com/droppable/');
    //await expect(page).toHaveTitle('Register');

    const source = page.locator('#draggable').first();
    const target = page.locator('#droppable').first();

    await source.dragTo(target);
    // await page.locator('#draggable').first().hover();
    // await page.mouse.down();
    //await page.locator('#droppable').first().hover();
    //await page.mouse.up();
    //add wait
    await page.waitForTimeout(3000);
    await page.close();
});

test('Press sequential', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    //give inline delay  below step

    //    await page.getByPlaceholder('First Name').pressSequentially('test@example.com');
    await page.getByPlaceholder('First Name').type('test@example.com', { delay: 100 });
    await page.waitForTimeout(3000);
    await page.close();

});

test('Window popups', async ({ page }) => {
    await page.goto('https://demoqa.com/browser-windows');
    await page.locator('#tabButton').click({ button: 'right' });
    const popupPromise = page.waitForEvent('popup');
    await page.locator('#tabButton').click();
    const popup = await popupPromise;
    // Interact with the new popup normally.
    //await popup.getByRole('button').click();
    console.log(await popup.title());
    //verify popup title and its visible
    //get text from an element
    console.log(await popup.locator('h1#sampleHeading').textContent());
    const headingText = await popup.locator('h1#sampleHeading').textContent();
    expect(headingText).toBe('This is a sample page');
    expect(popup.locator('#sampleHeading')).toBeVisible();

    console.log(await page.title());
    //close popup
    await popup.close();
    console.log(await page.title());
    await page.close();

});

test('File upload', async ({ page }) => {
    await page.goto('https://demoqa.com/upload-download');
    //upload file ../tsconfig.json to #uploadFile
    await page.locator('text=Book Store Application').scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await page.locator('#uploadFile').focus();
    await page.locator('#uploadFile').setInputFiles('./tsconfig.json');
    await page.waitForTimeout(3000);
    await page.close();
});

test('Checkbox', async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');
    await page.locator('.rct-checkbox').check();
    // Assert the checked state
    expect(page.locator('.rct-checkbox')).toBeChecked();
    await page.close();
});