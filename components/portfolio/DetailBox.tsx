/**
 * @file DetailBox.tsx
 * @description
 * Displays detailed information for a selected DataBox item, including a subtitle,
 * list or paragraph of details, and an optional link. Only renders when visible.
 */

import { DetailBoxProps } from "@/types/Types";
import cn from "@/utils/cn";
import { JSX } from "react";

/**
 * DetailBox component.
 *
 * @param {DetailBoxProps} props - Props including visibility, content and link.
 * @param {string} props.id - Unique identifier (used for list keys).
 * @param {string} props.subtitle - Heading text displayed above details.
 * @param {string[]} props.details - Array of detail strings; renders as paragraph or list.
 * @param {boolean} props.isVisible - Controls whether the box is shown.
 * @param {{ url: string; text: string }} [props.link] - Optional link object for further action.
 * @returns {JSX.Element | null} The detail box UI or null if not visible.
 */
function DetailBox({
  subtitle,
  details,
  isVisible,
  link,
  id,
}: DetailBoxProps): JSX.Element | null {
  if (!isVisible) return null;

  // Container classes
  const containerClass = cn(
    "bg-platinum-900 dark:bg-jet-400 m-2 mx-auto max-w-full rounded-sm p-4 shadow-lg",
    "sm:max-w-md md:max-w-lg xl:max-w-2/3"
  );

  // Subtitle classes
  const subtitleClass = cn(
    "text-indigo_dye dark:text-caribbean_current mb-2 text-center",
    "text-sm font-semibold sm:text-base md:text-lg"
  );

  // Detail text classes
  const paragraphClass = cn("text-jet dark:text-platinum text-base sm:text-lg");

  const listClass = cn("list-disc pl-5 text-left text-base sm:text-lg");
  const listItemClass = cn("text-jet dark:text-platinum");

  const linkClass = cn(
    "text-indigo_dye dark:text-caribbean_current mt-4 block text-center",
    "text-sm hover:underline sm:text-base md:text-lg"
  );

  /**
   * Render details as either a single paragraph or a bulleted list.
   *
   * @returns {JSX.Element} The details content.
   */
  const renderDetails = (): JSX.Element =>
    details.length > 1 ? (
      <ul className={listClass}>
        {details.map((detail, idx) => (
          <li key={`${id}-detail-${idx}`} className={listItemClass}>
            {detail}
          </li>
        ))}
      </ul>
    ) : (
      <p className={paragraphClass}>{details[0]}</p>
    );

  return (
    <div className={containerClass}>
      <h3 className={subtitleClass}>{subtitle}</h3>
      {renderDetails()}
      {link && (
        <a
          href={link.url}
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer">
          {link.text}
        </a>
      )}
    </div>
  );
}

export default DetailBox;
