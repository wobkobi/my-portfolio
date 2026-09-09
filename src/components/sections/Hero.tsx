// src/components/sections/Hero.tsx

import { JSX } from "react";

// svh rather than vh so mobile browser chrome does not push the buttons off
// screen, and short of full height so the next section stays in view.
const heroClasses =
  "mx-auto flex min-h-[55svh] w-full max-w-4xl flex-col items-center justify-center px-4 py-12 text-center sm:min-h-[60svh] sm:px-6";

const primaryButton =
  "rounded-md bg-indigo_dye px-6 py-3.5 text-base font-medium text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-caribbean_current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo_dye sm:text-lg dark:bg-caribbean_current dark:hover:bg-indigo_dye";

const secondaryButton =
  "rounded-md border border-indigo_dye/40 px-6 py-3.5 text-base font-medium text-indigo_dye transition duration-300 ease-in-out hover:border-indigo_dye hover:bg-indigo_dye/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo_dye sm:text-lg dark:border-caribbean_current/40 dark:text-caribbean_current dark:hover:border-caribbean_current dark:hover:bg-caribbean_current/10";

/**
 * Hero section.
 *
 * Opens the page with the name and what Harrison does, then the three things a
 * visitor is most likely to want next.
 * @returns The hero layout.
 */
function Hero(): JSX.Element {
  return (
    <div className={heroClasses}>
      <h1 className="text-4xl font-bold tracking-tight text-indigo_dye sm:text-5xl md:text-6xl xl:text-7xl dark:text-caribbean_current">
        Harrison Raynes
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-balance text-jet-600 sm:text-xl md:text-2xl dark:text-platinum">
        IT support and infrastructure technician in Auckland. CCNA certified, and the owner of To
        the Point Tech.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <a href="#portfolio" className={primaryButton}>
          View portfolio
        </a>
        <a href="#projects" className={secondaryButton}>
          View projects
        </a>
        <a
          href="/files/Harrison Raynes CV.pdf"
          download="Harrison Raynes CV.pdf"
          className={secondaryButton}
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Hero;
