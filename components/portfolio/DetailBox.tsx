import { DetailBoxProps } from "@/types/Types";
import cn from "@/utils/cn";
import { JSX } from "react";

function DetailBox({
  subtitle,
  details,
  isVisible,
  link,
  ...props // Spread remaining props, including id
}: DetailBoxProps): JSX.Element | null {
  if (!isVisible) return null;

  const renderDetails = (): JSX.Element => {
    if (details.length === 1) {
      return (
        <p className={cn("text-jet dark:text-platinum text-base sm:text-lg")}>
          {details[0]}
        </p>
      );
    } else {
      return (
        <ul className={cn("list-disc pl-5 text-left text-base sm:text-lg")}>
          {details.map((detail, index) => (
            <li
              key={`${props.id}-detail-${index}`} // Use id here if necessary
              className={cn("text-jet dark:text-platinum")}>
              {detail}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div
      className={cn(
        "bg-platinum-900 dark:bg-jet-400 m-2 mx-auto max-w-full rounded-sm p-4 shadow-lg sm:max-w-md md:max-w-lg xl:max-w-2/3"
      )}>
      <h3
        className={cn(
          "text-indigo_dye dark:text-caribbean_current mb-2 text-center text-sm font-semibold sm:text-base md:text-lg"
        )}>
        {subtitle}
      </h3>
      {renderDetails()}
      {link && (
        <a
          href={link.url}
          className={cn(
            "text-indigo_dye dark:text-caribbean_current mt-4 block text-center text-sm hover:underline sm:text-base md:text-lg"
          )}>
          {link.text}
        </a>
      )}
    </div>
  );
}

export default DetailBox;
