// src/app/not-found.tsx
/**
 * @description
 * Renders a custom 404 page when a route is not found. Provides a message and
 * a link to return to the home page, supporting light and dark modes.
 */

import Link from "next/link";
import { JSX } from "react";

/**
 * NotFound component.
 * @returns A full-screen 404 error page with navigation back home.
 */
function NotFound(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-jet-200">
      <div className="p-4 text-center">
        <h2 className="text-4xl font-bold text-indigo_dye sm:text-5xl dark:text-caribbean_current">
          404: Not Found
        </h2>
        <p className="mt-4 text-lg text-jet-200 sm:text-xl dark:text-platinum">
          It seems the page you were looking for doesn&apos;t exist.
        </p>
        <p className="mt-4 text-lg text-jet-200 sm:text-xl dark:text-platinum">womp womp</p>
        <Link
          href="/"
          passHref
          className="mt-6 inline-block rounded-sm bg-indigo_dye px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-caribbean_current dark:bg-caribbean_current dark:text-white dark:hover:bg-indigo_dye"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
