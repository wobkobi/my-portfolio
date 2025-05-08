/**
 * @file GlobalError.tsx
 * @description
 * Renders a full-screen error fallback UI when an unexpected error occurs in the app.
 * Displays an error message, logs the error, and provides a retry button.
 */

"use client";

import { GlobalErrorProps } from "@/types/Types";
import cn from "@/utils/cn";
import { JSX, useEffect } from "react";

/**
 * Fallback UI for unhandled errors in client-side rendering.
 * Logs the error to the console and shows a retry button.
 *
 * @param {GlobalErrorProps} props - The error and reset callback.
 * @param {Error} props.error - The thrown error object.
 * @param {Function} props.reset - Function to reset error boundary state.
 * @returns {JSX.Element} A full-screen error message with retry.
 */
function GlobalError({ error: err, reset }: GlobalErrorProps): JSX.Element {
  useEffect(() => {
    // Log error for debugging or reporting
    console.error(err);
  }, [err]);

  return (
    <div className={cn("flex h-screen items-center justify-center p-4")}>
      <div className={cn("max-w-md rounded-lg p-6 shadow-lg")}>
        <h2
          className={cn(
            "text-indigo_dye dark:text-caribbean_current text-center text-2xl font-bold"
          )}>
          Something went wrong!
        </h2>
        <p className={cn("dark:text-platinum mt-4 text-center text-gray-600")}>
          Please try again or contact support if the problem persists.
        </p>
        <button
          onClick={reset}
          className={cn(
            "bg-indigo_dye hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye mt-6 block w-full rounded-md px-6 py-2 text-center font-medium text-white"
          )}>
          Try Again
        </button>
      </div>
    </div>
  );
}

export default GlobalError;
