import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { INITIAL_GLOBAL_SEO, INITIAL_SEO_PAGES } from '../src/types/seo.js';

const dist = path.resolve('dist');
const index = await readFile(path.join(dist, 'index.html'), 'utf8');
const pageContent = {
  '/': {
    heading: 'Big results do not need a bigger budget. They need the right target.',
    summary: 'The Internet Ads helps small business owners with market analysis, ad films, internet ads and branding.',
  },
  '/training': {
    heading: 'Learn the role companies are actually hiring for.',
    summary: 'Explore live client-brief training across career tracks, with placement support described on the Training Academy page.',
  },
  '/work': {
    heading: 'Work that moved numbers, not just impressions.',
    summary: 'Explore the agency’s portfolio of market analysis, ad films, branding and performance marketing case studies.',
  },
  '/reviews': {
    heading: 'What business owners say when the campaign runs.',
    summary: 'Read client reviews and testimonials about working with The Internet Ads.',
  },
  '/404': {
    heading: 'Page not found',
    summary: 'The requested page does not exist or may have moved.',
  },
};

const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const escapeJson = (value) => value.replace(/</g, '\\u003c');

function staticNavigation() {
  return '<nav aria-label="Primary"><a href="/">Home</a><a href="/work">Work &amp; case studies</a><a href="/reviews">Reviews</a><a href="/training">Training academy</a></nav>';
}

function renderSnapshot(route) {
  const content = pageContent[route];
  return `<main data-prerendered="true"><header><a href="/" aria-label="The Internet Ads home">The Internet Ads</a>${staticNavigation()}</header><article><h1>${escapeHtml(content.heading)}</h1><p>${escapeHtml(content.summary)}</p></article><footer>${staticNavigation()}</footer></main>`;
}

function headMarkup(page) {
  const image = page.ogImage || INITIAL_GLOBAL_SEO.defaultOgImage;
  const schema = page.structuredDataJson ? `<script id="seo-json-ld" type="application/ld+json">${escapeJson(page.structuredDataJson)}</script>` : '';
  return `<title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}">
    <meta name="robots" content="${escapeHtml(page.robotsDirective || 'index, follow')}">
    <link rel="canonical" href="${escapeHtml(page.canonical)}">
    <meta property="og:title" content="${escapeHtml(page.ogTitle || page.title)}">
    <meta property="og:description" content="${escapeHtml(page.ogDescription || page.description)}">
    <meta property="og:type" content="${escapeHtml(page.ogType || 'website')}">
    <meta property="og:url" content="${escapeHtml(page.canonical)}">
    <meta property="og:site_name" content="${escapeHtml(INITIAL_GLOBAL_SEO.siteName)}">
    <meta property="og:image" content="${escapeHtml(image)}">
    <meta name="twitter:card" content="${escapeHtml(page.twitterCard || 'summary_large_image')}">
    <meta name="twitter:title" content="${escapeHtml(page.ogTitle || page.title)}">
    <meta name="twitter:description" content="${escapeHtml(page.ogDescription || page.description)}">
    <meta name="twitter:image" content="${escapeHtml(image)}">
    ${schema}`;
}

function renderPage(route, page) {
  const withoutSeoTags = index
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta (?:name="description"|property="og:[^"]+"|name="twitter:[^"]+")[^>]*>/g, '')
    .replace(/\s*<meta name="robots"[^>]*>/g, '')
    .replace(/\s*<link rel="canonical"[^>]*>/g, '');
  return withoutSeoTags
    .replace('</head>', `${headMarkup(page)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${renderSnapshot(route)}</div>`);
}

for (const route of ['/', '/training', '/work', '/reviews']) {
  const output = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html');
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, renderPage(route, INITIAL_SEO_PAGES[route]));
}

const notFound = renderPage('/404', INITIAL_SEO_PAGES['/404']).replace('<script type="module" src="/src/main.jsx"></script>', '');
await writeFile(path.join(dist, '404.html'), notFound);
