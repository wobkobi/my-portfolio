import cn from "@/utils/cn";
import React from "react";

interface ExpandableBoxProps {
  id: string;
  title: string;
  summary?: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

const ExpandableBox: React.FC<ExpandableBoxProps> = ({ id, title, summary, isExpanded, onToggle }) => {
  return (
    <div
      className={cn(
        "m-2 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-jet-400",
        isExpanded ? "ring-2 ring-caribbean_current" : ""
      )}
      onClick={() => onToggle(id)}>
      <h2 className={cn("text-center text-lg font-bold text-indigo_dye dark:text-caribbean_current", summary ? "" : "my-auto")}>{title}</h2>
      {summary && <p className={cn("mt-2 text-center text-sm text-gray-600 dark:text-platinum")}>{summary}</p>}
    </div>
  );
};

export default ExpandableBox;
