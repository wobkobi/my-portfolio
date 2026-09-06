// src/app/projects/page.tsx
/**
 * @description
 * Displays a grid of project cards with images, descriptions, skills and links.
 */

"use client";

import PageWrapper from "@/components/PageWrapper";
import { projects } from "@/data/ProjectData";
import cn from "@/utils/cn";
import { getSortedUniqueSkills } from "@/utils/sortSkills";
import Image from "next/image";
import { JSX, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const titleClasses =
  "text-indigo_dye dark:text-caribbean_current mb-6 text-center text-3xl font-bold sm:text-4xl md:text-5xl";
const buttonClass =
  "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition dark:bg-indigo_dye bg-caribbean_current text-white dark:hover:bg-caribbean_current hover:bg-indigo_dye";

/**
 * ProjectsPage component.
 * @returns The projects page layout.
 */
function ProjectsPage(): JSX.Element {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  /**
   * Toggle the lightbox for a project image, closing it if that image is already open.
   * @param image - Path of the project image that was clicked.
   */
  const handleImageClick = (image: string): void => {
    if (selectedImage === image) {
      setIsPopupOpen(false);
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
      setIsPopupOpen(true);
    }
  };
  /**
   * Dismiss the image lightbox and clear the current selection.
   */
  const closePopup = (): void => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <PageWrapper>
        <h1 className={titleClasses}>My Projects</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center rounded-lg bg-platinum-800 p-4 shadow dark:bg-jet-400"
            >
              <div
                className={cn(
                  "relative mb-4 h-60 w-full overflow-hidden rounded",
                  project.image && "cursor-pointer",
                )}
                onClick={() => project.image && handleImageClick(project.image)}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="bg-transparent object-contain"
                  />
                ) : (
                  <div className="invisible h-full w-full" />
                )}
              </div>

              <h2 className="mb-2 text-center text-xl font-semibold text-indigo_dye dark:text-caribbean_current">
                {project.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
                {project.description}
              </p>

              <div className="mt-auto mb-4">
                <h3 className="mb-2 text-center text-lg font-semibold text-indigo_dye dark:text-caribbean_current">
                  Skills Used:
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 flex flex-wrap justify-center gap-2 text-sm">
                  {getSortedUniqueSkills(project.skills).map((skill, i) => (
                    <li
                      key={i}
                      className="rounded bg-indigo_dye px-2 py-1 text-white dark:bg-caribbean_current"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={Array.isArray(project.links) ? project.links[0] : project.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  <FiGithub className="h-4 w-4" aria-hidden="true" />
                  <span>GitHub Repo</span>
                </a>
                {Array.isArray(project.links) && (
                  <a
                    href={project.links[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    <FiExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
      {isPopupOpen && selectedImage && (
        <div
          className="bg-black/30 fixed inset-0 z-50 flex items-center justify-center backdrop-brightness-75 backdrop-filter"
          onClick={closePopup}
        >
          <div className="relative h-4/5 w-4/5 cursor-pointer overflow-hidden" onClick={closePopup}>
            <Image
              src={selectedImage}
              alt="Project Fullscreen"
              fill
              className="bg-transparent object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectsPage;
