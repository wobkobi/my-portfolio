// src/app/sitemap.ts

import type { MetadataRoute } from "next";

const BASE_URL = "https://www.harrisonraynes.com";

/**
 * Sitemap generator for Next.js.
 *
 * The site is a single page, so section anchors are deliberately left out -
 * they are not separately indexable URLs.
 * @returns The sole sitemap entry.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
