// src/components/ThemeSwitch.tsx
/**
 * @description
 * A toggle button for switching between light and dark themes using next-themes.
 * Ensures it only renders on the client after mounting to avoid hydration mismatch.
 */

"use client";

import cn from "@/utils/cn";
import { useTheme } from "next-themes";
import { JSX, useSyncExternalStore } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

// Base button classes
const baseClass =
  "focus:outline-hidden rounded-md p-2 focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-300 ease-in-out flex cursor-pointer items-center justify-center";

/** Shared teardown for the mount store, which never actually emits. */
const noop = (): void => {};

/**
 * Subscribe handler for the mount store.
 * @returns The no-op unsubscribe function.
 */
const subscribeMounted = (): (() => void) => noop;

/**
 * Client snapshot for the mount store.
 * @returns Always true, since this only runs after hydration.
 */
const getMountedSnapshot = (): boolean => true;

/**
 * Server snapshot for the mount store.
 * @returns Always false, so nothing theme-dependent is rendered during SSR.
 */
const getServerMountedSnapshot = (): boolean => false;

/**
 * ThemeSwitch component.
 *
 * Renders a button that toggles the site theme between light and dark.
 * It only appears after the component has mounted to prevent SSR mismatch.
 * @returns The theme toggle button or null during SSR.
 */
function ThemeSwitch(): JSX.Element | null {
  const { theme, setTheme } = useTheme();

  // Client-only gate via useSyncExternalStore rather than a setState in an effect:
  // the server snapshot is false and the client snapshot is true, so the button
  // appears on the first client render without triggering a cascading render.
  const mounted = useSyncExternalStore(
    subscribeMounted,
    getMountedSnapshot,
    getServerMountedSnapshot,
  );

  if (!mounted) return null;

  // Theme-dependent colour classes
  const themeClass =
    theme === "light" ? "hover:text-coquelicot text-gray-900" : "hover:text-moonstone text-white";

  return (
    <button
      onClick={(): void => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(baseClass, themeClass, "dark:hover:text-moonstone dark:text-white")}
      aria-label="Toggle Dark Mode"
      title="Toggle Dark Mode"
      role="switch"
      aria-checked={theme === "dark"}
    >
      {theme === "light" ? (
        <FiMoon className="text-xl sm:text-2xl" aria-hidden="true" />
      ) : (
        <FiSun className="text-xl sm:text-2xl" aria-hidden="true" />
      )}
    </button>
  );
}

export default ThemeSwitch;
