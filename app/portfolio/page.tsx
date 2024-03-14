"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import ExpandableBox from "@/components/ExpandableBox"; // Adjust the path as necessary

// FIX THIS TOO

const PortfolioPage = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const EducationSection = () => {
    const Education = [
      { id: "edu1", title: "Bachelor of Computer and Information Sciences", summary: "2021 - 2023", details: ["Majored in Software Development & Networks and Security", "Average grade of B+"] },
    ];
    return (
      <section className={cn("mb-12")}>
        <h2 className={cn("mb-6 text-2xl font-semibold text-indigo_dye dark:text-caribbean_current")}>Work Experience</h2>
        <div className={cn("flex flex-wrap items-stretch justify-center gap-4")}>
          {Education.map((edu) => (
            <ExpandableBox key={edu.id} id={edu.id} title={edu.title} summary={edu.summary} expandedId={expandedId} setExpandedId={setExpandedId}>
              <ul className="list-disc pl-5 pr-5 text-left">
                {edu.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </ExpandableBox>
          ))}
        </div>
      </section>
    );
  };
  const WorkExperienceSection = () => {
    const WorkExperience = [
      {
        id: "work1",
        title: "Lifeguard at Mt Albert Aquatic Centre",
        summary: "10/2019 - 05/2023",
        details: [
          "Ensured strong safety measures, preventing the need for water rescues during my time.",
          "Consistently maintained a safe swimming area for all guests.",
          "Quickly and effectively handled emergencies, ensuring everyone's safety.",
          "Regularly checked and kept the facility safe for visitors.",
          "Took care of end-of-day cleaning, keeping the facility neat and tidy.",
          "Provided helpful and friendly service, responding to visitors' needs and questions.",
        ],
      },
      {
        id: "work2",
        title: "Lifeguard for Waitakere Water Polo",
        summary: "06/2020 - 09/2020",
        details: ["Assisted my former water polo club with lifeguard duties.", "Worked at West Wave Aquatic Center due to a shortage of lifeguards."],
      },
      {
        id: "work3",
        title: "Coach for Point Chevalier School",
        summary: "11/2020 - 12/2020",
        details: ["Coached a primary school flippa ball team.", "Brought experience from playing water polo up until 2020.", "The ages of the children ranged from 8 to 11."],
      },
      {
        id: "work4",
        title: "Night ﬁll Long Life Assistant for Woolworths",
        summary: "11/2022 - 06/2023",
        details: [
          "Regularly worked night shifts, contributing to the store's 24/7 operation.",
          "Handled heavy pallets and efficiently stocked shelves, ensuring product availability.",
          "Diligently prepared the store for its 7 am opening, ensuring a smooth start to the day.",
          "Occasionally supported the team during daytime shifts as needed.",
          "Worked reliably every Friday and Saturday night, collaborating effectively with a team of 4 to 5 members.",
        ],
      },
    ];

    return (
      <section className={cn("mb-12")}>
        <h2 className={cn("mb-6 text-2xl font-semibold text-indigo_dye dark:text-caribbean_current")}>Work Experience</h2>
        <div className={cn("flex flex-wrap items-stretch justify-center gap-4")}>
          {WorkExperience.map((work) => (
            <ExpandableBox key={work.id} id={work.id} title={work.title} summary={work.summary} expandedId={expandedId} setExpandedId={setExpandedId}>
              <ul className="pl-5 pr-5 text-left">
                {work.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </ExpandableBox>
          ))}
        </div>
      </section>
    );
  };
  const ProjectsSection = () => {
    const projects = [
      {
        id: "project1",
        title: "Chat Bot Platform",
        summary: "02/2023 - 11/2023",
        details: ["Engaged in a comprehensive project to design and implement a chatbot, as a key part of my degree's coursework, in collaboration with Counties Manukau."],
      },
      {
        id: "project2",
        title: "RamenNFT",
        summary: "12/2021 - 02/2022",
        details: ["Detailed information about Project 1."],
      },
      {
        id: "project3",
        title: "iFridge",
        summary: "07/2022 - 11/2022",
        details: ["Detailed information about Project 1."],
      },
      {
        id: "project4",
        title: "Project 1",
        summary: "Short summary of project",
        details: ["Detailed information about Project 1."],
      },
    ];
    return (
      <section className={cn("mb-12")}>
        <h2 className={cn("mb-6 text-2xl font-semibold text-indigo_dye dark:text-caribbean_current")}>Projects</h2>
        <div className={cn("flex flex-wrap items-stretch justify-center gap-4")}>
          {projects.map((project) => (
            <ExpandableBox key={project.id} id={project.id} title={project.title} summary={project.summary} expandedId={expandedId} setExpandedId={setExpandedId}>
              <ul className="pl-5 pr-5 text-left">
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </ExpandableBox>
          ))}
        </div>
      </section>
    );
  };
  const SkillsSection = () => {
    const skills = [
      "Adaptability",
      "Attentive Listening",
      "C Programming",
      "Communication Skills",
      "CSS",
      "Customer Service",
      "Flexible Attitude",
      "Git",
      "Gmail",
      "HTML",
      "Information Technology Services",
      "Java Programming",
      "Linux",
      "Microsoft Excel",
      "Microsoft Office 365",
      "Microsoft Windows Server",
      "Microsoft Word",
      "Multitasking",
      "OneDrive",
      "PHP Programming",
      "Powershell Scripting",
      "Proactive Attitude",
      "Problem Solving",
      "Python Programming",
      "Resilience",
      "SQL",
      "Task management",
      "Team Work",
      "Troubleshooting",
      "TypeScript Programming",
      "Virtualisation",
      "React.JS",
      "Next.JS",
    ];

    // Sort the skills array alphabetically
    const sortedSkills = skills.sort((a, b) => a.localeCompare(b));

    return (
      <div className="bg-white dark:bg-jet">
        <main className="p-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-indigo_dye dark:text-caribbean_current">Skills</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {sortedSkills.map((skill) => (
              <span key={skill} className="mb-2 rounded bg-indigo_dye px-3 py-1 text-sm font-medium text-white dark:bg-caribbean_current">
                {skill}
              </span>
            ))}
          </div>
        </main>
      </div>
    );
  };
  return (
    <div className={cn("min-h-screen ")}>
      <main className={cn("mx-auto max-w-[80%] p-4 pt-20 text-center")}>
        <h1 className={cn("mx-auto mb-8 max-w-[60%] text-4xl font-bold text-indigo_dye dark:text-caribbean_current")}>Portfolio</h1>

        <EducationSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
    </div>
  );
};
export default PortfolioPage;
