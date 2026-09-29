// src/components/sections/Projects.tsx

import { projects } from "@/data/ProjectData";
import { getSortedUniqueSkills } from "@/utils/sortSkills";
import { JSX } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const titleClasses =
  "text-indigo_dye dark:text-caribbean_current mb-6 text-center text-3xl font-bold sm:text-4xl md:text-5xl";
const buttonClass =
  "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition dark:bg-indigo_dye bg-caribbean_current text-white dark:hover:bg-caribbean_current hover:bg-indigo_dye";

/**
 * Projects section.
 *
 * A card per project: what it does, the stack it uses, and where the code
 * lives. Descriptions are authored a claim per line, so each line becomes a
 * bullet rather than collapsing into one dense paragraph.
 * @returns The projects layout.
 */
function Projects(): JSX.Element {
  return (
    <>
      <h2 className={titleClasses}>My Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const claims = project.description.split("\n").filter(Boolean);

          return (
            <div
              key={project.id}
              className="flex flex-col rounded-lg bg-platinum-800 p-4 shadow dark:bg-jet-400"
            >
              <h3 className="mb-3 text-center text-xl font-semibold text-indigo_dye dark:text-caribbean_current">
                {project.name}
              </h3>

              {claims.length > 1 ? (
                <ul className="mb-4 list-disc space-y-1 pl-5 text-left text-sm text-jet-600 dark:text-platinum-500">
                  {claims.map((claim, i) => (
                    <li key={i}>{claim}</li>
                  ))}
                </ul>
              ) : (
                <p className="mb-4 text-center text-sm text-jet-600 dark:text-platinum-500">
                  {claims[0]}
                </p>
              )}

              <ul className="mt-auto mb-4 flex flex-wrap justify-center gap-2 text-sm">
                {getSortedUniqueSkills(project.skills).map((skill, i) => (
                  <li
                    key={i}
                    className="rounded bg-indigo_dye px-2 py-1 text-white dark:bg-caribbean_current"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

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
          );
        })}
      </div>
    </>
  );
}

export default Projects;
