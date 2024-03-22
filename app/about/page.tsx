import { Background, Goals, Interests, Introduction } from "@/data/AboutMeData";
import cn from "@/utils/cn";

export default function AboutPage() {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center bg-white p-4 dark:bg-jet"
      )}>
      <div
        className={cn(
          "xl:w-85% 2xl:w-80% mt-20 rounded p-4 shadow-md dark:bg-jet-400 sm:w-11/12 md:w-4/5 lg:w-3/4" // Added mt-20 for spacing
        )}>
        <h1
          className={cn(
            "mb-6 text-center text-3xl font-bold text-indigo_dye dark:text-caribbean_current sm:text-4xl md:text-5xl"
          )}>
          About Me
        </h1>
        <section className={cn("mt-8")}>
          <h2
            className={cn(
              "text-center text-xl font-semibold text-indigo_dye dark:text-caribbean_current sm:text-2xl md:text-3xl"
            )}>
            Introduction
          </h2>
          <p
            className={cn(
              "mt-4 text-center text-base text-gray-600 dark:text-platinum sm:text-lg md:text-xl"
            )}>
            {Introduction}
          </p>
        </section>

        {/* Background */}
        <section className={cn("mt-6")}>
          <h2
            className={cn(
              "text-center text-xl font-semibold text-indigo_dye dark:text-caribbean_current sm:text-2xl"
            )}>
            Background
          </h2>
          <p
            className={cn(
              "mt-4 text-center text-base text-gray-600 dark:text-platinum sm:text-lg"
            )}>
            {Background}
          </p>
        </section>

        {/* Interests */}
        <section className={cn("mt-6")}>
          <h2
            className={cn(
              "text-center text-xl font-semibold text-indigo_dye dark:text-caribbean_current sm:text-2xl"
            )}>
            Interests
          </h2>
          <p
            className={cn(
              "mt-4 text-center text-base text-gray-600 dark:text-platinum sm:text-lg"
            )}>
            {Interests}
          </p>
        </section>

        {/* Goals */}
        <section className={cn("mb-8 mt-6")}>
          <h2
            className={cn(
              "text-center text-xl  font-semibold text-indigo_dye dark:text-caribbean_current sm:text-2xl"
            )}>
            Goals
          </h2>
          <p
            className={cn(
              "mt-4 text-center text-base text-gray-600 dark:text-platinum sm:text-lg"
            )}>
            {Goals}
          </p>
        </section>
      </div>
    </div>
  );
}
