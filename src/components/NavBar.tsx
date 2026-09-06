// src/components/NavBar.tsx
/**
 * @description
 * A responsive, auto-hiding navigation bar that spans full width on mobile
 * and becomes a curved inline pill on desktop. Hides on scroll-down, shows
 * on scroll-up or hover, and auto-hides 30s after a hover.
 */

"use client";

import ThemeSwitch from "@/components/ThemeSwitch";
import cn from "@/utils/cn";
import Link from "next/link";
import { JSX, useEffect, useRef, useState } from "react";

// Outer nav container: mobile full-width, desktop inline pill. The show/hide
// transform is applied on top of this in the component.
const navBaseClasses =
  "fixed top-3 z-50 transition-opacity transition-transform duration-300 ease-out bg-platinum-700 dark:bg-jet-500 inset-x-0 py-1 sm:left-1/2 sm:top-5 sm:max-w-screen-md sm:-translate-x-1/2 sm:transform sm:bg-platinum-700 sm:dark:bg-jet-500 sm:inline-block sm:rounded-full sm:px-4 sm:py-2";

// Flex wrapper for links and theme switch
const containerClasses = "flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap";

// Link styling
const linkClass =
  "px-2 py-1 font-medium transition-colors text-base sm:text-lg md:text-xl text-jet-400 dark:text-platinum hover:text-indigo_dye dark:hover:text-caribbean_current";

/**
 * NavBar component.
 * @returns The navigation bar element.
 */
function NavBar(): JSX.Element {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const hideTimer = useRef<number | null>(null);

  /**
   * Clears any existing hide timer and starts a new one
   * to auto-hide the navbar after 30 seconds.
   */
  const resetHideTimer = (): void => {
    if (hideTimer.current !== null) {
      clearTimeout(hideTimer.current);
    }
    hideTimer.current = window.setTimeout(() => {
      setVisible(false);
      hideTimer.current = null;
    }, 30_000);
  };

  useEffect(() => {
    const threshold = 20;

    /**
     * Shows or hides the navbar based on scroll direction.
     */
    const onScroll = (): void => {
      const currentY = window.scrollY;

      if (currentY < 50) {
        setVisible(true);
        resetHideTimer();
      } else if (currentY > lastScrollY.current + threshold) {
        setVisible(false);
      } else if (currentY < lastScrollY.current - threshold) {
        setVisible(true);
        resetHideTimer();
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimer.current !== null) {
        clearTimeout(hideTimer.current);
      }
    };
  }, []);

  const navClasses = cn(
    navBaseClasses,
    visible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0",
  );

  return (
    <nav
      className={navClasses}
      onMouseEnter={() => {
        setVisible(true);
        resetHideTimer();
      }}
    >
      <div className={containerClasses}>
        <Link href="/" className={linkClass}>
          Home
        </Link>
        <Link href="/portfolio" className={linkClass}>
          Portfolio
        </Link>
        <Link href="/projects" className={linkClass}>
          Projects
        </Link>
        <Link href="/about" className={linkClass}>
          About
        </Link>
        <Link href="/contact" className={linkClass}>
          Contact
        </Link>
        <ThemeSwitch />
      </div>
    </nav>
  );
}

export default NavBar;
