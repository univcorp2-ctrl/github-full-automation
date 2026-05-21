import { expect, test } from '@playwright/test';

test('dashboard displays report and CSV link', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'GitHub Full Automation' })).toBeVisible();
  await expect(page.getByRole('table', { name: 'latest reports' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Excel用CSV' })).toHaveAttribute('href', '/api/export.csv');
});

test('API health returns ok', async ({ request }) => {
  const response = await request.get('/api/health');
  expect(response.ok()).toBe(true);
  expect((await response.json()).ok).toBe(true);
});
