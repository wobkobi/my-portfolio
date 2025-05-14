/**
 * @file AboutPage.tsx
 * @description
 * A responsive "About Me" page component that displays the user's introduction,
 * background, interests, and goals in a styled layout. Utilises utility-first
 * classes via the `cn` helper for conditional Tailwind CSS class composition.
 */

import { AboutPageProps } from "@/types/Types";
import cn from "@/utils/cn";
import { JSX } from "react";

/**
 * Renders the "About Me" page sections: Introduction, Background, Interests, and Goals.
 * @param props - Props containing content for each section.
 * @param props.Introduction - Introduction text shown under the Introduction heading.
 * @param props.Background   - Background text shown under the Background heading.
 * @param props.Interests    - Interests text shown under the Interests heading.
 * @param props.Goals        - Goals text shown under the Goals heading.
 * @returns A styled page layout with four content sections.
 */
const AboutPage: React.FC<AboutPageProps> = ({
  Introduction,
  Background,
  Interests,
  Goals,
}: AboutPageProps): JSX.Element => {
  // Common CSS classes for section headings
  const headingClasses = cn(
    "text-indigo_dye dark:text-caribbean_current mb-4 text-center text-xl font-semibold",
    "sm:text-2xl md:text-3xl"
  );

  // Common CSS classes for paragraph text
  const paragraphClasses = cn(
    "dark:text-platinum text-center text-base text-gray-600",
    "sm:text-lg md:text-xl"
  );

  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center p-4"
      )}>
      <div
        className={cn(
          "bg-platinum-900 dark:bg-jet-400 mt-20 w-11/12 rounded-sm p-4 shadow-md",
          "sm:w-4/5 md:w-3/4 lg:w-11/12 xl:w-5/6 2xl:w-4/5"
        )}>
        <h1
          className={cn(
            "text-indigo_dye dark:text-caribbean_current mb-6 text-center text-2xl font-bold",
            "sm:text-3xl md:text-4xl lg:text-5xl"
          )}>
          About Me
        </h1>

        {/* Introduction Section */}
        <section className={cn("mt-8")}>
          <h2 className={headingClasses}>Introduction</h2>
          <p className={paragraphClasses}>{Introduction}</p>
        </section>

        {/* Background Section */}
        <section className={cn("mt-6")}>
          <h2 className={headingClasses}>Background</h2>
          <p className={paragraphClasses}>{Background}</p>
        </section>

        {/* Interests Section */}
        <section className={cn("mt-6")}>
          <h2 className={headingClasses}>Interests</h2>
          <p className={paragraphClasses}>{Interests}</p>
        </section>

        {/* Goals Section */}
        <section className={cn("mt-6")}>
          <h2 className={headingClasses}>Goals</h2>
          <p className={paragraphClasses}>{Goals}</p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
