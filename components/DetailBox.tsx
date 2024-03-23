import cn from "@/utils/cn";

interface DetailBoxProps {
  id: string;
  subtitle: string;
  details: string[];
  isVisible: boolean;
  link?: { url: string; text: string };
}

export default function DetailBox({
  id,
  subtitle,
  details,
  isVisible,
  link,
}: DetailBoxProps) {
  if (!isVisible) return null;

  const renderDetails = () => {
    if (details.length === 1) {
      return (
        <p className={cn("text-base text-jet dark:text-platinum sm:text-lg")}>
          {details[0]}
        </p>
      );
    } else {
      return (
        <ul className={cn("list-disc pl-5 text-left text-base sm:text-lg")}>
          {details.map((detail, index) => (
            <li
              key={`${id}-detail-${index}`}
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
        "xl:max-w-2/3 m-2 mx-auto max-w-full rounded bg-white p-4 shadow-lg dark:bg-jet-400 sm:max-w-md md:max-w-lg"
      )}>
      <h3
        className={cn(
          "mb-2 text-center text-sm font-semibold text-indigo_dye dark:text-caribbean_current sm:text-base md:text-lg"
        )}>
        {subtitle}
      </h3>
      {renderDetails()}
      {link && (
        <a
          href={link.url}
          className={cn(
            "mt-4 block text-center text-sm text-indigo_dye hover:underline dark:text-caribbean_current sm:text-base md:text-lg"
          )}>
          {link.text}
        </a>
      )}
    </div>
  );
}
