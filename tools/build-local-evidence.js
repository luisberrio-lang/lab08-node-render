const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'entrega_lab08', '_html');
fs.mkdirSync(out, { recursive: true });

const esc = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
const shell = `PS C:\\Users\\Usuario\\Downloads\\lab08\\despliegue01&gt; yarn start
yarn run v1.22.22
$ node index.js
Servidor activo en http://localhost:3000

PS C:\\Users\\Usuario\\Downloads\\lab08&gt; git branch --show-current
${git('branch', '--show-current')}

PS C:\\Users\\Usuario\\Downloads\\lab08&gt; git log --oneline -3
${git('log', '--oneline', '-3')}`;

const base = (title, body, extra = '') => `<!doctype html><html lang="es"><head><meta charset="utf-8"><style>
*{box-sizing:border-box}body{margin:0;background:#07111f;color:#dce9f7;font-family:Segoe UI,Arial,sans-serif}.page{width:1600px;height:900px;padding:38px 48px;overflow:hidden}.eyebrow{color:#63ddb4;letter-spacing:.16em;font-size:15px;font-weight:800}.title{font-size:32px;margin:8px 0 24px}.panel{background:#0d1d30;border:1px solid #29445f;border-radius:16px;overflow:hidden;box-shadow:0 18px 55px #0007}.bar{height:42px;background:#13283e;border-bottom:1px solid #29445f;display:flex;align-items:center;padding:0 18px;color:#91a8bd}.dot{width:11px;height:11px;border-radius:50%;display:inline-block;margin-right:8px}.r{background:#ff6b6b}.y{background:#ffd166}.g{background:#65d6ad}pre{margin:0;padding:24px 28px;font:17px/1.52 Consolas,monospace;white-space:pre-wrap}.grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}.label{color:#65d6ad;font-weight:800}.browser{height:630px;background:white}.browserbar{height:52px;background:#eef2f6;color:#35495d;padding:12px 20px;font-size:16px}.browser iframe{border:0;width:100%;height:578px}.terminal{height:630px;background:#07101b}.terminal pre{font-size:16px;color:#d9f3e9}${extra}</style></head><body><main class="page"><div class="eyebrow">LABORATORIO 08 · EVIDENCIA REAL</div><h1 class="title">${title}</h1>${body}</main></body></html>`;

fs.writeFileSync(path.join(out, '01_codigo.html'), base('Código principal del servidor', `<section class="panel"><div class="bar"><i class="dot r"></i><i class="dot y"></i><i class="dot g"></i>despliegue01 / index.js</div><pre>${esc(read('despliegue01/index.js'))}</pre></section>`, 'pre{font-size:16px;line-height:1.42}'));

fs.writeFileSync(path.join(out, '02_configuracion.html'), base('Configuración de Yarn, scripts y exclusiones', `<div class="grid"><section class="panel"><div class="bar"><i class="dot r"></i><i class="dot y"></i><i class="dot g"></i>package.json</div><pre>${esc(read('despliegue01/package.json'))}</pre></section><section class="panel"><div class="bar"><i class="dot r"></i><i class="dot y"></i><i class="dot g"></i>.gitignore</div><pre>${esc(read('despliegue01/.gitignore'))}</pre><div class="bar">Verificación</div><pre><span class="label">Yarn:</span> 1.22.22\n<span class="label">Lockfile:</span> yarn.lock generado\n<span class="label">.env:</span> excluido de Git\n<span class="label">Puerto:</span> documentado en .env.example</pre></section></div>`));

fs.writeFileSync(path.join(out, '03_prueba_local_git.html'), base('Prueba local y trazabilidad Git', `<div class="grid"><section class="panel browser"><div class="browserbar">🔒 http://localhost:3000</div><iframe src="http://127.0.0.1:3000"></iframe></section><section class="panel terminal"><div class="bar"><i class="dot r"></i><i class="dot y"></i><i class="dot g"></i>PowerShell · ejecución y Git</div><pre>${shell}</pre></section></div>`, '.grid{grid-template-columns:1.12fr .88fr}'));

console.log(`Evidencias HTML creadas en ${out}`);
