# Guion de video — máximo 4 minutos

## 0:00–0:25 | Presentación

“En este laboratorio implementé el despliegue de dos aplicaciones Node.js: el ejemplo `despliegue01` y un portafolio profesional basado en mi CV. No encontré el proyecto web de CV de semana 2, por lo que el portafolio se creó como proyecto nuevo y se documentó de manera transparente.”

## 0:25–1:10 | Código principal

“En `index.js` cargo dotenv para leer variables de entorno. Creo el servidor con el módulo HTTP y envío una respuesta 200 en formato HTML. El puerto se obtiene de `process.env.PORT`; si no existe, localmente usa 3000. El servidor escucha en `0.0.0.0`, requisito importante en producción.”

## 1:10–1:50 | Configuración y seguridad

“En `package.json`, `yarn dev` ejecuta Nodemon durante el desarrollo, `yarn start` usa Node en producción y `yarn test` ejecuta la prueba. Dotenv es dependencia de producción y Nodemon de desarrollo. `.gitignore` excluye `node_modules` y `.env`, por lo que ningún secreto se publica. `yarn.lock` asegura instalaciones reproducibles.”

## 1:50–2:25 | Prueba y Git

“Aquí se observa la aplicación funcionando localmente y la terminal mostrando Yarn. La rama activa es `main`. Los commits separan el servidor inicial, la configuración y la adaptación del proyecto anterior.”

## 2:25–3:05 | GitHub y Render

“El repositorio contiene ambos proyectos y `render.yaml`. En Render configuré dos Web Services gratuitos, cada uno con su directorio raíz, `yarn install --frozen-lockfile` como comando de construcción y `yarn start` como comando de inicio. Los logs confirman que el despliegue finalizó correctamente.”

## 3:05–3:40 | Tarea final

“Para la tarea desarrollé un portafolio de Luis Washington Berrio Valencia con las secciones Inicio, Sobre mí, Habilidades, Proyectos y Contacto. Es responsive y usa HTML, CSS y JavaScript servido por Express. Los proyectos y canales de contacto mostrados están respaldados por archivos locales o por el CV. No incorporé foto, niveles porcentuales ni un formulario de envío inexistente. Esta es la interfaz funcionando desde la URL pública.”

## 3:40–4:00 | Cierre

“Concluyo que la combinación de variables de entorno, Yarn, GitHub y Render permite trasladar una aplicación local a producción de forma segura y reproducible. También comprobé las rutas y las URL públicas antes de considerar terminada la entrega.”
