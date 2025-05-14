/**
 * @file NavBar.tsx
 * @description
 * A responsive, auto-hiding navigation bar that wraps on mobile into multiple rows
 * and remains a single centered row on desktop. Contains links and a theme toggle.
 */

"use client";

import ThemeSwitch from "@/components/ThemeSwitch";
import cn from "@/utils/cn";
import Link from "next/link";
import { JSX, useEffect, useState } from "react";

/**
 * NavBar component.
 * @returns A fixed top navigation bar with links and a theme switch.
 */
function NavBar(): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    /** Update visibility based on scroll direction. */
    const updateVisibility = (): void => {
      setIsVisible(window.scrollY <= lastScrollY || window.scrollY <= 0);
      lastScrollY = window.scrollY;
      ticking = false;
    };

    /** Throttled scroll handler. */
    const handleScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    /** Reveal nav when pointer is near the top. @param e MouseEvent */
    const REVEAL_ZONE = 50;
    const handleMouseMove = (e: MouseEvent): void => {
      if (e.clientY < REVEAL_ZONE) setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Common classes for each link (reduced weight)
  const linkClass = cn(
    "px-2 py-1 font-medium transition-colors",
    "text-base sm:text-lg md:text-xl lg:text-2xl",
    "hover:text-indigo_dye dark:text-platinum dark:hover:text-caribbean_current"
  );

  // Wrapper for all nav items: wrap on mobile, no-wrap on desktop
  const containerClasses = cn(
    "flex items-center justify-center flex-wrap gap-4",
    "sm:flex-nowrap"
  );

  // Navbar outer container: full width on mobile, constrained on desktop
  const navClasses = cn(
    "fixed inset-x-0 top-0 z-10 mx-auto w-full",
    "sm:max-w-screen-md",
    "bg-platinum-900 dark:bg-jet-400 px-2 py-1 shadow-lg",
    "transition-opacity duration-300",
    isVisible ? "opacity-100" : "opacity-0 hover:opacity-100",
    "rounded-none sm:rounded-full"
  );

  return (
    <nav
      className={navClasses}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(window.scrollY > 100)}>
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
