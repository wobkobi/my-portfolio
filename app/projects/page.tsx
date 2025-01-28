"use client";

import { projects } from "@/data/ProjectData";
import cn from "@/utils/cn";
import { getSortedUniqueSkills } from "@/utils/sortSkills";
import Image from "next/image";
import { useState } from "react";

const ProjectsPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    if (selectedImage === image) {
      setIsPopupOpen(false);
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
      setIsPopupOpen(true);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="flex grow flex-col items-center justify-center">
      <main className="p-4 pt-20 text-center sm:pt-28">
        <div className="sm:w-95% md:w-90% lg:w-85% xl:w-80% mx-auto w-11/12 p-4">
          <h1 className="text-indigo_dye dark:text-caribbean_current mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            My Projects
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="dark:bg-jet-400 flex flex-col items-center rounded-lg bg-gray-100 p-4 shadow">
                {/* Conditionally render the image element */}
                {project.image && (
                  <div
                    className="relative mb-4 h-60 w-full cursor-pointer overflow-hidden rounded"
                    onClick={() => handleImageClick(project.image)}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fill"
                      objectFit="contain"
                      className="bg-transparent"
                    />
                  </div>
                )}
                <h2 className="text-indigo_dye dark:text-caribbean_current mb-2 text-xl font-semibold">
                  {project.name}
                </h2>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mt-auto mb-4">
                  <h3 className="text-indigo_dye dark:text-caribbean_current mb-2 text-lg font-semibold">
                    Skills Used:
                  </h3>
                  <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    {getSortedUniqueSkills(project.skills).map(
                      (skill, index) => (
                        <li
                          key={index}
                          className="bg-indigo_dye dark:bg-caribbean_current rounded px-2 py-1 text-white">
                          {skill}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                {/* Links Section */}
                <div className="flex items-center justify-center gap-4">
                  {Array.isArray(project.links) ? (
                    <>
                      <a
                        href={project.links[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo_dye hover:text-caribbean_current dark:text-caribbean_current dark:hover:text-indigo_dye underline">
                        GitHub Repo
                      </a>
                      <span className="text-gray-400 dark:text-gray-600">
                        |
                      </span>
                      <a
                        href={project.links[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo_dye hover:text-caribbean_current dark:text-caribbean_current dark:hover:text-indigo_dye underline">
                        Live Preview
                      </a>
                    </>
                  ) : (
                    <a
                      href={project.links}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo_dye hover:text-caribbean_current dark:text-caribbean_current dark:hover:text-indigo_dye underline">
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Fullscreen Popup */}
      {isPopupOpen && selectedImage && (
        <div
          className={cn(
            "fixed inset-0 z-50 flex cursor-pointer items-center justify-center",
            "bg-black/30 backdrop-brightness-75 backdrop-filter"
          )}
          onClick={closePopup}>
          <div
            className="relative h-4/5 w-4/5 cursor-pointer overflow-hidden bg-transparent"
            onClick={closePopup} // Clicking anywhere in the popup closes it
          >
            <Image
              src={selectedImage}
              alt="Project Fullscreen"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer bg-transparent"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
