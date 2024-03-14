"use client";
// ExpandableBox.tsx
import React, { useState } from "react";
import { cn } from "@/utils/cn";

// TODO: FIX THIS
interface ExpandableBoxProps {
  id: string;
  title: string;
  summary: string;
  children: React.ReactNode;
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
}

const ExpandableBox: React.FC<ExpandableBoxProps> = ({ title, summary, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn("m-2 cursor-pointer rounded border bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-transparent dark:bg-jet", isExpanded ? "mb-8" : "mb-4")}
      onClick={() => setIsExpanded(!isExpanded)}>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className={cn("text-sm", "transition-all", "duration-300", isExpanded ? "mb-4" : "mb-2")}>{summary}</p>
      <div className={cn("overflow-hidden", "transition-all", "duration-300", isExpanded ? "max-h-screen" : "max-h-0")}>
        {isExpanded && <div className="mt-2 overflow-auto text-sm">{children}</div>}
      </div>
    </div>
  );
};

export default ExpandableBox;
