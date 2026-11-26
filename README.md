
# Espacio QA Automation

## Descripción

Este proyecto contiene pruebas automatizadas desarrolladas con Playwright y JavaScript sobre TodoMVC, una aplicación web de demostración disponible en:
[TodoMVC](https://demo.playwright.dev/todomvc/)

## Casos

He probado varios casos de comprobación de tareas, tales como entradas vacías, entradas con espacios, cantidad de tareas y orden de los elementos.

## Ejecución

El comando para ejecutar las pruebas es: npx playwright test --project=chromium

## Instalación

Para instalar y ejecutar las pruebas, abre una terminal
en la carpeta principal del proyecto.

1. Instalar las dependencias:

   ```bash
   npm ci
   ```

2. Instalar Chromium:
 
   ```bash
   npx playwright install chromium
   ```

3. Ejecutar las pruebas: 

    ```bash
    npx playwright test tests/clase52-modulos.spec.js --project=chromium
    ```

## Suite de portafolio

En la carpeta tests/portfolio/ he organizado tres casos automatizados: creación de tareas, rechazo de entradas con espacios y comprobación de los filtros Active, Completed y All.
El comando para ejecutarlos es: npx playwright test tests/portfolio --project=chromium

## Navegadores probados

En la carpeta tests/portfolio/ he probado los diferentes navegadores, 

1. Chromium con el comando: 

   ```bash 
   npx playwright test tests/portfolio --project=chromium
   ```

2. Firefox con el comando: 

   ```bash
   npx playwright test tests/portfolio --project=firefox
   ```

He recibido 8 Passed con Chromium y 6 Passed y 2 Failed con Firefox. 

## Pruebas Smoke

Las pruebas Smoke me han ayudado a comprobar rápidamente algunas funcionalidades esenciales en los test PF-01 y PF-03. A través de la etiqueta @smoke he podido seleccionar estos tests y ejecutarlos a través de: 
```bash
npx playwright test tests/portfolio --project=chromium --grep "@smoke"
```
y así obtener las evidencias de que los test pasan sin probar toda la suite entera. La ejecución ha funcionado y he obtenido 2 passed.

## Integración continua

Este proyecto utiliza GitHub Actions para ejecutar automaticamente nuestras pruebas en workflows.

Las pruebas Smoke se ejecutan cuando github actions incial el workflows

Los resultados pueden consultarse en la pestaña Actions.
El informe HTML queda disponible como artefacto de la ejecución durante siete días.