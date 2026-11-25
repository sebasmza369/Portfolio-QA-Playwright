import { test, expect } from '@playwright/test';

import { crearTarea } from '../../helpers/tareas.js';

import { abrirTodoMVC } from '../../helpers/navegacion.js';

test.beforeEach(async ({ page }) => {

  await abrirTodoMVC(page);

});

test('PF-01: Añadir dos tareas @smoke', async ({ page }) => {

  await crearTarea(page, 'SQL');
  await crearTarea(page, 'Postman');

  const titulos = page.locator('.todo-list li label');

  await expect(titulos).toHaveCount(2);

  await expect(titulos).toHaveText(['SQL', 'Postman']);

});

test('PF-02: Rechazar una tarea con espacios', async ({ page }) => {

  await crearTarea(page, '   ');

  const tareas = page.locator('.todo-list li');

  await expect(tareas).toHaveCount(0);

});