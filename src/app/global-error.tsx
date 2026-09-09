// src/app/global-error.tsx
/**
 * @description
 * Renders a full-screen error fallback UI when an unexpected error occurs in the app.
 * Displays an error message, logs the error, and provides a retry button.
 */

"use client";

import { GlobalErrorProps } from "@/types/Types";
import { JSX, useEffect } from "react";

/**
 * Fallback UI for unhandled errors in client-side rendering.
 * Logs the error to the console and shows a retry button.
 * @param props - The error and reset callback.
 * @param props.error - The thrown error object.
 * @param props.reset - Function to reset error boundary state.
 * @returns A full-screen error message with retry.
 */
function GlobalError({ error: err, reset }: GlobalErrorProps): JSX.Element {
  useEffect(() => {
    // Log error for debugging or reporting
    console.error(err);
  }, [err]);

  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="max-w-md rounded-lg p-6 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-indigo_dye dark:text-caribbean_current">
          Something went wrong!
        </h2>
        <p className="mt-4 text-center text-jet-600 dark:text-platinum">
          Please try again or contact support if the problem persists.
        </p>
        <button
          onClick={reset}
          className="mt-6 block w-full rounded-md bg-indigo_dye px-6 py-2 text-center font-medium text-white hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default GlobalError;
