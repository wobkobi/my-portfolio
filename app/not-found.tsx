// app/not-found.tsx
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
    <div className="dark:bg-rich-black flex min-h-screen items-center justify-center bg-white">
      <div className="p-4 text-center">
        <h2 className="text-coquelicot dark:text-moonstone text-4xl font-bold sm:text-5xl">
          404: Not Found
        </h2>
        <p className="text-rich-black dark:text-seasalt mt-4 text-lg sm:text-xl">
          It seems the page you were looking for doesn&apos;t exist.
        </p>
        <p className="text-rich-black dark:text-seasalt mt-4 text-lg sm:text-xl">womp womp</p>
        <Link
          href="/"
          passHref
          className="bg-coquelicot hover:bg-moonstone dark:bg-moonstone dark:hover:bg-coquelicot mt-6 inline-block rounded-sm px-4 py-2 font-medium text-white transition-colors duration-300 dark:text-white"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
