"use client";
import DetailBox from "@/components/DetailBox";
import ExpandableBox from "@/components/ExpandableBox";
import {
  Education,
  Projects,
  WorkExperience,
  sortedSkills,
} from "@/data/portfolioData";
import cn from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

export default function PortfolioPage() {
  const [expandedEduId, setExpandedEduId] = useState<string | null>(null);
  const [expandedWorkId, setExpandedWorkId] = useState<string | null>(null);
  const [expandedProjectsId, setExpandedProjectsId] = useState<string | null>(
    null
  );
  const [hasScrolled, setHasScrolled] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  const toggleEducation = (id: string) => {
    setExpandedEduId(expandedEduId === id ? null : id);
  };

  const toggleWorkExperience = (id: string) => {
    setExpandedWorkId(expandedWorkId === id ? null : id);
  };

  const toggleProjects = (id: string) => {
    setExpandedProjectsId(expandedProjectsId === id ? null : id);
  };

  useEffect(() => {
    if (
      (expandedEduId || expandedWorkId || expandedProjectsId) &&
      !hasScrolled
    ) {
      if (detailsRef.current) {
        const element = detailsRef.current;
        const rect = element.getBoundingClientRect();
        const isFullyVisible =
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);

        if (!isFullyVisible) {
          element.scrollIntoView({ behavior: "smooth", block: "nearest" });
          setHasScrolled(true);
        }
      }
    }
  }, [expandedEduId, expandedWorkId, expandedProjectsId, hasScrolled]);

  useEffect(() => {
    setHasScrolled(false);
  }, [expandedEduId, expandedWorkId, expandedProjectsId]);

  const renderSectionWithDetailBox = (
    data: any[],
    title: string,
    itemID: string | null,
    handleToggle: (id: string) => void,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    return (
      <>
        <section className={cn(" mb-8")}>
          <h2
            className={cn(
              "mb-4 mt-8 text-center text-2xl font-semibold text-indigo_dye dark:text-caribbean_current"
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
              className="xl:max-w-2/3 mx-auto w-full p-4 sm:w-3/4 md:w-2/3 lg:w-3/5">
              {data
                .filter((item) => item.id === itemID)
                .map((item, index) => (
                  <DetailBox
                    key={`${item.id}-${index}`}
                    id={item.id}
                    details={item.details}
                    isVisible={true}
                    subtitle={item.subtitle}
                    link={item.link}
                  />
                ))}
            </div>
          )}
        </section>
      </>
    );
  };

  return (
    <div className={cn("min-h-screen bg-white dark:bg-jet")}>
      <main className={cn("p-4 pt-20 text-center sm:pt-28")}>
        <div
          className={cn("sm:w-95% md:w-90% lg:w-85% xl:w-80% mx-auto w-11/12")}>
          <h1
            className={cn(
              "mb-6 text-3xl font-bold text-indigo_dye dark:text-caribbean_current sm:text-4xl md:text-5xl"
            )}>
            Portfolio
          </h1>
          <section className={cn(" mb-8")}>
            {renderSectionWithDetailBox(
              Education,
              "Education",
              expandedEduId,
              toggleEducation,
              detailsRef
            )}
          </section>
          <section className={cn(" mb-8")}>
            {renderSectionWithDetailBox(
              WorkExperience,
              "Work Experience",
              expandedWorkId,
              toggleWorkExperience,
              detailsRef
            )}
          </section>
          <section className={cn(" mb-8 ")}>
            {renderSectionWithDetailBox(
              Projects,
              "Projects",
              expandedProjectsId,
              toggleProjects,
              detailsRef
            )}
          </section>
          <section className={cn(" mb-8 ")}>
            <h2
              className={cn(
                "mb-6 text-2xl font-semibold text-indigo_dye dark:text-caribbean_current"
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
                    "mb-2 rounded bg-indigo_dye px-3 py-1 text-xs font-medium text-white dark:bg-caribbean_current-500 md:text-sm"
                  )}>
                  {skill}
                </span>
              ))}
            </div>
          </section>
          <a
            href="/files/HarrisonRaynesResume.pdf"
            download="HarrisonRaynesResume.pdf"
            className={cn(
              "mt-6 inline-block rounded-md bg-indigo_dye px-4 py-2 text-sm font-medium text-white shadow-lg transition duration-300 ease-in-out hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye md:px-6 md:py-3 md:text-lg"
            )}>
            Download CV
          </a>
        </div>
      </main>
    </div>
  );
}
