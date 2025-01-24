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
        "m-2 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-sm p-4 shadow-lg transition-all duration-300",
        isExpanded
          ? "ring-indigo_dye hover:bg-platinum-700 dark:ring-caribbean_current dark:hover:bg-jet-300 dark:hover:text-jet-400 ring-2 hover:text-white"
          : "bg-platinum-900 hover:bg-platinum-700 dark:bg-jet-400 dark:hover:bg-jet-300 hover:text-white",
        "dark:hover:text-white"
      )}
      onClick={() => onToggle(id)}
      onTouchEnd={handleTouchEnd}
      role="button"
      tabIndex={0}
      aria-pressed={isExpanded}>
      <h2
        className={cn(
          "text-indigo_dye dark:text-caribbean_current text-center text-lg font-bold"
        )}>
        {title}
      </h2>
      {summary && (
        <p
          className={cn(
            "text-indigo_dye dark:text-platinum mt-2 text-center text-sm"
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
