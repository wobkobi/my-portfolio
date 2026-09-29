// src/components/sections/Portfolio.tsx

"use client";

import DetailBox from "@/components/portfolio/DetailBox";
import ExpandableBox from "@/components/portfolio/ExpandableBox";
import { Certifications, Education, Projects, skills, WorkExperience } from "@/data/PortfolioData";
import { DataBox } from "@/types/Types";
import { getSortedUniqueSkills } from "@/utils/sortSkills";
import { JSX, useEffect, useRef, useState } from "react";

const titleClasses =
  "text-indigo_dye dark:text-caribbean_current mb-6 text-center text-3xl font-bold sm:text-4xl md:text-5xl";
const sectionHeading =
  "text-indigo_dye dark:text-caribbean_current mb-4 text-center text-2xl font-semibold sm:text-3xl md:text-4xl";
const sectionWrapper = "mb-8";
const gridWrapper = "flex flex-wrap justify-center gap-4";
const groupHeading = "mb-2 text-center text-sm font-semibold text-jet-600 dark:text-jet-800";
const skillChip =
  "rounded-sm bg-indigo_dye px-3 py-1 text-xs font-medium text-white md:text-sm dark:bg-caribbean_current-500";

/**
 * Portfolio section.
 *
 * Education, Work Experience, Projects, Certifications, Skills, and CV
 * download. Only one box is expanded at a time across every subsection.
 * @returns The portfolio layout.
 */
function Portfolio(): JSX.Element {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

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
  const toggle = (id: string): void => setExpandedId((prev) => (prev === id ? null : id));

  /**
   * Render a subsection of ExpandableBoxes.
   * @param title - The heading for the subsection.
   * @param items - Array of DataBox items to render.
   * @returns A JSX element containing that subsection.
   */
  const renderSection = (title: string, items: DataBox[]): JSX.Element => (
    <section className={sectionWrapper} key={title}>
      <h3 className={sectionHeading}>{title}</h3>
      <div className={gridWrapper}>
        {items.map((item) => (
          <div key={item.id} className="w-full p-2 sm:max-w-sm md:w-1/2 lg:w-1/4">
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
              className="mx-auto w-full p-4 sm:w-3/4 md:w-2/3 lg:w-3/5 xl:max-w-2/3"
            >
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
    <>
      <h2 className={titleClasses}>Portfolio</h2>
      {renderSection("Education", Education)}
      {renderSection("Work Experience", WorkExperience)}
      {renderSection("Projects", Projects)}

      <section className={sectionWrapper}>
        <h3 className={sectionHeading}>Certifications</h3>
        <ul className="mx-auto flex max-w-2xl flex-col gap-2">
          {Certifications.map((cert) => (
            <li
              key={cert.id}
              className="flex flex-col items-center gap-1 rounded-sm bg-platinum-800 px-4 py-2 shadow-sm sm:flex-row sm:justify-between sm:text-left dark:bg-jet-400"
            >
              <span className="font-semibold text-indigo_dye dark:text-caribbean_current">
                {cert.title}
              </span>
              <span className="text-sm text-jet-600 dark:text-jet-800">{cert.year}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={sectionWrapper}>
        <h3 className={sectionHeading}>Skills</h3>
        <div className="mx-auto flex max-w-4xl flex-col gap-5">
          {skills.map((group) => (
            <div key={group.name}>
              <h4 className={groupHeading}>{group.name}</h4>
              <ul className="flex flex-wrap justify-center gap-1.5">
                {getSortedUniqueSkills(group.items).map((skill) => (
                  <li key={skill} className={skillChip}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <a
        href="/files/Harrison Raynes CV.pdf"
        download
        className="mt-4 inline-block rounded-md bg-indigo_dye px-4 py-2 text-sm font-medium text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-caribbean_current focus:ring-2 focus:ring-indigo_dye focus:outline-none md:px-6 md:py-3 md:text-lg dark:bg-caribbean_current dark:hover:bg-indigo_dye"
      >
        Download CV
      </a>
    </>
  );
}

export default Portfolio;
