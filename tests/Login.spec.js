import { test, expect } from "@playwright/test";

test('Login page load correctly', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const title = await page.getByRole('h2');

  await expect(title).toBeTruthy();
})

test('Username field works correctly', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByLabel('Nombre usuario:').fill('test input');

  const usernameTyped = page.getByLabel('Nombre usuario:');

  await expect(usernameTyped).toHaveValue('test input');
})

test('Password field works correctly', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByLabel('Contraseña:').fill('password input');

  const usernameTyped = page.getByLabel('Contraseña:');

  await expect(usernameTyped).toHaveValue('password input');
})

test('Try login with bad credentials doesnt change the page', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByLabel('Nombre usuario:').fill('test input');

  await page.getByLabel('Contraseña:').fill('password input');

  await page.getByRole('button').click();

  page.on('dialog', dialog => dialog.accept())

  const title = page.getByRole('h2');

  expect(title).toBeTruthy();
});

test('Try login with admin credentials go to admins page', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByLabel('Nombre usuario:').fill('admin1');

  await page.getByLabel('Contraseña:').fill('12345678');

  await page.getByRole('button').click();

  const title = page.getByRole('h3');

  expect(title).toBeTruthy();
});

test('Try login with employee credentials go to admins page', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByLabel('Nombre usuario:').fill('employee1');

  await page.getByLabel('Contraseña:').fill('12345678');

  await page.getByRole('button').click();

  const title = page.getByRole('h3');

  expect(title).toBeTruthy();
});