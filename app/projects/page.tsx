// app/projects/page.tsx
/**
 * @file ProjectsPage.tsx
 * @description
 * Displays a grid of project cards with images, descriptions, skills and links.
 */

"use client";

import { projects } from "@/data/ProjectData";
import cn from "@/utils/cn";
import { getSortedUniqueSkills } from "@/utils/sortSkills";
import Image from "next/image";
import { JSX, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

/**
 * ProjectsPage component.
 * @returns The projects page layout.
 */
function ProjectsPage(): JSX.Element {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerClasses = cn("flex grow flex-col items-center justify-center");
  const mainClasses = cn("p-4 pt-6 text-center sm:pt-7");
  const contentWrapper = cn(
    "mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 p-4"
  );

  const titleClasses = cn(
    "text-indigo_dye dark:text-caribbean_current mb-6 text-center text-3xl font-bold",
    "sm:text-4xl md:text-5xl"
  );
  const buttonClass = cn(
    "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition",
    "dark:bg-indigo_dye bg-caribbean_current text-white",
    "dark:hover:bg-caribbean_current hover:bg-indigo_dye"
  );

  const handleImageClick = (image: string): void => {
    if (selectedImage === image) {
      setIsPopupOpen(false);
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
      setIsPopupOpen(true);
    }
  };
  const closePopup = (): void => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={containerClasses}>
      <main className={mainClasses}>
        <div className={contentWrapper}>
          <h1 className={titleClasses}>My Projects</h1>
          <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3")}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={cn(
                  "dark:bg-jet-400 flex flex-col items-center",
                  "bg-platinum-800 rounded-lg p-4 shadow"
                )}>
                {project.image && (
                  <div
                    className="relative mb-4 h-60 w-full cursor-pointer overflow-hidden rounded"
                    onClick={() => handleImageClick(project.image)}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="bg-transparent object-contain"
                    />
                  </div>
                )}
                <h2
                  className={cn(
                    "text-indigo_dye dark:text-caribbean_current mb-2",
                    "text-xl font-semibold"
                  )}>
                  {project.name}
                </h2>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mt-auto mb-4">
                  <h3
                    className={cn(
                      "text-indigo_dye dark:text-caribbean_current mb-2",
                      "text-lg font-semibold"
                    )}>
                    Skills Used:
                  </h3>
                  <ul
                    className={cn(
                      "flex flex-wrap justify-center gap-2",
                      "text-sm text-gray-700 dark:text-gray-300"
                    )}>
                    {getSortedUniqueSkills(project.skills).map((skill, i) => (
                      <li
                        key={i}
                        className="bg-indigo_dye dark:bg-caribbean_current rounded px-2 py-1 text-white">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={
                      Array.isArray(project.links)
                        ? project.links[0]
                        : project.links
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}>
                    <FiGithub className="h-4 w-4" aria-hidden="true" />
                    <span>GitHub Repo</span>
                  </a>
                  {Array.isArray(project.links) && (
                    <a
                      href={project.links[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClass}>
                      <FiExternalLink className="h-4 w-4" aria-hidden="true" />
                      <span>Live Preview</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {isPopupOpen && selectedImage && (
        <div
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-brightness-75 backdrop-filter"
          )}
          onClick={closePopup}>
          <div
            className="relative h-4/5 w-4/5 cursor-pointer overflow-hidden"
            onClick={closePopup}>
            <Image
              src={selectedImage}
              alt="Project Fullscreen"
              fill
              className="bg-transparent object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;
