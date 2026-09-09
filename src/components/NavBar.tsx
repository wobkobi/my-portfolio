// src/components/NavBar.tsx
// Stays put rather than hiding on scroll: on a single page these links are the
// only way between sections, so hiding them strands the reader. Links are
// same-page anchors, so they use plain <a> rather than next/link.

import ThemeSwitch from "@/components/ThemeSwitch";
import { JSX } from "react";

// Mobile full-width, desktop a curved inline pill.
const navClasses =
  "fixed top-3 z-50 bg-platinum-700 dark:bg-jet-500 inset-x-0 py-1 sm:left-1/2 sm:top-5 sm:max-w-screen-md sm:-translate-x-1/2 sm:transform sm:inline-block sm:rounded-full sm:px-4 sm:py-2";

const containerClasses = "flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap";

const linkClass =
  "px-2 py-1 font-medium transition-colors text-base sm:text-lg md:text-xl text-jet-400 dark:text-platinum hover:text-indigo_dye dark:hover:text-caribbean_current";

const sections = [
  { href: "#top", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

/**
 * NavBar component.
 * @returns The navigation bar element.
 */
function NavBar(): JSX.Element {
  return (
    <nav className={navClasses} aria-label="Sections">
      <div className={containerClasses}>
        {sections.map((section) => (
          <a key={section.href} href={section.href} className={linkClass}>
            {section.label}
          </a>
        ))}
        <ThemeSwitch />
      </div>
    </nav>
  );
}

export default NavBar;
