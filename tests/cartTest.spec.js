import { test, expect } from '@playwright/test';

test('Test dodawania produktu do koszyka', async ({ page }) => {
	await page.goto('http://localhost:5173/');
	await page.goto('http://localhost:5173/kobieta');
	await page.getByRole('link', { name: 'Odzież' }).click();
	await page.getByRole('link', { name: 'Obuwie' }).nth(1).click();
	await page.getByRole('link', { name: 'Szpilki 49zł' }).first().click();
	await page.getByRole('button', { name: 'Dodaj do koszyka' }).click();
	await page.getByRole('link', { name: '2' }).click();
	await expect(
		page
			.locator('div')
			.filter({ hasText: /^Test producent Szpilki49złCena: 49złUsuń$/ })
			.nth(1)
	).toBeVisible();
});
