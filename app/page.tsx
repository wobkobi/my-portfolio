import cn from "@/utils/cn"; // Ensure the correct path
import Link from "next/link"; // Import Link for internal navigation

export default function HomePage() {
  return (
    <>
      <div
        className={cn(
          "flex min-h-screen flex-col items-center justify-center bg-white dark:bg-jet"
        )}>
        <h1
          className={cn(
            "mb-4 text-center text-3xl font-bold text-indigo_dye dark:text-caribbean_current md:text-4xl lg:text-5xl xl:text-6xl"
          )}>
          Harrison Raynes
        </h1>
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-4 sm:flex-row"
          )}>
          <Link
            href="/portfolio"
            passHref
            className={cn(
              "inline-block rounded-md bg-indigo_dye px-4 py-2 text-sm font-medium text-white shadow-lg transition duration-300 ease-in-out hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye md:px-6 md:py-3 md:text-lg"
            )}>
            View Portfolio
          </Link>

          <a
            href="/files/HarrisonRaynesCV.pdf"
            download="HarrisonRaynesCV.pdf"
            className={cn(
              "inline-block rounded-md bg-indigo_dye px-4 py-2 text-sm font-medium text-white shadow-lg transition duration-300 ease-in-out hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye md:px-6 md:py-3 md:text-lg"
            )}>
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}
