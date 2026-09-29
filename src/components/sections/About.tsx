// src/components/sections/About.tsx

import { AboutMe, FutureGoals, MyJourney, SkillsAndProjects } from "@/data/AboutMeData";
import { JSX } from "react";

const cardClasses = "bg-platinum-700 dark:bg-jet-300 rounded-sm p-4 shadow-md";
const titleClasses =
  "text-indigo_dye dark:text-caribbean_current mb-6 text-center text-3xl font-bold sm:text-4xl md:text-5xl";
const sectionHeading =
  "text-indigo_dye dark:text-caribbean_current mb-4 text-center text-xl font-semibold sm:text-2xl md:text-3xl";
// Left aligned and capped near 62 characters: four stacked paragraphs of prose
// are hard to read centred and hard to track across the full band width.
const paragraphClasses =
  "dark:text-platinum mx-auto max-w-[62ch] text-left text-base leading-relaxed text-jet-600 sm:text-lg";

/**
 * About section.
 * @returns The About Me layout.
 */
function About(): JSX.Element {
  return (
    <>
      <h2 className={titleClasses}>About Me</h2>
      <div className={cardClasses}>
        <section className="mt-6">
          <h3 className={sectionHeading}>Introduction</h3>
          <p className={paragraphClasses}>{AboutMe}</p>
        </section>
        <section className="mt-6">
          <h3 className={sectionHeading}>My Journey</h3>
          <p className={paragraphClasses}>{MyJourney}</p>
        </section>
        <section className="mt-6">
          <h3 className={sectionHeading}>Skills and Projects</h3>
          <p className={paragraphClasses}>{SkillsAndProjects}</p>
        </section>
        <section className="mt-6">
          <h3 className={sectionHeading}>Future Goals</h3>
          <p className={paragraphClasses}>{FutureGoals}</p>
        </section>
      </div>
    </>
  );
}

export default About;
