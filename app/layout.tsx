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
  title: "Harrison Raynes",
  description: "Harrison Raynes, a passionate Computer Science Graduate",
  image: "/images/portfolio-thumbnail.png",
  type: "website",
  url: "https://www.harrisonraynes.com",
  siteName: "Harrison Raynes Portfolio",
  keywords: [
    "Harrison Raynes",
    "Software Developer",
    "Portfolio",
    "Technology",
    "Programming",
    "Projects",
    "Resume",
  ],
  author: "Harrison Raynes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(roboto.className)} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-white dark:bg-jet")}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
