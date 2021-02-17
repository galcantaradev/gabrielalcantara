const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

const toUrl = (page = '') => {
  const route = page
    .replace('pages/', '')
    .replace(/\.(md|tsx)/, '')
    .replace(/\/?index/g, '');

  return `
    <url>
        <loc>${`https://gabrielalcantara.com.br/${route}`}</loc>
    </url>
  `;
};

const siteMap = (pages = []) => {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages.map(toUrl).join('')}
    </urlset>
  `;
};

const formatted = (map = '') => prettier.format(map, { parser: 'html' });

const generateSiteMap = async () => {
  const pages = await globby([
    'pages/**/*.tsx',
    'blog/*.md',
    '!pages/_*.tsx',
    '!pages/404.tsx',
    '!pages/**/[id].tsx'
  ]);

  fs.writeFileSync('public/sitemap.xml', formatted(siteMap(pages)), {
    encoding: 'utf-8'
  });
};

generateSiteMap();
