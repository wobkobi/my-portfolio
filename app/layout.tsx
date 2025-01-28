import Providers from "@/app/providers";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import cn from "@/utils/cn";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Roboto } from "next/font/google";
import React from "react";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "500"],
  subsets: ["latin-ext"],
});

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
