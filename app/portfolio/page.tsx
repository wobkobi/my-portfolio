/**
 * @file PortfolioPage.tsx
 * @description
 * Renders the portfolio page, including sections for Education, Work Experience,
 * Projects and Skills. Allows expansion of detail boxes with smooth scrolling into view.
 */
"use client";
import DetailBox from "@/components/portfolio/DetailBox";
import ExpandableBox from "@/components/portfolio/ExpandableBox";
import {
  Education,
  Projects,
  WorkExperience,
  skills,
} from "@/data/PortfolioData";
import { DataBox } from "@/types/Types";
import cn from "@/utils/cn";
import { getSortedUniqueSkills } from "@/utils/sortSkills";
import React, { JSX, useEffect, useRef, useState } from "react";

/**
 * PortfolioPage component state and render logic.
 *
 * @returns {JSX.Element} The portfolio page layout.
 */
function PortfolioPage(): JSX.Element {
  const [expandedEduId, setExpandedEduId] = useState<string | null>(null);
  const [expandedWorkId, setExpandedWorkId] = useState<string | null>(null);
  const [expandedProjectsId, setExpandedProjectsId] = useState<string | null>(
    null
  );
  const [hasScrolled, setHasScrolled] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  const sortedSkills = getSortedUniqueSkills(skills);

  /**
   * Toggle expansion of an education item.
   * @param {string} id - The ID of the education item.
   */
  const toggleEducation = (id: string): void => {
    setExpandedEduId(expandedEduId === id ? null : id);
  };

  /**
   * Toggle expansion of a work experience item.
   * @param {string} id - The ID of the work experience item.
   */
  const toggleWorkExperience = (id: string): void => {
    setExpandedWorkId(expandedWorkId === id ? null : id);
  };

  /**
   * Toggle expansion of a project item.
   * @param {string} id - The ID of the project item.
   */
  const toggleProjects = (id: string): void => {
    setExpandedProjectsId(expandedProjectsId === id ? null : id);
  };

  // Scroll into view when a detail box is expanded
  useEffect(() => {
    if (
      (expandedEduId || expandedWorkId || expandedProjectsId) &&
      !hasScrolled
    ) {
      const element = detailsRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const withinViewport =
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);
        if (!withinViewport) {
          element.scrollIntoView({ behavior: "smooth", block: "nearest" });
          setHasScrolled(true);
        }
      }
    }
  }, [expandedEduId, expandedWorkId, expandedProjectsId, hasScrolled]);

  // Reset scroll flag when toggles change
  useEffect(() => {
    setHasScrolled(false);
  }, [expandedEduId, expandedWorkId, expandedProjectsId]);

  /**
   * Render a section with expandable summary boxes and a detail view.
   *
   * @param {DataBox[]} data - Array of items to render.
   * @param {string} title - Section heading.
   * @param {string|null} itemID - Currently expanded item ID.
   * @param {(id: string) => void} handleToggle - Toggle handler function.
   * @param {React.RefObject<HTMLDivElement>} ref - Ref for scrolling.
   * @returns {JSX.Element} The rendered section.
   */
  const renderSectionWithDetailBox = (
    data: DataBox[],
    title: string,
    itemID: string | null,
    handleToggle: (id: string) => void,
    ref: React.RefObject<HTMLDivElement | null>
  ): JSX.Element => (
    <>
      <h2
        className={cn(
          "text-indigo_dye dark:text-caribbean_current mt-8 mb-4 text-center text-2xl font-semibold"
        )}>
        {title}
      </h2>
      <div className="flex flex-wrap justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full p-4 sm:max-w-sm md:w-1/2 lg:w-1/4">
            <ExpandableBox
              id={item.id}
              title={item.title}
              summary={item.summary}
              isExpanded={itemID === item.id}
              onToggle={handleToggle}
            />
          </div>
        ))}
      </div>
      {itemID && (
        <div
          ref={ref}
          className="mx-auto w-full p-4 sm:w-3/4 md:w-2/3 lg:w-3/5 xl:max-w-2/3">
          {data
            .filter((item) => item.id === itemID)
            .map((item, idx) => (
              <DetailBox
                key={`${item.id}-${idx}`}
                id={item.id}
                details={item.details}
                isVisible={itemID === item.id}
                subtitle={item.subtitle || ""}
                link={item.link}
              />
            ))}
        </div>
      )}
    </>
  );

  return (
    <div className={cn("flex grow flex-col items-center justify-center")}>
      <main className={cn("p-4 pt-20 text-center sm:pt-28")}>
        <div
          className={cn(
            "sm:w-95% md:w-90% lg:w-85% xl:w-80% mx-auto w-11/12 p-4"
          )}>
          <h1
            className={cn(
              "text-indigo_dye dark:text-caribbean_current mb-6 text-3xl font-bold sm:text-4xl md:text-5xl"
            )}>
            Portfolio
          </h1>

          {renderSectionWithDetailBox(
            Education,
            "Education",
            expandedEduId,
            toggleEducation,
            detailsRef
          )}
          {renderSectionWithDetailBox(
            WorkExperience,
            "Work Experience",
            expandedWorkId,
            toggleWorkExperience,
            detailsRef
          )}
          {renderSectionWithDetailBox(
            Projects,
            "Projects",
            expandedProjectsId,
            toggleProjects,
            detailsRef
          )}

          <section className={cn("mb-8")}>
            <h2
              className={cn(
                "text-indigo_dye dark:text-caribbean_current mb-6 text-2xl font-semibold"
              )}>
              Skills
            </h2>
            <div
              className={cn(
                "mx-auto flex w-[85%] flex-wrap justify-center gap-2"
              )}>
              {sortedSkills.map((skill) => (
                <span
                  key={skill}
                  className={cn(
                    "bg-indigo_dye dark:bg-caribbean_current-500 mb-2 rounded-sm px-3 py-1 text-xs font-medium text-white md:text-sm"
                  )}>
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <a
            href="/files/HarrisonRaynesResume.pdf"
            download="HarrisonRaynesResume.pdf"
            className="bg-indigo_dye hover:bg-caribbean_current focus:ring-indigo_dye focus:ring-opacity-50 dark:bg-caribbean_current dark:hover:bg-indigo_dye inline-block rounded-md px-4 py-2 text-sm font-medium text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 focus:ring-2 focus:outline-hidden md:px-6 md:py-3 md:text-lg">
            Download CV
          </a>
        </div>
      </main>
    </div>
  );
}

export default PortfolioPage;
