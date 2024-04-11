import { ExpandableBoxProps } from "@/types/BoxTypes";
import cn from "@/utils/cn";
import React, { forwardRef, Ref } from "react";

function ExpandableBoxFunction(
  { id, title, summary, isExpanded, onToggle }: ExpandableBoxProps,
  ref: Ref<HTMLDivElement>
) {
  const handleTouchEnd = (event: React.TouchEvent) => {
    event.preventDefault();
    onToggle(id);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "m-2 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded p-4 shadow-lg transition-all duration-300",
        isExpanded
          ? "ring-2 ring-indigo_dye hover:bg-platinum-700 hover:text-white dark:ring-caribbean_current dark:hover:bg-jet-300 dark:hover:text-jet-400"
          : "bg-platinum-900 hover:bg-platinum-700 hover:text-white dark:bg-jet-400 dark:hover:bg-jet-300",
        "dark:hover:text-white"
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
const ExpandableBox = forwardRef<HTMLDivElement, ExpandableBoxProps>(
  ExpandableBoxFunction
);

export default ExpandableBox;
