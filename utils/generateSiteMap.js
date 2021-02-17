const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

const toUrl = (page = '') => {
  const path = page
    .replace('pages/', '')
    .replace('.tsx', '')
    .replace('.md', '');

  const route = path.includes('index')
    ? path.replace('/index', '').replace('index', '')
    : path;

  console.log(route);

  return `
    <url>
        <loc>${`https://gabrielalcantara.com.br/${route}`}</loc>
    </url>
  `;
};

const toUrlSet = pages => {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages.map(toUrl).join('')}
    </urlset>
  `;
};

const formattedSiteMap = siteMap =>
  prettier.format(siteMap, { parser: 'html' });

const generateSiteMap = async () => {
  const pages = await globby([
    'pages/**/*.tsx',
    'blog/*.md',
    '!pages/_*.tsx',
    '!pages/404.tsx',
    '!pages/**/[id].tsx'
  ]);

  const siteMap = toUrlSet(pages);

  fs.writeFileSync('public/sitemap.xml', formattedSiteMap(siteMap), {
    encoding: 'utf-8'
  });
};

generateSiteMap();
