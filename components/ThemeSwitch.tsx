"use client";
import cn from "@/utils/cn";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "focus-visible:ring-opacity-50 rounded-md p-2 focus:outline-hidden focus-visible:ring-2",
        "transition-colors duration-300 ease-in-out",
        "flex items-center justify-center",
        theme === "light"
          ? "hover:text-indigo_dye text-gray-900"
          : "hover:text-caribbean_current text-white",
        "dark:hover:text-caribbean_current dark:text-white"
      )}
      aria-label="Toggle Dark Mode"
      title="Toggle Dark Mode"
      role="switch"
      aria-checked={theme === "dark"}>
      {theme === "light" ? (
        <FiMoon className="text-xl sm:text-2xl" />
      ) : (
        <FiSun className="text-xl sm:text-2xl" />
      )}
    </button>
  );
}
