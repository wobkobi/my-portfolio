import cn from "@/utils/cn";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className={cn("flex grow flex-col items-center justify-center")}>
      <h1
        className={cn(
          "text-indigo_dye dark:text-caribbean_current mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl"
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
          className="bg-indigo_dye hover:bg-caribbean_current focus:ring-indigo_dye focus:ring-opacity-50 dark:bg-caribbean_current dark:hover:bg-indigo_dye inline-block rounded-md px-6 py-4 text-lg font-medium text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 focus:ring-2 focus:outline-hidden sm:px-7 sm:py-4 sm:text-xl">
          View Portfolio
        </Link>
        <Link
          href="/projects"
          passHref
          className="bg-indigo_dye hover:bg-caribbean_current focus:ring-indigo_dye focus:ring-opacity-50 dark:bg-caribbean_current dark:hover:bg-indigo_dye inline-block rounded-md px-6 py-4 text-lg font-medium text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 focus:ring-2 focus:outline-hidden sm:px-7 sm:py-4 sm:text-xl">
          View My Projects
        </Link>

        <a
          href="/files/HarrisonRaynesResume.pdf"
          download="HarrisonRaynesResume.pdf"
          className="bg-indigo_dye hover:bg-caribbean_current focus:ring-indigo_dye focus:ring-opacity-50 dark:bg-caribbean_current dark:hover:bg-indigo_dye inline-block rounded-md px-6 py-4 text-lg font-medium text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 focus:ring-2 focus:outline-hidden sm:px-7 sm:py-4 sm:text-xl">
          Download CV
        </a>
      </div>
    </div>
  );
}
