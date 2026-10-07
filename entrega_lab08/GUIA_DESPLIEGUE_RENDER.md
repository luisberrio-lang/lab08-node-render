# Guía exacta de despliegue en Render

## Requisito previo

El repositorio de GitHub debe contener este proyecto en la rama `main`. No crear servicios duplicados: antes de continuar, revisar el Dashboard de Render y reutilizar los servicios `lab08-despliegue01` y `lab08-portafolio-luis` si ya existen.

## Servicio 1 — ejemplo despliegue01

- Tipo: **Web Service**
- Repositorio: **la URL de GitHub que se añadirá como remoto `origin`**
- Branch: `main`
- Root Directory: `despliegue01`
- Runtime: `Node`
- Build Command: `yarn install --frozen-lockfile`
- Start Command: `yarn start`
- Instance Type: `Free`
- Health Check Path: `/`
- Variables de entorno: **ninguna obligatoria**
- No crear `PORT`: Render la proporciona automáticamente.
- Nombre sugerido: `lab08-despliegue01`

## Servicio 2 — tarea: portafolio

- Tipo: **Web Service**
- Repositorio: **el mismo repositorio del Servicio 1**
- Branch: `main`
- Root Directory: `proyecto-anterior`
- Runtime: `Node`
- Build Command: `yarn install --frozen-lockfile`
- Start Command: `yarn start`
- Instance Type: `Free`
- Health Check Path: `/health`
- Variables de entorno: **ninguna obligatoria**
- No crear `PORT`: Render la proporciona automáticamente.
- Nombre sugerido: `lab08-portafolio-luis`

## Comprobación de logs

En cada servicio, abrir **Logs** y comprobar que aparecen, según corresponda:

- `Servidor activo en http://localhost:<puerto>`
- `Portafolio activo en http://localhost:<puerto>`
- Un estado final de despliegue disponible (`Live` / deploy exitoso).

## Capturas reales requeridas

### 04_github.png

Abrir la página principal del repositorio, seleccionar la rama `main` y dejar visibles la URL, la rama y estos elementos: `despliegue01`, `proyecto-anterior`, `render.yaml` y `README.md`.

### 05_render.png

Crear una composición legible con dos capturas reales:

1. Pantalla **Settings** de uno de los servicios con Root Directory, Build Command y Start Command visibles.
2. Pantalla **Logs** con el nombre del servicio, estado `Live` y líneas de arranque exitoso visibles.

### 06_tarea_publicada.png

Abrir la URL pública de `lab08-portafolio-luis` en una ventana de escritorio. Mantener visible la barra de direcciones completa y la sección principal con “Hola, soy Luis”, “Diseño y Desarrollo de Software” y el botón “Ver proyectos”.

No recortar la URL ni ocultar el dominio `onrender.com`. No usar capturas locales para sustituir evidencia de producción.
