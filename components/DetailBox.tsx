import cn from "@/utils/cn";
import React from "react";

interface DetailBoxProps {
  id: string;
  subtitle: string;
  details: string[];
  isVisible: boolean;
  link?: { url: string; text: string };
}

const DetailBox: React.FC<DetailBoxProps> = ({ id, subtitle, details, isVisible, link }) => {
  if (!isVisible) return null;

  const renderDetails = () => {
    if (details.length === 1) {
      // If only one detail, return it without a bullet point
      return <p className={cn("text-lg text-gray-700 dark:text-platinum")}>{details[0]}</p>;
    } else {
      // If multiple details, return them in a list
      return (
        <ul className={cn("list-disc pl-5 text-left text-lg")}>
          {details.map((detail, index) => (
            <li key={`${id}-detail-${index}`} className={cn("text-gray-700 dark:text-platinum")}>
              {detail}
            </li>
          ))}
        </ul>
      );
    }
  };
  return (
    <div className={cn("xl:max-w-2/3  s m-2 mx-auto  w-max  max-w-[65%] rounded  bg-white p-4 shadow-lg dark:bg-jet-400")}>
      <h3 className={cn("mb-2 text-center text-sm font-semibold text-indigo_dye dark:text-caribbean_current")}>{subtitle}</h3> {/* Small title */}
      {renderDetails()}
      {link && ( // Conditional rendering of the link
        <a href={link.url} className={cn("mt-4 block text-center text-sm text-indigo_dye hover:underline dark:text-caribbean_current")}>
          {link.text}
        </a>
      )}
    </div>
  );
};

export default DetailBox;
