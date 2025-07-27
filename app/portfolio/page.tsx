// app/portfolio/page.tsx
/**
 * @file PortfolioPage.tsx
 * @description
 * Renders the Portfolio page with Education, Work Experience, Projects,
 * Certifications, Skills, and CV, using a centered card container for the
 * main content to match other site pages.
 */

"use client";

import DetailBox from "@/components/portfolio/DetailBox";
import ExpandableBox from "@/components/portfolio/ExpandableBox";
import {
  Certifications,
  Education,
  Projects,
  skills,
  WorkExperience,
} from "@/data/PortfolioData";
import { DataBox } from "@/types/Types";
import cn from "@/utils/cn";
import { getSortedUniqueSkills } from "@/utils/sortSkills";
import { JSX, useEffect, useRef, useState } from "react";

/**
 * PortfolioPage component.
 * @returns The portfolio page layout.
 */
function PortfolioPage(): JSX.Element {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const uniqueSkills = getSortedUniqueSkills(skills);

  const containerClasses = cn("flex grow flex-col items-center justify-center");
  const mainClasses = cn("p-4 pt-16 text-center sm:pt-7");
  const contentWrapper = cn(
    "mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 p-4"
  );

  const titleClasses = cn(
    "text-indigo_dye dark:text-caribbean_current mb-6",
    "text-center text-3xl font-bold sm:text-4xl md:text-5xl"
  );
  const sectionHeading = cn(
    "text-indigo_dye dark:text-caribbean_current mb-4",
    "text-center text-2xl font-semibold sm:text-3xl md:text-4xl"
  );
  const sectionWrapper = cn("mb-8");
  const gridWrapper = cn("flex flex-wrap justify-center gap-4");

  useEffect(() => {
    if (expandedId && detailRef.current) {
      detailRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [expandedId]);

  /**
   * Toggle which item is expanded.
   * @param id - The id of the item to expand or collapse.
   * @returns void
   */
  const toggle = (id: string): void =>
    setExpandedId((prev) => (prev === id ? null : id));

  /**
   * Render a section of ExpandableBoxes.
   * @param title - The heading for the section.
   * @param items - Array of DataBox items to render.
   * @returns A JSX element containing that section.
   */
  const renderSection = (title: string, items: DataBox[]): JSX.Element => (
    <section className={sectionWrapper} key={title}>
      <h2 className={sectionHeading}>{title}</h2>
      <div className={gridWrapper}>
        {items.map((item) => (
          <div
            key={item.id}
            className={cn("w-full p-4 sm:max-w-sm md:w-1/2 lg:w-1/4")}>
            <ExpandableBox
              id={item.id}
              title={item.title}
              summary={item.summary}
              isExpanded={expandedId === item.id}
              onToggle={toggle}
            />
          </div>
        ))}
      </div>

      {expandedId &&
        items
          .filter((it) => it.id === expandedId)
          .map((it) => (
            <div
              key={it.id}
              ref={detailRef}
              className={cn(
                "mx-auto w-full p-4 sm:w-3/4 md:w-2/3 lg:w-3/5 xl:max-w-2/3"
              )}>
              <DetailBox
                id={it.id}
                subtitle={it.subtitle || ""}
                details={it.details}
                skills={it.skills}
                isVisible
                link={it.link}
              />
            </div>
          ))}
    </section>
  );

  return (
    <div className={containerClasses}>
      <main className={mainClasses}>
        <h1 className={titleClasses}>Portfolio</h1>
        <div className={contentWrapper}>
          {renderSection("Education", Education)}
          {renderSection("Work Experience", WorkExperience)}
          {renderSection("Projects", Projects)}

          <section className={sectionWrapper}>
            <h2 className={sectionHeading}>Certifications</h2>
            <div className={gridWrapper}>
              {Certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex w-full items-center justify-center p-4 sm:max-w-sm md:w-1/2 lg:w-1/4">
                  <div
                    className={cn(
                      "h-28 w-full",
                      "bg-platinum-800",
                      "dark:bg-jet-400",
                      "rounded-sm p-3 shadow-md",
                      "flex flex-col items-center justify-center",
                      "transition-colors duration-200"
                    )}>
                    <h3
                      className={cn(
                        "text-indigo_dye dark:text-caribbean_current",
                        "text-center text-base font-semibold",
                        "break-words"
                      )}>
                      {cert.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 text-sm text-gray-200 dark:text-gray-400",
                        "text-center"
                      )}>
                      {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={sectionWrapper}>
            <h2 className={sectionHeading}>Skills</h2>
            <div
              className={cn(
                "flex flex-wrap justify-center gap-1",
                "mx-auto w-[85%]"
              )}>
              {uniqueSkills.map((skill) => (
                <span
                  key={skill}
                  className={cn(
                    "bg-indigo_dye dark:bg-caribbean_current-500 mb-2",
                    "rounded-sm px-3 py-1 text-xs font-medium text-white",
                    "md:text-sm"
                  )}>
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <a
            href="/files/Harrison Raynes CV.pdf"
            download
            className={cn(
              "bg-indigo_dye hover:bg-caribbean_current focus:ring-indigo_dye focus:ring-opacity-50",
              "dark:bg-caribbean_current dark:hover:bg-indigo_dye",
              "inline-block rounded-md px-4 py-2 text-sm font-medium text-white shadow-lg",
              "transition duration-300 ease-in-out hover:scale-105 focus:ring-2 focus:outline-none",
              "md:px-6 md:py-3 md:text-lg"
            )}>
            Download CV
          </a>
        </div>
      </main>
    </div>
  );
}

export default PortfolioPage;
