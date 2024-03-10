import "./globals.css";
import { Roboto } from "next/font/google";
import { useTheme } from "next-themes";
import { Providers } from "@/app/providers";
import Nav from "@/components/Nav.client";
const roboto = Roboto({
  weight: ["300", "500"],
  subsets: ["latin-ext"],
});
export const metadata = {
  title: "Harrison Raynes Portfolio",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-jet">
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
