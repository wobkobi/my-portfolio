"use client";
import DetailBox from "@/components/DetailBox";
import ExpandableBox from "@/components/ExpandableBox";
import { Education, Projects, WorkExperience, sortedSkills } from "@/data/portfolioData";
import cn from "@/utils/cn";
import React, { useState } from "react";

const PortfolioPage: React.FC = () => {
  const [expandedEducationId, setExpandedEducationId] = useState<string | null>(null);
  const [expandedWorkExperienceId, setExpandedWorkExperienceId] = useState<string | null>(null);
  const [expandedProjectsId, setExpandedProjectsId] = useState<string | null>(null);

  const toggleEducation = (id: string) => {
    setExpandedEducationId(expandedEducationId === id ? null : id);
  };

  const toggleWorkExperience = (id: string) => {
    setExpandedWorkExperienceId(expandedWorkExperienceId === id ? null : id);
  };

  const toggleProjects = (id: string) => {
    setExpandedProjectsId(expandedProjectsId === id ? null : id);
  };

  const renderSectionWithDetailBox = (data: any[], title: string, itemID: string | null, handleToggle: (id: string) => void) => {
    return (
      <>
        <h2 className={cn("mb-0 mt-8 text-2xl font-semibold text-indigo_dye dark:text-caribbean_current")}>{title}</h2>
        <div className={cn("transition-all duration-500 ease-in-out")}>
          <div
            className={cn(
              "mx-auto flex w-full grid-cols-1 justify-center gap-4  p-4 transition-all duration-500 ease-in-out sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 ",
              itemID ? "mb-8" : "mb-0",
            )}>
            {data.map((item) => (
              <div key={item.id} className={cn("flex w-full min-w-0  max-w-xs flex-col items-stretch p-4 ")}>
                <ExpandableBox id={item.id} title={item.title} summary={item.summary} isExpanded={itemID === item.id} onToggle={handleToggle} />
              </div>
            ))}
          </div>
          {itemID && (
            <div className={cn("mx-auto my-8 w-full transition-all duration-500 ")}>
              {data
                .filter((item) => item.id === itemID)
                .map((item, index) => (
                  <DetailBox key={`${item.id}-${index}`} id={item.id} details={item.details} isVisible={true} subtitle={item.subtitle} link={item.link} />
                ))}
            </div>
          )}
        </div>
      </>
    );
  };
  return (
    <div className={cn("min-h-screen bg-white dark:bg-jet")}>
      <main className={cn("p-4 pt-20 text-center")}>
        <div className={cn("md:w-85% mx-auto w-11/12 sm:w-3/4 lg:w-4/5")}>
          <h1 className={cn("mb-6 text-4xl font-bold text-indigo_dye dark:text-caribbean_current")}>Portfolio</h1>
          <section className={cn(" mb-6")}>{renderSectionWithDetailBox(Education, "Education", expandedEducationId, toggleEducation)}</section>
          <section className={cn(" mb-6")}>{renderSectionWithDetailBox(WorkExperience, "Work Experience", expandedWorkExperienceId, toggleWorkExperience)}</section>
          <section className={cn(" mb-6")}>{renderSectionWithDetailBox(Projects, "Projects", expandedProjectsId, toggleProjects)}</section>
          <section className={cn(" mb-6")}>
            <h2 className={cn("mb-6 text-2xl font-semibold text-indigo_dye dark:text-caribbean_current")}>Skills</h2>
            <div className={cn("mx-auto flex w-[85%] flex-wrap justify-center gap-2")}>
              {sortedSkills.map((skill) => (
                <span key={skill} className={cn("mb-2 rounded bg-indigo_dye px-3 py-1 text-sm font-medium text-white dark:bg-caribbean_current")}>
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PortfolioPage;
