import type { MetadataRoute } from "next";

import { categories, products } from "@/data/catalog";
import { absoluteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/catalog",
    "/custom-profile",
    "/production",
    "/contacts",
    "/request-price",
    "/request-quote",
    "/request-callback"
  ];

  const staticEntries = staticPages.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8
  }));

  const categoryEntries = categories.map((category) => ({
    url: absoluteUrl(`/catalog/${category.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85
  }));

  const productEntries = products.map((product) => ({
    url: absoluteUrl(`/catalog/${product.category}/${product.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries];
}
