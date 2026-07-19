import { test, expect } from '@playwright/test';

test("", async({ page }) => {
  await page.goto('https://4tech.qa.trippus.com/admin/user-login');
  await page.getByRole('textbox', { name: 'Enter the email' }).click();
  await page.getByRole('textbox', { name: 'Enter the email' }).fill('chamalka+tech123@calcey.com');
  await page.getByRole('textbox', { name: 'Enter the password' }).click();
  await page.getByRole('textbox', { name: 'Enter the password' }).fill('Ch@12345');
  await page.getByRole('button', { name: 'Log in' }).click();
});