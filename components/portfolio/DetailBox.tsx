/**
 * @file DetailBox.tsx
 * @description
 * Renders detailed information for a DataBox item, showing either a
 * single paragraph or a bulleted list, plus an optional action link.
 */

import { DetailBoxProps } from "@/types/Types";
import cn from "@/utils/cn";
import { JSX } from "react";

/**
 * DetailBox component.
 * @param props - Props for rendering details.
 * @param props.id - Unique identifier for list keys.
 * @param props.subtitle - Heading text displayed above details.
 * @param props.details - Array of detail lines.
 * @param props.isVisible - Whether the box should render.
 * @param [props.link] - Optional link.
 * @returns The detail box or null if hidden.
 */
function DetailBox({
  id,
  subtitle,
  details,
  isVisible,
  link,
}: DetailBoxProps): JSX.Element | null {
  if (!isVisible) return null;

  const container = cn(
    "m-2 mx-auto max-w-full rounded-sm p-4 shadow-lg",
    "bg-platinum-800 dark:bg-jet-400",
    "sm:max-w-md md:max-w-lg xl:max-w-2/3"
  );

  const title = cn(
    "mb-2 text-center",
    "text-indigo_dye dark:text-caribbean_current",
    "text-sm font-semibold sm:text-base md:text-lg"
  );

  const paragraph = cn("text-jet dark:text-platinum", "text-base sm:text-lg");

  const list = cn("list-disc pl-5 text-left", "text-base sm:text-lg");

  const listItem = cn("text-jet dark:text-platinum");

  const linkClass = cn(
    "mt-4 block text-center hover:underline",
    "text-indigo_dye dark:text-caribbean_current",
    "text-sm sm:text-base md:text-lg"
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
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}>
          {link.text}
        </a>
      )}
    </div>
  );
}

export default DetailBox;
