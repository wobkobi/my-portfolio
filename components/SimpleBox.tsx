"use client";
import cn from "@/utils/cn";
import React from "react";

interface ExpandableBoxProps {
  title: string;
  summary: string;
  children: React.ReactNode;
}

const SimpleBox: React.FC<ExpandableBoxProps> = ({ title, summary, children }) => {
  // Always display the title, summary, and children without toggling
  return (
    <div className={cn("m-2 cursor-pointer rounded border bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-transparent dark:bg-jet")}>
      <h2 className={cn("text-lg font-bold text-indigo_dye dark:text-caribbean_current")}>{title}</h2>
      <p className={cn("text-gray-600 dark:text-platinum")}>{summary}</p>
      {/* Optionally display children if provided */}
      {children && <div className={cn("mt-2 text-gray-700 dark:text-platinum")}>{children}</div>}
    </div>
  );
};

export default SimpleBox;
