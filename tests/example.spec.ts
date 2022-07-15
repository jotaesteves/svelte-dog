import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');
  const title = page.locator('body main h1');
  await expect(title).toHaveText('Vite + Svelte + TailwindCss');
});