// app/layout.tsx
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
import type { Viewport } from "next";
import { Roboto } from "next/font/google";
import React, { JSX } from "react";
import "./globals.css";

/** Load Roboto font weights for headings & body text */
const roboto = Roboto({
  weight: ["300", "500"],
  subsets: ["latin-ext"],
});

/**
 * Primary metadata for all pages.
 * - `openGraph` and `twitter` improve link previews on social platforms.
 */
export const metadata = {
  title: "Harrison Raynes | Full-Stack Developer",
  description:
    "Portfolio of Harrison Raynes — an Auckland-based developer specializing in web development, cloud computing, and network architecture.",
  authors: { name: "Harrison Raynes", url: "https://www.harrisonraynes.com" },
  keywords: [
    "Harrison Raynes",
    "Software Developer",
    "Full Stack",
    "Next.js",
    "AWS",
    "Networking",
    "Portfolio",
    "Auckland",
  ],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://www.harrisonraynes.com",
    title: "Harrison Raynes | Full-Stack Developer",
    description:
      "Explore the projects, skills, and certifications of Harrison Raynes — a New Zealand-based developer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harrison Raynes | Full-Stack Developer",
    description:
      "Portfolio, projects, and certifications of Harrison Raynes — Auckland-based dev.",
  },
};

/** Viewport settings for mobile responsiveness */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html
      lang="en"
      className={cn(roboto.className, "h-full")}
      suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          // add padding-top so content isn't hidden behind the navbar on mobile
          "flex min-h-screen flex-col pt-14",
          "sm:pt-20",
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

export default RootLayout;
