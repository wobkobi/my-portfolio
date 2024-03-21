import cn from "@/utils/cn";

export default function AboutPage() {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center bg-white p-4 dark:bg-jet"
      )}>
      <div
        className={cn(
          "xl:w-85% 2xl:w-80% rounded p-4 shadow-md dark:bg-jet-400 sm:w-11/12 md:w-4/5 lg:w-3/4"
        )}>
        <h1
          className={cn(
            "mb-6 text-center  text-3xl font-bold text-indigo_dye dark:text-caribbean_current sm:text-4xl md:text-5xl"
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
            My name is Harrison Raynes, a Bachelor of Computer and Information
            Sciences graduate from Auckland University of Technology. I majored
            in Software Development and Networks & Cyber Security. I am a
            passionate software developer and technologist, always looking for
            new opportunities to learn and grow.
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
            {/* Add your background details here */}
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
              "mt-4 text-base text-gray-600 dark:text-platinum sm:text-lg"
            )}>
            {/* Add your interests here */}
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
            {/* Add your goals here */}
          </p>
        </section>
      </div>
    </div>
  );
}
