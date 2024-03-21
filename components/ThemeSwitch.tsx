"use client";
import cn from "@/utils/cn";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [iconSize, setIconSize] = useState(20); // Default icon size

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const newSize = window.innerWidth < 768 ? 18 : 24;
      setIconSize(newSize);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50",
        "transition-colors duration-300 ease-in-out",
        "flex items-center justify-center",
        theme === "light"
          ? "text-gray-900 hover:text-indigo_dye"
          : "text-white hover:text-caribbean_current",
        "dark:text-white dark:hover:text-caribbean_current"
      )}
      aria-label="Toggle Dark Mode"
      title="Toggle Dark Mode">
      {theme === "light" ? (
        <FiMoon size={iconSize} />
      ) : (
        <FiSun size={iconSize} />
      )}
    </button>
  );
}
