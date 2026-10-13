import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { seoService } from '../services/seoService';
import { PageSeoConfig } from '../types/seo';

export default function SeoMeta() {
  const { pathname } = useLocation();
  const [, setTick] = useState(0);

  // Subscribe to seoService updates so when dashboard edits occur, current page updates immediately
  useEffect(() => {
    return seoService.subscribe(() => {
      setTick((t) => t + 1);
    });
  }, []);

  useEffect(() => {
    const state = seoService.getState();
    const page: PageSeoConfig | undefined = state.pages[pathname] || state.pages['/'];

    if (!page) return;

    // 1. Title
    document.title = page.title;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', page.description);

    // 3. Canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', page.canonical);

    // Helper for updating or creating meta tags
    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 4. Robots Directives
    setMeta('name', 'robots', page.robotsDirective || 'index, follow');

    // 5. Google Search Console Verification tag if set
    if (state.global.googleSearchConsoleVerification) {
      setMeta('name', 'google-site-verification', state.global.googleSearchConsoleVerification);
    }

    // 6. OpenGraph Meta
    setMeta('property', 'og:title', page.ogTitle || page.title);
    setMeta('property', 'og:description', page.ogDescription || page.description);
    setMeta('property', 'og:url', page.canonical);
    setMeta('property', 'og:type', page.ogType || 'website');
    setMeta('property', 'og:site_name', state.global.siteName || 'The Internet Ads');
    setMeta('property', 'og:image', page.ogImage || state.global.defaultOgImage);

    // 7. Twitter Card Meta
    setMeta('name', 'twitter:card', page.twitterCard || 'summary_large_image');
    setMeta('name', 'twitter:title', page.ogTitle || page.title);
    setMeta('name', 'twitter:description', page.ogDescription || page.description);
    setMeta('name', 'twitter:image', page.ogImage || state.global.defaultOgImage);

    // 8. Schema.org JSON-LD Script
    let scriptJsonLd = document.querySelector('script#seo-json-ld');
    if (page.structuredDataJson) {
      try {
        // Validate JSON
        JSON.parse(page.structuredDataJson);
        if (!scriptJsonLd) {
          scriptJsonLd = document.createElement('script');
          scriptJsonLd.id = 'seo-json-ld';
          scriptJsonLd.setAttribute('type', 'application/ld+json');
          document.head.appendChild(scriptJsonLd);
        }
        scriptJsonLd.textContent = page.structuredDataJson;
      } catch {
        // Skip invalid JSON
      }
    } else if (scriptJsonLd) {
      scriptJsonLd.remove();
    }
  }, [pathname]);

  return null;
}
