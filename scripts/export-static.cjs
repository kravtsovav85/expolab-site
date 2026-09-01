// Render the same React pages for both static hosts; no separately edited HTML.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const root = path.resolve(__dirname, '..');
const release = process.argv[2];
if (!release || !path.isAbsolute(release)) throw new Error('Pass an absolute release directory');
function load(file) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
  const mod = { exports: {} };
  function imports(name) {
    if (name === 'next/link') return { __esModule: true, default: ({ children, ...props }) => React.createElement('a', props, children) };
    if (name === 'next/navigation') return { notFound() { throw new Error('Unknown page'); } };
    return require(name);
  }
  new Function('require', 'module', 'exports', js)(imports, mod, mod.exports);
  return mod.exports;
}
(async () => {
  const home = load('app/page.tsx');
  const detail = load('app/[slug]/page.tsx');
  const privacy = load('app/privacy/page.tsx');
  const pages = [['', home.default()], ['privacy', privacy.default()]];
  for (const { slug } of detail.generateStaticParams()) pages.push([slug, await detail.default({ params: Promise.resolve({ slug }) })]);
  const css = fs.readFileSync(path.join(root, 'app/globals.css'), 'utf8').replace("@import 'tailwindcss';", '');
  for (const [directory, base] of [[path.join(root, 'docs'), '/expolab-site'], [release, '']]) {
    fs.mkdirSync(directory, { recursive: true });
    fs.writeFileSync(path.join(directory, 'style.css'), css);
    for (const asset of ['favicon.svg', 'og.png']) fs.copyFileSync(path.join(root, 'public', asset), path.join(directory, asset));
    for (const [slug, node] of pages) {
      const body = renderToStaticMarkup(node).replace(/href="\/(?!\/)([^"#]*)(#[^"]*)?"/g, (_, route, hash = '') => `href="${base}/${route}${route && !route.endsWith('/') ? '/' : ''}${hash}"`);
      const title = slug ? `ExpoLab — ${slug === 'economics' ? 'экономика подключения' : slug === 'privacy' ? 'политика конфиденциальности' : slug === 'products' ? 'продукты и тарифы' : slug === 'markets' ? 'рынки' : slug === 'legal' ? 'реквизиты' : slug === 'contact' ? 'контакты' : slug === 'process' ? 'подключение' : 'экспортная инфраструктура'}` : 'ExpoLab — готовая экспортная инфраструктура';
      const html = `<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="description" content="Выход товарных брендов на новые рынки через действующую инфраструктуру ExpoLab."><link rel="stylesheet" href="${base}/style.css?v=20260901-compact"><link rel="icon" href="${base}/favicon.svg"><meta property="og:title" content="${title}"><meta property="og:image" content="https://explb.pro/og.png"></head><body>${body}</body></html>`;
      fs.mkdirSync(path.join(directory, slug), { recursive: true });
      fs.writeFileSync(path.join(directory, slug, 'index.html'), html);
    }
  }
  console.log(`Rendered ${pages.length} pages to docs and ${release}`);
})();
