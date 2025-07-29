/**
 * @file ThemeSwitch.tsx
 * @description
 * A toggle button for switching between light and dark themes using next-themes.
 * Ensures it only renders on the client after mounting to avoid hydration mismatch.
 */

"use client";

import cn from "@/utils/cn";
import { useTheme } from "next-themes";
import { JSX, useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

/**
 * ThemeSwitch component.
 *
 * Renders a button that toggles the site theme between light and dark.
 * It only appears after the component has mounted to prevent SSR mismatch.
 * @returns The theme toggle button or null during SSR.
 */
function ThemeSwitch(): JSX.Element | null {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mark as mounted to enable rendering on client only
  useEffect((): void => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Base button classes
  const baseClass = cn(
    "focus-visible:ring-opacity-50 rounded-md p-2 focus:outline-hidden focus-visible:ring-2",
    "transition-colors duration-300 ease-in-out",
    "flex cursor-pointer items-center justify-center"
  );

  // Theme-dependent colour classes
  const themeClass =
    theme === "light"
      ? "hover:text-indigo_dye text-gray-900"
      : "hover:text-caribbean_current text-white";

  return (
    <button
      onClick={(): void => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        baseClass,
        themeClass,
        "dark:hover:text-caribbean_current dark:text-white"
      )}
      aria-label="Toggle Dark Mode"
      title="Toggle Dark Mode"
      role="switch"
      aria-checked={theme === "dark"}>
      {theme === "light" ? (
        <FiMoon className={cn("text-xl sm:text-2xl")} aria-hidden="true" />
      ) : (
        <FiSun className={cn("text-xl sm:text-2xl")} aria-hidden="true" />
      )}
    </button>
  );
}

export default ThemeSwitch;
