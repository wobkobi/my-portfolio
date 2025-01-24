"use client";
import cn from "@/utils/cn";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
