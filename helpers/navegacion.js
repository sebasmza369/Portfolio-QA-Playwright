import { expect } from '@playwright/test';


export async function abrirTodoMVC(page) {

  await page.goto('https://demo.playwright.dev/todomvc/', {
    waitUntil: 'domcontentloaded'
  });

  await expect(page.getByPlaceholder('What needs to be done?')).toBeVisible();

}