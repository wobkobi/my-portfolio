// src/components/portfolio/ExpandableBox.tsx
/**
 * @description
 * A card that can be toggled open or closed to show a title and optional summary.
 */

"use client";

import { ExpandableBoxProps } from "@/types/Types";
import cn from "@/utils/cn";
import React, { forwardRef, JSX, Ref } from "react";

// Shared container styles
const containerClasses =
  "m-2 flex h-full w-full flex-col items-center justify-center cursor-pointer rounded-sm p-4 shadow-lg transition-all duration-300 dark:hover:text-white";

// Styles when collapsed
const collapsedClasses =
  "bg-platinum-800 hover:bg-platinum-600 dark:bg-jet-400 dark:hover:bg-jet-200 hover:text-white";

// Styles when expanded
const expandedClasses =
  "bg-platinum-700 ring-indigo_dye hover:bg-platinum-600 ring-2 dark:bg-jet-300 dark:ring-caribbean_current dark:hover:bg-jet-200 hover:text-white";

// Title styling
const titleClasses = "text-indigo_dye dark:text-caribbean_current text-center text-lg font-bold";

// Summary styling
const summaryClasses = "mt-2 text-center text-sm text-indigo_dye dark:text-platinum";

/**
 * ExpandableBoxFunction component.
 * @param props - Props containing id, title, summary, isExpanded, and onToggle.
 * @param ref - Forwarded ref for the root div element.
 * @returns The rendered expandable box.
 */
function ExpandableBoxFunction(props: ExpandableBoxProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const { id, title, summary, isExpanded, onToggle } = props;
  /**
   * Toggle the box on touch, suppressing the synthetic click that would otherwise
   * fire straight after and immediately toggle it back.
   * @param e - The touch end event on the box header.
   */
  const handleTouchEnd = (e: React.TouchEvent): void => {
    e.preventDefault();
    onToggle(id);
  };

  return (
    <div
      ref={ref}
      className={cn(containerClasses, isExpanded ? expandedClasses : collapsedClasses)}
      onClick={(): void => onToggle(id)}
      onTouchEnd={handleTouchEnd}
      role="button"
      tabIndex={0}
      aria-pressed={isExpanded}
    >
      <h2 className={titleClasses}>{title}</h2>
      {summary && <p className={summaryClasses}>{summary}</p>}
    </div>
  );
}

const ExpandableBox = forwardRef<HTMLDivElement, ExpandableBoxProps>(ExpandableBoxFunction);
ExpandableBox.displayName = "ExpandableBox";

export default ExpandableBox;
