# Descripciones de capturas — Laboratorio 08

## 1. Código principal del servidor

El archivo `index.js` configura dotenv, crea una respuesta HTTP con código 200, obtiene el puerto desde `process.env.PORT` y arranca el servidor escuchando en todas las interfaces para permitir el despliegue.

## 2. Configuración del proyecto

El archivo `package.json` incluye los scripts `dev`, `start` y `test`, junto con las dependencias dotenv y Nodemon. El `.gitignore` excluye `node_modules` y los archivos `.env`, evitando publicar secretos.

## 3. Prueba local y Git

La aplicación `despliegue01` responde correctamente en `localhost:3000`. A la derecha se observa la ejecución mediante Yarn, la rama `main` y los tres commits reales que documentan la construcción del laboratorio.

## 4. Repositorio en GitHub

El repositorio público `luisberrio-lang/lab08-node-render` muestra en la rama `main` los proyectos `despliegue01` y `proyecto-anterior`, el archivo `render.yaml`, el README actualizado y el historial de commits.

## 5. Despliegue en Render

La configuración de los dos Web Services y sus registros confirman la instalación con Yarn, el arranque mediante `yarn start` y la finalización exitosa del despliegue.

## 6. Tarea: portafolio publicado

El portafolio profesional de Luis Washington Berrio Valencia funciona desde su dirección pública y muestra su interfaz responsive, navegación y presentación principal. Se creó como proyecto nuevo porque no se encontró el proyecto web de CV de la semana 2; su contenido parte del CV real disponible.
