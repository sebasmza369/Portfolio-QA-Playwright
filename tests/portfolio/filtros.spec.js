import { test, expect } from '@playwright/test';

import { crearTarea } from '../../helpers/tareas.js';

import { abrirTodoMVC } from '../../helpers/navegacion.js';

test.beforeEach(async ({ page }) => {

  await abrirTodoMVC(page);

  await crearTarea(page, 'SQL');
  await crearTarea(page, 'Postman');

  const tareaPostman = page.locator('.todo-list li')
    .filter({ hasText: 'Postman' });

  await tareaPostman.locator('.toggle').click();

});

test('PF-03: Comprobar los filtros de tareas @smoke', async ({ page }) => {

  const visibles = page.locator('.todo-list li:visible label');

  // FILTRO ACTIVE
  await test.step('Active: mostrar solo las tareas pendientes', async () => {

    await page.getByRole('link', { name: 'Active' }).click();

    await expect(visibles).toHaveCount(1);

    await expect(visibles).toHaveText('SQL');

  });
  
  // FILTRO COMPLETED
  await test.step('Completed: mostrar las tareas completadas', async () => {

    await page.getByRole('link', { name: 'Completed' }).click();

    await expect(visibles).toHaveCount(1);

    await expect(visibles).toHaveText('Postman');

  });

  // FILTRO ALL
  await test.step('All: mostrar todas las tareas', async () => {

    await page.getByRole('link', { name: 'All' }).click();

    await expect(visibles).toHaveCount(2);

    await expect(visibles).toHaveText(['SQL', 'Postman']);  

  });  

});