import {
  INITIAL_SEO_PAGES,
  INITIAL_GLOBAL_SEO,
  INITIAL_HISTORY
} from "../types/seo";
const STORAGE_KEY = "the_internet_ads_seo_data_v1";
class SeoService {
  state;
  listeners = /* @__PURE__ */ new Set();
  constructor() {
    this.state = this.loadState();
  }
  loadState() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return {
          pages: { ...INITIAL_SEO_PAGES, ...parsed.pages },
          global: { ...INITIAL_GLOBAL_SEO, ...parsed.global },
          history: parsed.history || INITIAL_HISTORY
        };
      }
    } catch {
    }
    return {
      pages: INITIAL_SEO_PAGES,
      global: INITIAL_GLOBAL_SEO,
      history: INITIAL_HISTORY
    };
  }
  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch {
    }
    this.notify();
  }
  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
  notify() {
    this.listeners.forEach((fn) => fn());
  }
  getState() {
    return this.state;
  }
  getPage(path) {
    return this.state.pages[path] || this.state.pages["/"];
  }
  updatePage(page, user = "Admin") {
    const oldPage = this.state.pages[page.path];
    this.state.pages[page.path] = page;
    const changes = [];
    if (oldPage) {
      if (oldPage.title !== page.title) changes.push(`Title changed from "${oldPage.title.slice(0, 20)}..." to "${page.title.slice(0, 20)}..."`);
      if (oldPage.description !== page.description) changes.push("Description updated");
      if (oldPage.canonical !== page.canonical) changes.push(`Canonical changed to "${page.canonical}"`);
      if (oldPage.robotsDirective !== page.robotsDirective) changes.push(`Robots directive set to "${page.robotsDirective}"`);
    } else {
      changes.push(`Page ${page.path} configured`);
    }
    const historyItem = {
      id: "hist-" + Date.now(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").substring(0, 19) + " UTC",
      action: `Updated metadata for ${page.pageName || page.path}`,
      details: changes.length > 0 ? changes.join("; ") : "Metadata saved",
      user
    };
    this.state.history.unshift(historyItem);
    if (this.state.history.length > 100) {
      this.state.history = this.state.history.slice(0, 100);
    }
    this.saveState();
  }
  updateGlobal(global, user = "Admin") {
    this.state.global = global;
    const historyItem = {
      id: "hist-" + Date.now(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").substring(0, 19) + " UTC",
      action: "Updated Global SEO Settings",
      details: `Site URL: ${global.siteUrl}, GSC verification updated`,
      user
    };
    this.state.history.unshift(historyItem);
    this.saveState();
  }
  resetToDefaults(user = "Admin") {
    this.state = {
      pages: INITIAL_SEO_PAGES,
      global: INITIAL_GLOBAL_SEO,
      history: [
        {
          id: "reset-" + Date.now(),
          timestamp: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").substring(0, 19) + " UTC",
          action: "Reset SEO to Defaults",
          details: "All page metadata, canonicals, and Schema.org structures restored to canonical baseline.",
          user
        },
        ...this.state.history
      ]
    };
    this.saveState();
  }
  // Auditing helper
  runAudit() {
    const issues = [];
    const titles = /* @__PURE__ */ new Map();
    const descriptions = /* @__PURE__ */ new Map();
    const pages = Object.values(this.state.pages);
    for (const page of pages) {
      if (!page.title || page.title.trim().length === 0) {
        issues.push({
          id: `title-empty-${page.path}`,
          path: page.path,
          type: "error",
          title: "Missing Page Title",
          message: `${page.pageName} does not have a <title> specified.`
        });
      } else {
        if (page.title.length < 30) {
          issues.push({
            id: `title-short-${page.path}`,
            path: page.path,
            type: "warning",
            title: "Short Title Tag",
            message: `${page.pageName} title is only ${page.title.length} characters (recommended 40-60).`
          });
        } else if (page.title.length > 65) {
          issues.push({
            id: `title-long-${page.path}`,
            path: page.path,
            type: "warning",
            title: "Title May Be Truncated in SERP",
            message: `${page.pageName} title is ${page.title.length} characters (standard pixel limit is ~60 chars).`
          });
        }
        if (titles.has(page.title)) {
          issues.push({
            id: `title-dup-${page.path}`,
            path: page.path,
            type: "error",
            title: "Duplicate Title Tag",
            message: `Identical title matches ${titles.get(page.title)}: "${page.title}"`
          });
        } else {
          titles.set(page.title, page.path);
        }
      }
      if (!page.description || page.description.trim().length === 0) {
        issues.push({
          id: `desc-empty-${page.path}`,
          path: page.path,
          type: "error",
          title: "Missing Meta Description",
          message: `${page.pageName} has no meta description set.`
        });
      } else {
        if (page.description.length < 70) {
          issues.push({
            id: `desc-short-${page.path}`,
            path: page.path,
            type: "warning",
            title: "Short Meta Description",
            message: `${page.pageName} description is only ${page.description.length} characters (recommended 120-160).`
          });
        } else if (page.description.length > 165) {
          issues.push({
            id: `desc-long-${page.path}`,
            path: page.path,
            type: "info",
            title: "Meta Description Exceeds Standard Length",
            message: `${page.pageName} description is ${page.description.length} chars (Google typically snippets to ~155-160).`
          });
        }
        if (descriptions.has(page.description)) {
          issues.push({
            id: `desc-dup-${page.path}`,
            path: page.path,
            type: "warning",
            title: "Duplicate Meta Description",
            message: `Matches description on ${descriptions.get(page.description)}`
          });
        } else {
          descriptions.set(page.description, page.path);
        }
      }
      if (!page.canonical || !page.canonical.startsWith("http")) {
        issues.push({
          id: `canonical-invalid-${page.path}`,
          path: page.path,
          type: "error",
          title: "Invalid or Missing Canonical URL",
          message: `${page.pageName} canonical URL is not an absolute HTTPS URL.`
        });
      }
      if (!page.ogImage) {
        issues.push({
          id: `og-img-missing-${page.path}`,
          path: page.path,
          type: "warning",
          title: "Missing Social Share Card Image (og:image)",
          message: `${page.pageName} has no dedicated og:image; falling back to global image.`
        });
      }
      if (page.structuredDataJson) {
        try {
          const parsed = JSON.parse(page.structuredDataJson);
          if (!parsed["@context"] && !parsed["@graph"]) {
            issues.push({
              id: `schema-missing-context-${page.path}`,
              path: page.path,
              type: "warning",
              title: "Schema.org Missing @context",
              message: `${page.pageName} JSON-LD object does not define "@context": "https://schema.org"`
            });
          }
        } catch {
          issues.push({
            id: `schema-invalid-json-${page.path}`,
            path: page.path,
            type: "error",
            title: "Invalid JSON-LD Syntax",
            message: `${page.pageName} contains malformed JSON in structured data.`
          });
        }
      } else {
        issues.push({
          id: `schema-none-${page.path}`,
          path: page.path,
          type: "info",
          title: "No Structured Data",
          message: `${page.pageName} does not have Schema.org JSON-LD configured.`
        });
      }
      if (page.robotsDirective.includes("noindex")) {
        issues.push({
          id: `robots-noindex-${page.path}`,
          path: page.path,
          type: "warning",
          title: 'Page Marked as "noindex"',
          message: `${page.pageName} is instructing search engines NOT to index this page.`
        });
      }
    }
    return issues;
  }
  // Generate dynamic sitemap.xml
  generateSitemapXml() {
    const urls = Object.values(this.state.pages).filter((p) => p.inSitemap).map(
      (p) => `  <url>
    <loc>${p.canonical}</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}</lastmod>
    <changefreq>${p.changefreq || "weekly"}</changefreq>
    <priority>${p.priority || "0.8"}</priority>
  </url>`
    ).join("\n");
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
  }
  // Generate dynamic robots.txt
  generateRobotsTxt() {
    return this.state.global.robotsTxtCustom;
  }
}
const seoService = new SeoService();
export {
  seoService
};
