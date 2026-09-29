// src/app/not-found.tsx

import Link from "next/link";
import { JSX } from "react";

/**
 * NotFound component.
 * @returns The 404 page with a link back to the single page.
 */
function NotFound(): JSX.Element {
  return (
    <div className="flex min-h-[70svh] grow items-center justify-center">
      <div className="p-4 text-center">
        <h2 className="text-4xl font-bold text-indigo_dye sm:text-5xl dark:text-caribbean_current">
          404: Not Found
        </h2>
        <p className="mt-4 text-lg text-jet sm:text-xl dark:text-platinum">
          It seems the page you were looking for doesn&apos;t exist.
        </p>
        <p className="mt-4 text-lg text-jet sm:text-xl dark:text-platinum">womp womp</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-indigo_dye px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
