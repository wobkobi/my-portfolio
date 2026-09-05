// app/about/page.tsx
/**
 * @description
 * Renders the About Me page.
 */

import PageWrapper from "@/components/PageWrapper";
import { AboutMe, FutureGoals, MyJourney, SkillsAndProjects } from "@/data/AboutMeData";
import { JSX } from "react";

const cardClasses = "bg-platinum-700 dark:bg-jet-300 rounded-sm p-4 shadow-md";
const titleClasses =
  "text-indigo_dye dark:text-caribbean_current mb-6 text-center text-3xl font-bold sm:text-4xl md:text-5xl";
const sectionHeading =
  "text-indigo_dye dark:text-caribbean_current mb-4 text-center text-xl font-semibold sm:text-2xl md:text-3xl";
const paragraphClasses =
  "dark:text-platinum text-center text-base text-gray-600 sm:text-lg md:text-xl";

/**
 * AboutPage component.
 * @returns The About Me page layout.
 */
function AboutPage(): JSX.Element {
  return (
    <PageWrapper>
      <h1 className={titleClasses}>About Me</h1>
      <div className={cardClasses}>
        <section className="mt-6">
          <h2 className={sectionHeading}>Introduction</h2>
          <p className={paragraphClasses}>{AboutMe}</p>
        </section>
        <section className="mt-6">
          <h2 className={sectionHeading}>My Journey</h2>
          <p className={paragraphClasses}>{MyJourney}</p>
        </section>
        <section className="mt-6">
          <h2 className={sectionHeading}>Skills and Projects</h2>
          <p className={paragraphClasses}>{SkillsAndProjects}</p>
        </section>
        <section className="mt-6">
          <h2 className={sectionHeading}>Future Goals</h2>
          <p className={paragraphClasses}>{FutureGoals}</p>
        </section>
      </div>
    </PageWrapper>
  );
}

export default AboutPage;
