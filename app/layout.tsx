/**
 * @file RootLayout.tsx
 * @description
 * Defines the root HTML layout for the Next.js application, including global
 * providers, navigation, footer, analytics, and performance insights. Applies
 * the Roboto font, meta viewport for responsive scaling, and utility classes via the `cn` helper.
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
 */
export const metadata = {
  title: "Harrison Raynes | Software Developer Portfolio",
  description:
    "Portfolio website of Harrison Raynes, an Auckland-based Software Developer specialising in web development, cloud technologies, and innovative software solutions.",
  viewport: "width=device-width, initial-scale=1",
  type: "website",
  url: "https://www.harrisonraynes.com",
  siteName: "Harrison Raynes Portfolio",
  keywords: [
    "Harrison Raynes",
    "Software Developer",
    "Full Stack Developer",
    "Portfolio",
    "AWS",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "React",
    "Projects",
    "Resume",
    "CV",
    "Auckland",
    "New Zealand",
  ],
  author: "Harrison Raynes",
};

/**
 * RootLayout component.
 *
 * Wraps all pages with HTML structure, global providers, navigation bar,
 * footer, and integrates analytics and performance insights.
 * Includes a meta viewport tag for mobile responsiveness.
 * @param props - The page content to render.
 * @param props.children - The nested page elements.
 * @returns The root HTML layout.
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
      <body
        suppressHydrationWarning
        className={cn(
          "flex min-h-screen flex-col",
          "bg-platinum-900 dark:bg-jet-200"
        )}>
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
