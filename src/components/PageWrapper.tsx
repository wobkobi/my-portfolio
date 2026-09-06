// src/components/PageWrapper.tsx
/**
 * @description
 * Shared layout wrapper used by every page. Provides the standard centered,
 * responsive content column so each page avoids duplicating these classes.
 */

import cn from "@/utils/cn";
import { JSX } from "react";

/**
 * PageWrapper component.
 *
 * Wraps page content in the standard flex column + centered responsive container.
 * @param props - Component props.
 * @param props.children - Page content to render.
 * @param [props.className] - Optional extra classes on the outer div.
 * @returns The wrapped page layout.
 */
function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={cn("flex grow flex-col items-center justify-center", className)}>
      <div className="p-4 text-center">
        <div className="mx-auto w-full p-4 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PageWrapper;
