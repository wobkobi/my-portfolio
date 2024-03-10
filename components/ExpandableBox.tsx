"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
interface ExpandableBoxProps {
  title: string;
  summary: string;
  children: React.ReactNode;
}

const ExpandableBox: React.FC<ExpandableBoxProps> = ({
  title,
  summary,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "m-2 cursor-pointer rounded border bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-transparent dark:bg-jet",
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h2
        className={cn(
          "text-lg font-bold text-indigo_dye dark:text-caribbean_current",
        )}
      >
        {title}
      </h2>
      {isExpanded ? (
        <div className={cn("text-gray-700 dark:text-platinum")}>{children}</div>
      ) : (
        <p className={cn("text-gray-600 dark:text-platinum")}>{summary}</p>
      )}
    </div>
  );
};

export default ExpandableBox;
