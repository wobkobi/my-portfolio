/**
 * @file ExpandableBox.tsx
 * @description
 * A clickable summary box that toggles expansion state. Supports keyboard and touch,
 * and applies distinct styles when expanded or collapsed.
 */

"use client";

import { ExpandableBoxProps } from "@/types/Types";
import cn from "@/utils/cn";
import React, { forwardRef, JSX, Ref } from "react";

/**
 * ExpandableBox component.
 * Wraps a summary title and optional summary text in a clickable/tappable box.
 * @param props - Props to configure the box.
 * @param props.id - Unique identifier for this box.
 * @param props.title - Title text displayed prominently.
 * @param [props.summary] - Optional summary text when collapsed.
 * @param props.isExpanded - Whether the box is currently expanded.
 * @param props.onToggle - Callback when the box is toggled.
 * @param ref - Forwarded ref to the container div.
 * @returns The expandable box element.
 */
function ExpandableBoxFunction(
  { id, title, summary, isExpanded, onToggle }: ExpandableBoxProps,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  // Base container classes
  const baseClass = cn(
    "m-2 flex h-full w-full cursor-pointer flex-col items-center justify-center",
    "rounded-sm p-4 shadow-lg transition-all duration-300",
    "dark:hover:text-white"
  );

  // Classes applied when expanded
  const expandedClass = cn(
    "ring-2 ring-indigo_dye hover:bg-platinum-700",
    "dark:ring-caribbean_current dark:hover:bg-jet-300",
    "hover:text-white"
  );

  // Classes applied when collapsed
  const collapsedClass = cn(
    "bg-platinum-900 hover:bg-platinum-700",
    "dark:bg-jet-400 dark:hover:bg-jet-300",
    "hover:text-white"
  );

  // Title styling
  const titleClass = cn(
    "text-indigo_dye dark:text-caribbean_current",
    "text-center text-lg font-bold"
  );

  // Summary styling
  const summaryClass = cn(
    "text-indigo_dye dark:text-platinum",
    "mt-2 text-center text-sm"
  );

  /**
   * Handle touch end events to toggle expansion without triggering click twice.
   * @param event – The touch event that ended on the element.
   */
  const handleTouchEnd = (event: React.TouchEvent): void => {
    event.preventDefault();
    onToggle(id);
  };

  return (
    <div
      ref={ref}
      className={cn(baseClass, isExpanded ? expandedClass : collapsedClass)}
      onClick={(): void => onToggle(id)}
      onTouchEnd={handleTouchEnd}
      role="button"
      tabIndex={0}
      aria-pressed={isExpanded}>
      <h2 className={titleClass}>{title}</h2>
      {summary && <p className={summaryClass}>{summary}</p>}
    </div>
  );
}

// Forward ref for parent components to access the div DOM node
const ExpandableBox = forwardRef<HTMLDivElement, ExpandableBoxProps>(
  ExpandableBoxFunction
);
ExpandableBox.displayName = "ExpandableBox";

export default ExpandableBox;
