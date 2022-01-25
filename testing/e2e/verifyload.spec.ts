import { test, expect } from '@playwright/test';

test('basic test', async ({ page, baseURL}) => {
  await page.goto('/regmaschine.html');
   await page.click('text=Lade Beispiel');
  // Click input[type="text"]
  await page.click('input[type="text"]');
  // Fill input[type="text"]
  await page.fill('input[type="text"]', '5');
  // Click text=/.*\>\>.*/
  await page.click('text=/.*\\>\\>.*/');
  const locator = page.locator('id=outputValue');
  await expect(locator).toHaveText(/5/);
});
