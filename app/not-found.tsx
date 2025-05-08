import cn from "@/utils/cn";
import Link from "next/link";
import { JSX } from "react";

function notFound(): JSX.Element {
  return (
    <div
      className={cn(
        "dark:bg-jet flex min-h-screen items-center justify-center bg-white"
      )}>
      <div className="p-4 text-center">
        <h2
          className={cn(
            "text-indigo_dye dark:text-caribbean_current text-4xl font-bold sm:text-5xl"
          )}>
          404: Not Found
        </h2>
        <p
          className={cn("text-jet dark:text-platinum mt-4 text-lg sm:text-xl")}>
          {`It seems the page you were looking for doesn't exist.`}
        </p>
        <p
          className={cn("text-jet dark:text-platinum mt-4 text-lg sm:text-xl")}>
          womp womp
        </p>
        <Link
          href="/"
          passHref
          className={cn(
            "bg-indigo_dye hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye mt-6 inline-block rounded-sm px-4 py-2 font-medium text-white transition-colors duration-300 dark:text-white"
          )}>
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default notFound;
