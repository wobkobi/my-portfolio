// components/portfolio/DetailBox.tsx
/**
 * @description
 * Renders detailed information for a DataBox item, showing either a
 * single paragraph or a bulleted list, plus an optional set of action links
 * styled as buttons with GitHub & external-link icons.
 */

import { DetailBoxProps } from "@/types/Types";
import { getSortedUniqueSkills } from "@/utils/sortSkills";
import { JSX } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// Grows to the standard screen breakpoints rather than staying card-sized
const container =
  "m-2 mx-auto w-full rounded-sm p-4 shadow-lg bg-platinum-800 dark:bg-jet-400 max-w-screen-md sm:max-w-screen-lg lg:max-w-screen-xl";

const title =
  "mb-2 text-center text-indigo_dye dark:text-caribbean_current text-sm font-semibold sm:text-base md:text-lg";

const paragraph = "text-jet dark:text-platinum text-base sm:text-lg";

const list = "list-disc pl-5 text-left text-base sm:text-lg";

const listItem = "text-jet dark:text-platinum";

// Matches the button styling on the Projects page
const buttonClass =
  "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition dark:bg-indigo_dye bg-caribbean_current text-white dark:hover:bg-caribbean_current hover:bg-indigo_dye";

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
 * @param props.skills - Optional array of skills gained.
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

  return (
    <div className={container}>
      {subtitle && <h3 className={title}>{subtitle}</h3>}

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
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {Array.isArray(link) ? (
            link.map((link, i) => (
              <a
                key={`link-${i}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
              >
                {isGitHubUrl(link.url) ? (
                  <FiGithub className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <FiExternalLink className="h-4 w-4" aria-hidden="true" />
                )}
                <span>{link.text}</span>
              </a>
            ))
          ) : (
            <a href={link.url} target="_blank" rel="noopener noreferrer" className={buttonClass}>
              {isGitHubUrl(link.url) ? (
                <FiGithub className="h-4 w-4" aria-hidden="true" />
              ) : (
                <FiExternalLink className="h-4 w-4" aria-hidden="true" />
              )}
              <span>{link.text}</span>
            </a>
          )}
        </div>
      )}

      {skills && skills.length > 0 && (
        <>
          <h4 className="mt-4 text-center font-semibold">Skills Gained:</h4>
          <ul className="flex flex-wrap justify-center gap-2 pt-2">
            {getSortedUniqueSkills(skills).map((skill, i) => (
              <li
                key={`${id}-skill-${i}`}
                className="rounded-sm bg-indigo_dye px-2 py-1 text-xs text-white dark:bg-caribbean_current"
              >
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
