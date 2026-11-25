export async function crearTarea(page, titulo) {

  const entrada = page.getByPlaceholder('What needs to be done?');

  await entrada.fill(titulo);

  await entrada.press('Enter');
  
}