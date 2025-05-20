// app/page.tsx
/**
 * @file page.tsx
 * @description
 * Renders the home page with the site title and primary navigation links to
 * Portfolio, Projects, and CV download. Utilises the `cn` helper for responsive
 * Tailwind CSS class composition.
 */

import cn from "@/utils/cn";
import Link from "next/link";
import { JSX } from "react";

/**
 * HomePage component.
 * @returns The home page layout.
 */
function HomePage(): JSX.Element {
  const containerClasses = cn(
    "flex grow flex-col items-center justify-center",
    // ensure it fills the available space
    "min-h-[calc(100vh-theme(spacing.14))]" // subtract nav height (~3.5rem)
  );
  const mainClasses = cn(
    "p-4 text-center" // dropped all pt-XX so it's truly centered
  );
  const contentWrapper = cn(
    "mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 p-4"
  );
  const buttonClass = cn(
    "whitespace-nowrap",
    "bg-indigo_dye hover:bg-caribbean_current focus:ring-indigo_dye focus:ring-opacity-50",
    "dark:bg-caribbean_current dark:hover:bg-indigo_dye inline-block rounded-md",
    "px-6 py-4 text-lg font-medium text-white shadow-lg",
    "transition duration-300 ease-in-out hover:scale-105 focus:ring-2 focus:outline-none",
    "sm:px-7 sm:py-4 sm:text-xl"
  );

  return (
    <div className={containerClasses}>
      <main className={mainClasses}>
        <div className={contentWrapper}>
          <h1
            className={cn(
              "text-indigo_dye dark:text-caribbean_current mb-8 text-center text-3xl font-bold",
              "md:text-4xl lg:text-5xl xl:text-6xl"
            )}>
            Harrison Raynes
          </h1>

          <div
            className={cn(
              "flex flex-col items-center justify-center gap-4 sm:flex-row",
              "mt-8"
            )}>
            <Link href="/portfolio" passHref className={buttonClass}>
              View Portfolio
            </Link>
            <Link href="/projects" passHref className={buttonClass}>
              View My Projects
            </Link>
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href="/files/HarrisonRaynesResume.pdf"
              download="HarrisonRaynesResume.pdf"
              className={buttonClass}>
              Download CV
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
