import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { seoService } from "../services/seoService";
function SeoMeta() {
  const { pathname } = useLocation();
  const [revision, setRevision] = useState(0);
  useEffect(() => {
    return seoService.subscribe(() => {
      setTick((t) => t + 1);
    });
  }, []);
  useEffect(() => {
    const state = seoService.getState();
    const page = state.pages[pathname] || state.pages["/404"] || state.pages["/"];
    if (!page) return;
    document.title = page.title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", page.description);
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", page.canonical);
    const setMeta = (attr, key, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("name", "robots", page.robotsDirective || "index, follow");
    const verificationTag = document.querySelector('meta[name="google-site-verification"]');
    if (state.global.googleSearchConsoleVerification) setMeta("name", "google-site-verification", state.global.googleSearchConsoleVerification);
    else verificationTag?.remove();
    setMeta("property", "og:title", page.ogTitle || page.title);
    setMeta("property", "og:description", page.ogDescription || page.description);
    setMeta("property", "og:url", page.canonical);
    setMeta("property", "og:type", page.ogType || "website");
    setMeta("property", "og:site_name", state.global.siteName || "The Internet Ads");
    setMeta("property", "og:image", page.ogImage || state.global.defaultOgImage);
    setMeta("name", "twitter:card", page.twitterCard || "summary_large_image");
    setMeta("name", "twitter:title", page.ogTitle || page.title);
    setMeta("name", "twitter:description", page.ogDescription || page.description);
    setMeta("name", "twitter:image", page.ogImage || state.global.defaultOgImage);
    let scriptJsonLd = document.querySelector("script#seo-json-ld");
    if (page.structuredDataJson) {
      try {
        JSON.parse(page.structuredDataJson);
        if (!scriptJsonLd) {
          scriptJsonLd = document.createElement("script");
          scriptJsonLd.id = "seo-json-ld";
          scriptJsonLd.setAttribute("type", "application/ld+json");
          document.head.appendChild(scriptJsonLd);
        }
        scriptJsonLd.textContent = page.structuredDataJson;
      } catch {
      }
    } else if (scriptJsonLd) {
      scriptJsonLd.remove();
    }
  }, [pathname, revision]);
  return null;
}
export {
  SeoMeta as default
};
