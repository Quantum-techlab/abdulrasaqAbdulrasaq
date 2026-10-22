import { useEffect } from 'react';
import seo from './routes.json';
import { globalSchema, routeSchema } from './schema.js';

export type SeoRoute = (typeof seo.routes)[number];

export const SITE = seo.site;
export const ROUTES = seo.routes;
export const routeFor = (path: string): SeoRoute | undefined => seo.routes.find((r) => r.path === path);

const setMeta = (selector: string, attr: 'name' | 'property', key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
};

/**
 * Keeps the document head in sync during client-side navigation. The same values are
 * written statically into each page's HTML at build time (scripts/seo-build.mjs), so
 * crawlers and link previews get them without running JavaScript.
 */
export const useSeo = (path: string) => {
  useEffect(() => {
    const route = routeFor(path);
    if (!route) return;
    const url = SITE + (route.path === '/' ? '/' : route.path);
    const image = SITE + (('image' in route && route.image) || seo.defaultImage);

    document.title = route.title;
    setMeta('meta[name="description"]', 'name', 'description', route.description);
    setMeta('meta[name="title"]', 'name', 'title', route.title);
    setMeta('meta[property="og:title"]', 'property', 'og:title', route.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', route.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[property="og:image"]', 'property', 'og:image', image);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', route.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', route.description);
    setMeta('meta[name="twitter:url"]', 'name', 'twitter:url', url);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Built pages already carry the site-wide graph; dev (and any page missing it) gets it here
    if (!document.querySelector('script[data-seo="global"]')) {
      const g = document.createElement('script');
      g.type = 'application/ld+json';
      g.dataset.seo = 'global';
      g.textContent = JSON.stringify(globalSchema(SITE));
      document.head.appendChild(g);
    }

    let ld = document.getElementById('route-jsonld') as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.id = 'route-jsonld';
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(routeSchema(route, SITE, seo.defaultImage));
  }, [path]);
};
