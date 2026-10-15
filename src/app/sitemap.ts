import type { MetadataRoute } from "next";
import { categories, tools, SITE } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/ai-for-teachers", "/submit", "/sponsor", "/about"].map((p) => ({ url: SITE.url + p, lastModified: now }));
  return [...pages, ...categories.map((c) => ({ url: `${SITE.url}/category/${c.slug}`, lastModified: now })), ...tools.map((t) => ({ url: `${SITE.url}/tools/${t.slug}`, lastModified: now }))];
}
