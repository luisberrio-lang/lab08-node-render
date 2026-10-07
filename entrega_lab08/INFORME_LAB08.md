# Informe del Laboratorio 08

## Despliegue de aplicaciones Node.js

### Objetivo

Preparar, versionar y desplegar una aplicación Node.js, y publicar además un portafolio profesional basado en el CV real del estudiante.

## Procedimiento realizado

1. Se revisó la guía `GLAB-S08-RUSNAYO-2026-02-Despliegue de aplicaciones con JWT.docx` y se identificaron los requisitos del procedimiento y de la tarea final.
2. Se buscó el proyecto web de CV de la semana 2. No se encontró dicho proyecto, pero sí el documento `curriculum vitae - Luis Washinton Berrio Valencia.docx` y su PDF. Por transparencia, el portafolio se creó como proyecto nuevo y no se presenta como trabajo recuperado de una semana anterior.
3. Se creó `despliegue01` con un servidor HTTP de Node.js. El código carga dotenv, entrega HTML con estado HTTP 200, usa `process.env.PORT || 3000` y escucha en `0.0.0.0`.
4. Se instaló Yarn 1.22.22 y se generaron los archivos `yarn.lock`. Se configuraron `dev`, `start` y `test`; Nodemon quedó como dependencia de desarrollo.
5. Se añadieron `.env.example` y `.gitignore`. El `.env` local y `node_modules` quedaron excluidos de Git.
6. Se construyó el portafolio personal de Luis Washington Berrio Valencia sobre la base Node/Express disponible. Incluye Inicio, Sobre mí, Habilidades, Proyectos y Contacto; frontend HTML/CSS/JavaScript, navegación accesible, animaciones discretas y diseño responsive.
7. Se mostraron solamente proyectos verificables en archivos locales: `despliegue01`, el sitio Express de semana 4 y LogiSmart, respaldado por el CV y una presentación disponible. Contacto usa únicamente correo y LinkedIn presentes en el CV; no existe formulario ficticio.
8. Se inicializó Git en la rama `main` y se añadieron commits separados para la construcción y configuración.
9. Se añadió `render.yaml` con dos Web Services independientes y plan gratuito.

## Resultados reales verificados

- `despliegue01`: HTTP 200 en `http://127.0.0.1:3000`; prueba automatizada aprobada.
- `proyecto-anterior`: portafolio nuevo con HTTP 200 en `/`, `/health`, `/styles.css`, `/script.js` y rutas internas; validación sintáctica aprobada.
- Responsive: revisión visual real en 1440×900 y 500×900; navegación, textos, botones y tarjeta principal se muestran sin recortes.
- Git: rama `main` con tres commits de implementación antes de la documentación final.
- Evidencia local: capturas 01, 02 y 03 generadas a 1600×900 y revisadas visualmente.
- Publicación: pendiente de acceso autenticado al navegador para GitHub y Render. Las URL y capturas 04–06 se incorporarán únicamente después de verificarlas en línea.

## Observaciones

- La guía muestra ejemplos antiguos sobre la rama `master`; se utilizó `main`, tal como exige el paso final del mismo procedimiento.
- Render asigna el puerto en tiempo de ejecución, por lo que ambos servidores usan `process.env.PORT` y escuchan en `0.0.0.0`.
- El archivo `.env` no se versionó ni se mostró en las evidencias; solo se publicó `.env.example` sin secretos.
- No apareció el proyecto web de CV de semana 2. El documento de CV sí estaba disponible y se utilizó como fuente; el portafolio se identifica correctamente como creación nueva.
- No se declarará concluido el laboratorio hasta comprobar ambas URL públicas y los logs exitosos.

## Conclusiones

1. El uso de un puerto dinámico permite que el mismo código funcione localmente y dentro de la infraestructura administrada de Render.
2. Los scripts diferenciados para desarrollo y producción evitan ejecutar Nodemon en el servidor publicado y hacen reproducible el arranque.
3. `.gitignore` es una medida esencial: impide subir dependencias reconstruibles y valores de entorno que podrían contener secretos.
4. La historia de Git en commits pequeños facilita verificar qué cambio incorporó el servidor, la configuración y el proyecto previo.
5. Una entrega de despliegue solo puede considerarse finalizada después de validar la respuesta pública y revisar los logs; la ejecución local por sí sola no prueba la publicación.
