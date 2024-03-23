import cn from "@/utils/cn";
import React, { forwardRef } from "react";

interface ExpandableBoxProps {
  id: string;
  title: string;
  summary?: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  assignRef?: (el: HTMLDivElement) => void;
}

function ExpandableBox({
  id,
  title,
  summary,
  isExpanded,
  onToggle,
}: ExpandableBoxProps) {
  const handleTouchEnd = (event: React.TouchEvent) => {
    event.preventDefault();
    onToggle(id);
  };

  return (
    <div
      className={cn(
        "m-2 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded p-4 shadow-lg transition-all duration-300",
        isExpanded
          ? "ring-2 ring-indigo_dye dark:ring-caribbean_current"
          : "bg-white",
        "dark:bg-jet-400"
      )}
      onClick={() => onToggle(id)}
      onTouchEnd={handleTouchEnd}
      role="button"
      tabIndex={0}
      aria-pressed={isExpanded}>
      <h2
        className={cn(
          "text-center text-lg font-bold text-indigo_dye dark:text-caribbean_current"
        )}>
        {title}
      </h2>
      {summary && (
        <p
          className={cn(
            "mt-2 text-center text-sm text-indigo_dye dark:text-platinum"
          )}>
          {summary}
        </p>
      )}
    </div>
  );
}

export default forwardRef<HTMLDivElement, ExpandableBoxProps>(ExpandableBox);
