// components/portfolio/DetailBox.tsx
/**
 * @file DetailBox.tsx
 * @description
 * Renders detailed information for a DataBox item, showing either a
 * single paragraph or a bulleted list, plus an optional set of action links
 * styled as buttons with GitHub & external-link icons.
 */

import { DetailBoxProps } from "@/types/Types";
import cn from "@/utils/cn";
import { getSortedUniqueSkills } from "@/utils/sortSkills";
import { JSX } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

/**
 * Safely detect if a URL is on the github.com host (including subdomains).
 * @param urlString - The href you want to check.
 * @returns true if the parsed hostname is exactly "github.com" or ends with ".github.com"
 */
function isGitHubUrl(urlString: string): boolean {
  try {
    const hostname = new URL(urlString).hostname.toLowerCase();
    return hostname === "github.com" || hostname.endsWith(".github.com");
  } catch {
    // invalid URL, treat as non-GitHub
    return false;
  }
}

/**
 * DetailBox component.
 * @param props - Props for rendering details.
 * @param props.id - Unique identifier for list keys.
 * @param props.subtitle - Heading text displayed above details.
 * @param props.details - Array of detail lines.
 *  @param props.skills - Optional array of skills gained.
 * @param props.isVisible - Whether the box should render.
 * @param [props.link] - Optional link.
 * @returns The detail box or null if hidden.
 */
function DetailBox({
  id,
  subtitle,
  details,
  skills,
  isVisible,
  link,
}: DetailBoxProps): JSX.Element | null {
  if (!isVisible) return null;

  const container = cn(
    "m-2 mx-auto w-full rounded-sm p-4 shadow-lg",
    "bg-platinum-800 dark:bg-jet-400",
    // let it grow to your standard screen breakpoints:
    "max-w-screen-md sm:max-w-screen-lg lg:max-w-screen-xl"
  );

  const title = cn(
    "mb-2 text-center",
    "text-indigo_dye dark:text-caribbean_current",
    "text-sm font-semibold sm:text-base md:text-lg"
  );

  const paragraph = cn("text-jet dark:text-platinum", "text-base sm:text-lg");

  const list = cn("list-disc pl-5 text-left", "text-base sm:text-lg");

  const listItem = cn("text-jet dark:text-platinum");

  // exactly your ProjectsPage buttonClass
  const buttonClass = cn(
    "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition",
    "dark:bg-indigo_dye bg-caribbean_current text-white",
    "dark:hover:bg-caribbean_current hover:bg-indigo_dye"
  );

  return (
    <div className={container}>
      <h3 className={title}>{subtitle}</h3>

      {details.length > 1 ? (
        <ul className={list}>
          {details.map((detail, idx) => (
            <li key={`${id}-detail-${idx}`} className={listItem}>
              {detail}
            </li>
          ))}
        </ul>
      ) : (
        <p className={paragraph}>{details[0]}</p>
      )}

      {link && (
        <div className={cn("mt-4 flex flex-wrap justify-center gap-3")}>
          {Array.isArray(link) ? (
            link.map((link, i) => (
              <a
                key={`link-${i}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}>
                {isGitHubUrl(link.url) ? (
                  <FiGithub className={cn("h-4 w-4")} aria-hidden="true" />
                ) : (
                  <FiExternalLink
                    className={cn("h-4 w-4")}
                    aria-hidden="true"
                  />
                )}
                <span>{link.text}</span>
              </a>
            ))
          ) : (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}>
              {isGitHubUrl(link.url) ? (
                <FiGithub className={cn("h-4 w-4")} aria-hidden="true" />
              ) : (
                <FiExternalLink className={cn("h-4 w-4")} aria-hidden="true" />
              )}
              <span>{link.text}</span>
            </a>
          )}
        </div>
      )}

      {skills && skills.length > 0 && (
        <>
          <h4 className={cn("mt-4 text-center font-semibold")}>
            Skills Gained:
          </h4>
          <ul className={cn("flex flex-wrap justify-center gap-2 pt-2")}>
            {getSortedUniqueSkills(skills).map((skill, i) => (
              <li
                key={`${id}-skill-${i}`}
                className={cn(
                  "bg-indigo_dye dark:bg-caribbean_current rounded-sm px-2 py-1 text-xs text-white"
                )}>
                {skill}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default DetailBox;
