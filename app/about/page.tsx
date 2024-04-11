import { Background, Goals, Interests, Introduction } from "@/data/aboutMeData";
import cn from "@/utils/cn";

const AboutPage = () => {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center  p-4 "
      )}>
      <div
        className={cn(
          "mt-20 w-11/12 rounded bg-platinum-900 p-4 shadow-md dark:bg-jet-400 sm:w-4/5 md:w-3/4 lg:w-11/12 xl:w-5/6 2xl:w-4/5"
        )}>
        <h1
          className={cn(
            "mb-6 text-center text-2xl font-bold text-indigo_dye dark:text-caribbean_current sm:text-3xl md:text-4xl lg:text-5xl"
          )}>
          About Me
        </h1>
        <section className={cn("mt-8")}>
          <h2
            className={cn(
              "mb-4 text-center text-xl font-semibold text-indigo_dye dark:text-caribbean_current sm:text-2xl md:text-3xl"
            )}>
            Introduction
          </h2>
          <p
            className={cn(
              "text-center text-base text-gray-600 dark:text-platinum sm:text-lg md:text-xl"
            )}>
            {Introduction}
          </p>
        </section>
        <section className={cn("mt-6")}>
          <h2
            className={cn(
              "mb-4 text-center text-xl font-semibold text-indigo_dye dark:text-caribbean_current sm:text-2xl md:text-3xl"
            )}>
            Background
          </h2>
          <p
            className={cn(
              "text-center text-base text-gray-600 dark:text-platinum sm:text-lg md:text-xl"
            )}>
            {Background}
          </p>
        </section>
        <section className={cn("mt-6")}>
          <h2
            className={cn(
              "mb-4 text-center text-xl font-semibold text-indigo_dye dark:text-caribbean_current sm:text-2xl md:text-3xl"
            )}>
            Interests
          </h2>
          <p
            className={cn(
              "text-center text-base text-gray-600 dark:text-platinum sm:text-lg md:text-xl"
            )}>
            {Interests}
          </p>
        </section>
        <section className={cn("mt-6")}>
          <h2
            className={cn(
              "mb-4 text-center text-xl font-semibold text-indigo_dye dark:text-caribbean_current sm:text-2xl md:text-3xl"
            )}>
            Goals
          </h2>
          <p
            className={cn(
              "text-center text-base text-gray-600 dark:text-platinum sm:text-lg md:text-xl"
            )}>
            {Goals}
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
