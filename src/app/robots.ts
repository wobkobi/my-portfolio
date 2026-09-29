// src/app/robots.ts

import type { MetadataRoute } from "next";

/**
 * Robots file for Next.js. Allows every crawler and points it at the sitemap.
 * @returns The robots rules.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.harrisonraynes.com/sitemap.xml",
  };
}
