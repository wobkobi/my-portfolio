import { Background, Goals, Interests, Introduction } from "@/data/AboutMeData";
import cn from "@/utils/cn";

export default function AboutPage() {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center  p-4"
      )}>
      <div
        className={cn(
          "mt-20 rounded p-4 shadow-md dark:bg-jet-400 sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-4/5 2xl:w-3/4"
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

        <section
          className={cn(
            "I have multiple interests, such as gaming, PC building, and managing my server. I have always been interested in gaming and have been playing games since I was a child. I have also always been interested in building my own PC and have built multiple PCs for myself and friends. I have also been managing my server for a few years and have learned a lot about server management and networking. I have always been interested in learning new things and challenging myself to become a better software developer. mt-6"
          )}>
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
