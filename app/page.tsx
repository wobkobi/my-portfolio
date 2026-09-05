// app/page.tsx
/**
 * @description
 * Renders the home page with the site title, headline, and primary navigation
 * links to Portfolio, Projects, and CV download.
 */

import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { JSX } from "react";

const buttonClass =
  "whitespace-nowrap bg-indigo_dye hover:bg-caribbean_current focus:ring-indigo_dye focus:ring-opacity-50 dark:bg-caribbean_current dark:hover:bg-indigo_dye inline-block rounded-md px-6 py-4 text-lg font-medium text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 sm:px-7 sm:py-4 sm:text-xl";

/**
 * HomePage component.
 * @returns The home page layout.
 */
function HomePage(): JSX.Element {
  return (
    <PageWrapper className="min-h-[calc(100vh-(--spacing(20)))]">
      <h1 className="mb-8 text-center text-3xl font-bold text-indigo_dye md:text-4xl lg:text-5xl xl:text-6xl dark:text-caribbean_current">
        Harrison Raynes
      </h1>

      <p className="text-gray-600 text-center text-lg sm:text-xl md:text-2xl dark:text-platinum">
        IT Support &amp; Infrastructure · CCNA Certified · Auckland, NZ
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href="/portfolio" passHref className={buttonClass}>
          View Portfolio
        </Link>
        <Link href="/projects" passHref className={buttonClass}>
          View My Projects
        </Link>
      </div>

      <div className="mt-4 flex justify-center">
        <a
          href="/files/Harrison Raynes CV.pdf"
          download="Harrison Raynes CV.pdf"
          className={buttonClass}
        >
          Download CV
        </a>
      </div>
    </PageWrapper>
  );
}

export default HomePage;
