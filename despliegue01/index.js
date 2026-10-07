require('dotenv').config();

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Despliegue 01</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:system-ui;background:#071426;color:#e8f2ff}.card{max-width:720px;padding:48px;border:1px solid #26496d;border-radius:24px;background:linear-gradient(145deg,#102a45,#0a1c30);box-shadow:0 24px 70px #0008}span{color:#65d6ad}h1{font-size:clamp(2.4rem,7vw,5rem);margin:0 0 12px}p{font-size:1.15rem;line-height:1.7;color:#b8cbe0}.ok{display:inline-block;padding:8px 14px;border-radius:999px;background:#153e36;color:#72e6bc;font-weight:700}</style></head>
<body><main class="card"><div class="ok">● SERVICIO ACTIVO</div><h1>Despliegue <span>01</span></h1><p>Servidor HTTP de Node.js configurado con <strong>dotenv</strong> y el puerto dinámico de <strong>process.env.PORT</strong>.</p></main></body>
</html>`);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
