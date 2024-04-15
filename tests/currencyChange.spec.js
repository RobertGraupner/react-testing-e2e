import { test, expect } from '@playwright/test';

test('Test zmiany waluty', async ({ page }) => {
	await page.goto('http://localhost:5173/');
	const currencySelector = page.getByRole('combobox');

	await expect(currencySelector).toHaveValue('PLN');
	await expect(page.getByRole('link', { name: 'Szpilki 49zł' })).toBeVisible();

	await currencySelector.selectOption('USD');

	await expect(currencySelector).toHaveValue('USD');
	await expect(page.getByRole('link', { name: 'Szpilki 10$' })).toBeVisible();

	await page.reload();

	await expect(currencySelector).toHaveValue('USD');
	await expect(page.getByRole('link', { name: 'Szpilki 10$' })).toBeVisible();
});
