// src/components/sections/Portfolio.tsx

"use client";

import DetailBox from "@/components/portfolio/DetailBox";
import ExpandableBox from "@/components/portfolio/ExpandableBox";
import { Certifications, Education, Projects, skills, WorkExperience } from "@/data/PortfolioData";
import { DataBox } from "@/types/Types";
import cn from "@/utils/cn";
import { getSortedUniqueSkills } from "@/utils/sortSkills";
import { JSX, useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

// Enough of the skill list to show its range without turning the section into
// a wall of 70-odd tags.
const SKILL_PREVIEW_COUNT = 24;

const titleClasses =
  "text-indigo_dye dark:text-caribbean_current mb-6 text-center text-3xl font-bold sm:text-4xl md:text-5xl";
const sectionHeading =
  "text-indigo_dye dark:text-caribbean_current text-2xl font-semibold sm:text-3xl md:text-4xl";
const sectionWrapper = "mb-6";
const gridWrapper = "flex flex-wrap justify-center gap-4";
const disclosureButton =
  "mx-auto flex cursor-pointer items-center justify-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-platinum-700/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo_dye dark:hover:bg-jet-400/60 dark:focus-visible:outline-caribbean_current";
const countClasses =
  "rounded-full bg-indigo_dye px-2 py-0.5 text-sm font-medium text-white dark:bg-caribbean_current";
const toggleClasses =
  "mt-3 cursor-pointer rounded-md border border-indigo_dye/40 px-3 py-1.5 text-sm font-medium text-indigo_dye transition hover:bg-indigo_dye/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo_dye dark:border-caribbean_current/40 dark:text-caribbean_current dark:hover:bg-caribbean_current/10";

/**
 * Portfolio section.
 *
 * Education, Work Experience and Projects each sit behind a disclosure so the
 * section opens short, then Certifications, Skills and the CV download. Only
 * one box is expanded at a time across every subsection.
 * @returns The portfolio layout.
 */
function Portfolio(): JSX.Element {
  const [openSections, setOpenSections] = useState<ReadonlySet<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);
  const uniqueSkills = getSortedUniqueSkills(skills);
  const visibleSkills = showAllSkills ? uniqueSkills : uniqueSkills.slice(0, SKILL_PREVIEW_COUNT);

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
   * Open or close a subsection, collapsing any open detail box inside it on the
   * way out so it does not reappear when that subsection is opened again.
   * @param title - Heading of the subsection being toggled.
   * @param items - The items that subsection holds.
   */
  const toggleSection = (title: string, items: DataBox[]): void => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
        setExpandedId((current) => (items.some((item) => item.id === current) ? null : current));
      } else {
        next.add(title);
      }
      return next;
    });
  };

  /**
   * Render one collapsible subsection of ExpandableBoxes.
   * @param title - The heading for the subsection.
   * @param items - Array of DataBox items to render.
   * @returns A JSX element containing that subsection.
   */
  const renderSection = (title: string, items: DataBox[]): JSX.Element => {
    const isOpen = openSections.has(title);

    return (
      <section className={sectionWrapper} key={title}>
        <h3>
          <button
            type="button"
            onClick={() => toggleSection(title, items)}
            aria-expanded={isOpen}
            className={disclosureButton}
          >
            <span className={sectionHeading}>{title}</span>
            <span className={countClasses}>{items.length}</span>
            <FiChevronDown
              className={cn("h-5 w-5 transition-transform duration-200", isOpen && "rotate-180")}
              aria-hidden="true"
            />
          </button>
        </h3>

        {isOpen && (
          <div className="mt-4">
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
          </div>
        )}
      </section>
    );
  };

  return (
    <>
      <h2 className={titleClasses}>Portfolio</h2>
      {renderSection("Education", Education)}
      {renderSection("Work Experience", WorkExperience)}
      {renderSection("Projects", Projects)}

      <section className={sectionWrapper}>
        <h3 className={cn(sectionHeading, "mb-4 block")}>Certifications</h3>
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
        <h3 className={cn(sectionHeading, "mb-4 block")}>Skills</h3>
        <div className="mx-auto flex w-[85%] flex-wrap justify-center gap-1">
          {visibleSkills.map((skill) => (
            <span
              key={skill}
              className="mb-2 rounded-sm bg-indigo_dye px-3 py-1 text-xs font-medium text-white md:text-sm dark:bg-caribbean_current-500"
            >
              {skill}
            </span>
          ))}
        </div>
        {uniqueSkills.length > SKILL_PREVIEW_COUNT && (
          <button
            type="button"
            onClick={() => setShowAllSkills((prev) => !prev)}
            className={toggleClasses}
          >
            {showAllSkills ? "Show fewer skills" : "Show all " + uniqueSkills.length + " skills"}
          </button>
        )}
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
