// app/layout.tsx
/**
 * @description
 * Defines the root HTML layout for the Next.js application, including global
 * providers, navigation, footer, analytics, and performance insights. Applies
 * the Roboto font and a meta viewport for responsive scaling.
 */

import Providers from "@/app/providers";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
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
  title: "Harrison Raynes | IT Support & Infrastructure",
  description:
    "Portfolio of Harrison Raynes — CCNA-certified IT support and infrastructure technician in Auckland, and owner of To the Point Tech, providing onsite and remote support to homes and small businesses across New Zealand.",
  authors: { name: "Harrison Raynes", url: "https://www.harrisonraynes.com" },
  keywords: [
    "Harrison Raynes",
    "IT Support Technician",
    "Service Desk",
    "Infrastructure",
    "CCNA",
    "Network Administration",
    "Linux Administration",
    "TrueNAS",
    "Docker",
    "Active Directory",
    "Microsoft 365",
    "Networking",
    "Portfolio",
    "Auckland",
    "IT Support",
    "Tech Support",
    "To the Point Tech",
    "Computer Repair",
    "Wi-Fi Setup",
    "New Zealand",
  ],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://www.harrisonraynes.com",
    title: "Harrison Raynes | IT Support & Infrastructure",
    description:
      "Explore the skills, infrastructure work, and experience of Harrison Raynes — CCNA-certified IT support and infrastructure technician, and owner of To the Point Tech.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harrison Raynes | IT Support & Infrastructure",
    description:
      "Portfolio of Harrison Raynes — CCNA-certified IT support and infrastructure technician based in Auckland, NZ.",
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
    <html lang="en" className={`${roboto.className} h-full`} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        // padding-top keeps content clear of the fixed navbar
        className="flex min-h-screen flex-col bg-platinum-900 pt-20 sm:pt-28 dark:bg-jet-200"
      >
        <Providers>
          <NavBar />
          <main className="flex grow items-center justify-center">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export default RootLayout;
