// Post-build SEO step (runs after `vite build`):
//  • writes a real HTML file for every route with its own <title>, description, canonical,
//    Open Graph / Twitter tags and JSON-LD — so crawlers and link previews never depend on JS
//  • adds a lightweight content shell (H1, summary, links) that React replaces on load
//  • writes 404.html (noindex) and sitemap.xml (dist + public, kept in sync with routes.json)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const seo = JSON.parse(readFileSync(join(root, 'src/seo/routes.json'), 'utf8'));
const { globalSchema, routeSchema } = await import(pathToFileURL(join(root, 'src/seo/schema.js')).href);

const SITE = seo.site;
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const ld = (obj, attrs = '') => `<script type="application/ld+json"${attrs}>${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
const urlFor = (path) => SITE + (path === '/' ? '/' : path);

const setMeta = (html, attr, key, value) => {
  const re = new RegExp(`(<meta\\s+${attr}="${key.replace(/[:]/g, '\\:')}"\\s+content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`meta ${attr}=${key} not found in template`);
  return html.replace(re, `$1${esc(value)}$2`);
};

const shell = (route) => {
  const links = seo.routes.map((r) => `<a href="${r.path}">${esc(r.name)}</a>`).join(' · ');
  return (
    `<main class="gutter" style="padding-top:140px;padding-bottom:80px">` +
    `<p class="t-label" style="margin-bottom:24px">Abdulrasaq Alatare</p>` +
    `<h1 class="t-display" style="margin-bottom:24px">${esc(route.h1 || 'Abdulrasaq Alatare')}</h1>` +
    `<p class="t-body" style="max-width:40ch;margin-bottom:40px">${esc(route.description)}</p>` +
    `<nav class="t-label" aria-label="Site index">${links}</nav>` +
    `</main>`
  );
};

const render = (route) => {
  const url = urlFor(route.path);
  const image = SITE + (route.image || seo.defaultImage);
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(route.title)}</title>`);
  html = setMeta(html, 'name', 'title', route.title);
  html = setMeta(html, 'name', 'description', route.description);
  html = setMeta(html, 'property', 'og:url', url);
  html = setMeta(html, 'property', 'og:title', route.title);
  html = setMeta(html, 'property', 'og:description', route.description);
  html = setMeta(html, 'property', 'og:image', image);
  html = setMeta(html, 'name', 'twitter:url', url);
  html = setMeta(html, 'name', 'twitter:title', route.title);
  html = setMeta(html, 'name', 'twitter:description', route.description);
  html = setMeta(html, 'name', 'twitter:image', image);
  if (route.image) {
    html = setMeta(html, 'property', 'og:image:height', '960');
    html = setMeta(html, 'property', 'og:image:width', '1280');
    html = setMeta(html, 'property', 'og:image:alt', `${route.name} — live website`);
  }
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`);
  html = html.replace('<!--seo:global-jsonld-->', ld(globalSchema(SITE), ' data-seo="global"'));
  html = html.replace('<!--seo:route-jsonld-->', ld(routeSchema(route, SITE, seo.defaultImage), ' id="route-jsonld"'));
  html = html.replace('<!--seo:shell-->', shell(route));
  return html;
};

for (const route of seo.routes) {
  const file = route.path === '/' ? join(dist, 'index.html') : join(dist, route.path.slice(1), 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, render(route));
}

// 404 — served by Vercel with a real 404 status for unknown paths; React renders the NotFound page
const notFound = render({
  ...seo.routes[0],
  path: '/404',
  h1: 'Page not found',
  title: 'Page not found — Abdulrasaq Alatare',
  description: 'This page does not exist. Head back to the portfolio of Abdulrasaq Alatare.',
})
  .replace(/<meta name="robots" content="[^"]*"\s*\/>/, '<meta name="robots" content="noindex, follow" />')
  .replace(/<link rel="canonical"[^>]*\/>\s*/, '')
  .replace(/<script type="application\/ld\+json" id="route-jsonld">[\s\S]*?<\/script>/, '');
writeFileSync(join(dist, '404.html'), notFound);

// Sitemap (with image entries for the case-study screenshots and the share image)
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
  seo.routes
    .map((r) => {
      const img = SITE + (r.image || seo.defaultImage);
      return (
        `  <url>\n    <loc>${urlFor(r.path)}</loc>\n    <lastmod>${seo.lastmod}</lastmod>\n` +
        `    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n` +
        `    <image:image><image:loc>${img}</image:loc></image:image>\n  </url>`
      );
    })
    .join('\n') +
  `\n</urlset>\n`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);
writeFileSync(join(root, 'public', 'sitemap.xml'), sitemap);

console.log(`seo-build: ${seo.routes.length} pages + 404.html + sitemap.xml (${seo.routes.length} URLs)`);
