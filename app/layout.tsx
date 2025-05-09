/**
 * @file RootLayout.tsx
 * @description
 * Defines the root HTML layout for the Next.js application, including global
 * providers, navigation, footer, analytics, and performance insights. Applies
 * the Roboto font and utility classes via the `cn` helper.
 */

import Providers from "@/app/providers";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import cn from "@/utils/cn";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Roboto } from "next/font/google";
import React, { JSX } from "react";
import "./globals.css";

/**
 * Load Roboto font with specified weights and subsets.
 */
const roboto = Roboto({
  weight: ["300", "500"],
  subsets: ["latin-ext"],
});

/**
 * Metadata for the HTML document head.
 *
 * @type {{ title: string; description: string; type: string; url: string; siteName: string; keywords: string[]; author: string }}
 */
export const metadata = {
  title: "Harrison Raynes",
  description: "Harrison Raynes, a Computer Science Graduate",
  type: "website",
  url: "https://www.harrisonraynes.com",
  siteName: "Harrison Raynes Portfolio",
  keywords: [
    "Harrison Raynes",
    "Harrison",
    "Raynes",
    "Software Developer",
    "Portfolio",
    "Technology",
    "Programming",
    "Projects",
    "Resume",
    "CV",
  ],
  author: "Harrison Raynes",
};

/**
 * RootLayout component.
 *
 * Wraps all pages with HTML structure, global providers, navigation bar,
 * footer, and integrates analytics and performance insights.
 *
 * @param {{ children: React.ReactNode }} props - The page content to render.
 * @param {React.ReactNode} props.children - The nested page elements.
 * @returns {JSX.Element} The root HTML layout.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html
      lang="en"
      className={cn(roboto.className, "h-full")}
      suppressHydrationWarning>
      <body className={cn("flex min-h-screen flex-col")}>
        <Providers>
          <NavBar />
          <main className={cn("flex grow items-center justify-center")}>
            {children}
          </main>
          <Footer />
        </Providers>
        {/* Vercel performance and analytics integrations */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
