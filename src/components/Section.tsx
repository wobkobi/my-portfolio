// src/components/Section.tsx

import { SectionProps } from "@/types/Types";
import cn from "@/utils/cn";
import { JSX } from "react";

// scroll-mt keeps an anchored heading clear of the fixed navbar; it tracks the
// body's pt-20 sm:pt-28 in the root layout, so change both together.
const bandClasses = "relative w-full scroll-mt-24 sm:scroll-mt-32";

const containerClasses = "mx-auto w-full max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-16";

// Tinted bands alternate down the page. Kept translucent so the surface behind
// still shows through instead of being covered by a flat panel.
const tintClasses = "bg-platinum-800/50 dark:bg-jet-300/40";

/**
 * Section component.
 *
 * One full-bleed band of the single page, holding a centred content column.
 * @param props - Component props.
 * @param props.id - Anchor target for the navbar and the retired-route redirects.
 * @param props.children - The section content.
 * @param [props.tinted] - Raise the band a little off the page surface.
 * @param [props.seam] - Draw the hairline boundary along the band's top edge.
 * @returns The section band.
 */
function Section({ id, children, tinted = false, seam = true }: SectionProps): JSX.Element {
  return (
    <section id={id} className={cn(bandClasses, tinted && tintClasses, seam && "section-seam")}>
      <div className={containerClasses}>{children}</div>
    </section>
  );
}

export default Section;
