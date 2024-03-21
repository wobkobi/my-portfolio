import cn from "@/utils/cn";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center bg-white dark:bg-jet"
      )}>
      <div className={cn("p-4 text-center")}>
        <h2
          className={cn(
            "text-4xl font-bold text-indigo_dye dark:text-caribbean_current sm:text-5xl"
          )}>
          404: Not Found
        </h2>
        <p
          className={cn("mt-4 text-lg text-jet dark:text-platinum sm:text-xl")}>
          It seems the page you were looking for doesn't exist.
        </p>
        <p
          className={cn("mt-4 text-lg text-jet dark:text-platinum sm:text-xl")}>
          womp womp
        </p>
        <Link
          href="/"
          passHref
          className={cn(
            "mt-6 inline-block rounded bg-indigo_dye px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-caribbean_current dark:bg-caribbean_current dark:text-white dark:hover:bg-indigo_dye"
          )}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
