#!/usr/bin/env node
/**
 * Crawls the built site in dist/ and verifies every link resolves.
 *
 *   npm run check:links      (runs a build first)
 *
 * Checks internal pages exist, #anchors point at a real element id on the
 * target page, and tel: links are dialable. Exits non-zero if anything breaks,
 * so it can gate a deploy.
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'fs';
import { join } from 'path';

// The Vercel adapter emits pages to dist/client. Plain static builds use dist.
const DIST = existsSync('dist/client') ? 'dist/client' : 'dist';

if (!existsSync(DIST)) {
  console.error('No build output found. Run `npm run build` first.');
  process.exit(1);
}

const pages = [];
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p);
    else if (entry.endsWith('.html')) pages.push(p);
  }
})(DIST);

const urlOf = (file) =>
  '/' + file.replace(DIST + '/', '').replace(/index\.html$/, '').replace(/\/$/, '');

// Inline scripts contain template literals that look like markup. Strip them
// before scanning, or every `<a href="${...}">` inside JS reads as a broken link.
const stripScripts = (html) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');

const idsByUrl = new Map();
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  idsByUrl.set(
    urlOf(file) || '/',
    new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))
  );
}

const resolves = (path) => {
  const clean = path.replace(/\/$/, '');
  return (
    existsSync(join(DIST, clean, 'index.html')) ||
    existsSync(join(DIST, clean)) ||
    (clean === '' && existsSync(join(DIST, 'index.html')))
  );
};

const problems = [];
const counts = { internal: 0, anchor: 0, tel: 0, external: 0 };

for (const file of pages) {
  const from = urlOf(file) || '/';
  const html = stripScripts(readFileSync(file, 'utf8'));

  for (const match of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
    const href = match[1];

    if (href.startsWith('tel:')) {
      counts.tel++;
      if (!/^tel:\+?\d{7,}$/.test(href)) problems.push([from, href, 'not a dialable number']);
      continue;
    }
    if (/^(https?:|mailto:)/.test(href)) {
      counts.external++;
      continue;
    }

    const [path, hash] = href.split('#');

    if (path !== '') {
      counts.internal++;
      if (!resolves(path)) {
        problems.push([from, href, 'no such page in the build']);
        continue;
      }
    }
    if (hash) {
      counts.anchor++;
      const target = (path === '' ? from : path).replace(/\/$/, '') || '/';
      const ids = idsByUrl.get(target);
      if (!ids) problems.push([from, href, `target page ${target} not found`]);
      else if (!ids.has(hash)) problems.push([from, href, `no id="${hash}" on ${target}`]);
    }
  }
}

console.log(`Crawled ${pages.length} pages`);
console.log(
  `  ${counts.internal} internal  ${counts.anchor} anchors  ` +
    `${counts.tel} tel  ${counts.external} external`
);

if (!problems.length) {
  console.log('\nAll links resolve.');
  process.exit(0);
}

console.log(`\n${problems.length} broken:`);
for (const [from, href, why] of problems) {
  console.log(`  on ${from}\n    ${href}\n    ${why}`);
}
process.exit(1);
