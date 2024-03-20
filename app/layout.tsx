import Providers from "@/app/providers";
import NavBar from "@/components/NavBar";
import cn from "@/utils/cn";
import { Roboto } from "next/font/google";
import "./globals.css";
const roboto = Roboto({
  weight: ["300", "500"],
  subsets: ["latin-ext"],
});
export const metadata = {
  title: "Harrison Raynes - Software Development & Networks and Security Graduate",
  description: "Welcome to the portfolio of Harrison Raynes, a passionate software developer and technologist showcasing projects, skills, and professional experiences.",
  image: "/images/portfolio-thumbnail.png", // Path to an image thumbnail for social media sharing
  type: "website",
  url: "https://www.harrisonraynes.com",
  siteName: "Harrison Raynes Portfolio",
  themeColor: "#3c6e71", // Color for browser on supported mobile devices
  keywords: ["Harrison Raynes", "Software Developer", "Portfolio", "Technology", "Programming", "Projects", "Resume"],
  author: "Harrison Raynes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-white dark:bg-jet")}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
