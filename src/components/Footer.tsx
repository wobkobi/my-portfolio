// src/components/Footer.tsx
/**
 * @description
 * Renders the site footer with external links to personal website, GitHub, and LinkedIn.
 * Uses consistent icon styling and supports light/dark theme via utility classes.
 */

import { JSX } from "react";
import { FiGithub, FiGlobe, FiLinkedin } from "react-icons/fi";

// Common classes for each icon link
const linkClass =
  "text-indigo_dye hover:text-caribbean_current dark:text-platinum dark:hover:text-caribbean_current";

// Icon sizing classes
const iconClass = "h-6 w-6 sm:h-8 sm:w-8";

/**
 * Footer component.
 * @returns A footer bar with icon links opening in a new tab.
 */
function Footer(): JSX.Element {
  return (
    <footer className="flex justify-center gap-4 bg-platinum-800 p-4 sm:gap-6 md:gap-8 lg:gap-10 dark:bg-jet-400">
      <a
        href="https://harrisonraynes.com"
        className={linkClass}
        title="My Website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGlobe className={iconClass} aria-hidden="true" />
      </a>
      <a
        href="https://github.com/wobkobi"
        className={linkClass}
        title="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub className={iconClass} aria-hidden="true" />
      </a>
      <a
        href="https://linkedin.com/in/harrisonraynes"
        className={linkClass}
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin className={iconClass} aria-hidden="true" />
      </a>
    </footer>
  );
}

export default Footer;
