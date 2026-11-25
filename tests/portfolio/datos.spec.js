
import { test, expect } from '@playwright/test';

import { crearTarea } from '../../helpers/tareas.js';

import { abrirTodoMVC } from '../../helpers/navegacion.js';

const titulosDePrueba = [
  'Aprender QA',
  'Repasar SQL',
  'Comprar pan'
];

for (const titulo of titulosDePrueba) {

  test(`PF-04: Añadir tarea "${titulo}"`, async ({ page }) => {

    await abrirTodoMVC(page);

    await crearTarea(page, titulo);

    const titulos = page.locator('.todo-list li label');

    await expect(titulos).toHaveCount(1);

    await expect(titulos).toHaveText(titulo);

  });

}

const entradasInvalidas = [
  { nombre: 'campo vacío', valor: '' },
  { nombre: 'tres espacios', valor: '   ' }
];

for (const caso of entradasInvalidas) {

  test(`PF-05: Rechazar ${caso.nombre}`, async ({ page }) => {

    await abrirTodoMVC(page);

    await crearTarea(page, caso.valor);

    const tareas = page.locator('.todo-list li');

    await expect(tareas).toHaveCount(0);

  });

}
