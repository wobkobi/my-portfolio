// app/components/ThemeSwitch.tsx
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="rounded-md p-2 focus:border-blue-300 focus:outline-none focus:ring" aria-label="Toggle Dark Mode">
      {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  );
}
