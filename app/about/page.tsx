// app/about/page.tsx
/**
 * @file AboutPage.tsx
 * @description
 * Renders the About Me page to match site-wide layout conventions.
 */

import {
  AboutMe,
  FutureGoals,
  MyJourney,
  SkillsAndProjects,
} from "@/data/AboutMeData";
import cn from "@/utils/cn";
import { JSX } from "react";

/**
 * AboutPage component.
 * @returns The About Me page layout.
 */
function AboutPage(): JSX.Element {
  const containerClasses = cn("flex grow flex-col items-center justify-center");
  const mainClasses = cn("p-4 pt-16 text-center sm:pt-7");
  const contentWrapper = cn(
    "mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 p-4"
  );
  const cardClasses = cn(
    "bg-platinum-700 dark:bg-jet-300 rounded-sm p-4 shadow-md"
  );
  const titleClasses = cn(
    "text-indigo_dye dark:text-caribbean_current mb-6 text-center text-3xl font-bold",
    "sm:text-4xl md:text-5xl"
  );
  const sectionHeading = cn(
    "text-indigo_dye dark:text-caribbean_current mb-4 text-center text-xl font-semibold",
    "sm:text-2xl md:text-3xl"
  );
  const paragraphClasses = cn(
    "dark:text-platinum text-center text-base text-gray-600",
    "sm:text-lg md:text-xl"
  );

  return (
    <div className={containerClasses}>
      <main className={mainClasses}>
        <div className={contentWrapper}>
          <h1 className={titleClasses}>About Me</h1>
          <div className={cardClasses}>
            <section className={cn("mt-6")}>
              <h2 className={sectionHeading}>Introduction</h2>
              <p className={paragraphClasses}>{AboutMe}</p>
            </section>
            <section className={cn("mt-6")}>
              <h2 className={sectionHeading}>My Journey</h2>
              <p className={paragraphClasses}>{MyJourney}</p>
            </section>
            <section className={cn("mt-6")}>
              <h2 className={sectionHeading}>Skills and Projects</h2>
              <p className={paragraphClasses}>{SkillsAndProjects}</p>
            </section>
            <section className={cn("mt-6")}>
              <h2 className={sectionHeading}>Future Goals</h2>
              <p className={paragraphClasses}>{FutureGoals}</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
