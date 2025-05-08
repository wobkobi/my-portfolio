"use client";

import { projects } from "@/data/ProjectData";
import cn from "@/utils/cn";
import { getSortedUniqueSkills } from "@/utils/sortSkills";
import Image from "next/image";
import { JSX, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectsPage = (): JSX.Element => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const buttonClass = cn(
    "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition",
    // light / dark backgrounds
    "dark:bg-indigo_dye bg-caribbean_current text-white",
    // hover: in light mode use dark-mode bg, in dark mode use light-mode bg
    "dark:hover:bg-caribbean_current hover:bg-indigo_dye"
  );

  return (
    <div className={cn("flex grow flex-col items-center justify-center")}>
      <main className={cn("p-4 pt-20 text-center sm:pt-28")}>
        <div
          className={cn(
            "mx-auto p-4 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12"
          )}>
          <h1
            className={cn(
              "text-indigo_dye dark:text-caribbean_current mb-6",
              "text-3xl font-bold sm:text-4xl md:text-5xl"
            )}>
            My Projects
          </h1>
          <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3")}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={cn(
                  "dark:bg-jet-400 flex flex-col items-center",
                  "rounded-lg bg-gray-100 p-4 shadow"
                )}>
                {project.image && (
                  <div
                    className={cn(
                      "relative mb-4 h-60 w-full cursor-pointer overflow-hidden rounded"
                    )}
                    onClick={() => handleImageClick(project.image)}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className={cn("bg-transparent, object-contain")}
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
                <p className={cn("mb-4 text-gray-700 dark:text-gray-300")}>
                  {project.description}
                </p>
                <div className={cn("mt-auto mb-4")}>
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
                        className={cn(
                          "bg-indigo_dye dark:bg-caribbean_current",
                          "rounded px-2 py-1 text-white"
                        )}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={cn("flex flex-wrap justify-center gap-3")}>
                  <a
                    href={
                      Array.isArray(project.links)
                        ? project.links[0]
                        : project.links
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}>
                    <FiGithub className={cn("h-4 w-4")} />
                    <span>GitHub Repo</span>
                  </a>
                  {Array.isArray(project.links) && (
                    <a
                      href={project.links[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClass}>
                      <FiExternalLink className={cn("h-4 w-4")} />
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
            "fixed inset-0 z-50 flex cursor-pointer items-center justify-center",
            "bg-black/30 backdrop-brightness-75 backdrop-filter"
          )}
          onClick={closePopup}>
          <div
            className={cn(
              "relative h-4/5 w-4/5 cursor-pointer overflow-hidden bg-transparent"
            )}
            onClick={closePopup}>
            <Image
              src={selectedImage}
              alt="Project Fullscreen"
              fill
              className={cn("bg-transparent, cursor-pointer object-contain")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
