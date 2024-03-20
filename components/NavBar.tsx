"use client";
import cn from "@/utils/cn";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY === 0 || window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-10 mx-auto max-w-xl rounded-full bg-white shadow-lg transition-opacity duration-300 dark:bg-jet",
        isVisible ? "opacity-100" : "opacity-0",
        "hover:opacity-100",
      )}
      onMouseOver={() => setIsVisible(true)}>
      <div className={cn("flex items-center justify-evenly space-x-4 py-2")}>
        {/* Navigation Links */}
        <Link href="/" className={cn("text-lg text-indigo_dye hover:text-caribbean_current dark:text-caribbean_current-800 dark:hover:text-platinum")}>
          Home
        </Link>
        <Link href="/portfolio" className={cn("text-lg text-indigo_dye hover:text-caribbean_current dark:text-caribbean_current-800 dark:hover:text-platinum")}>
          Portfolio
        </Link>
        <Link href="/about" className={cn("text-lg text-indigo_dye hover:text-caribbean_current dark:text-caribbean_current-800 dark:hover:text-platinum")}>
          About
        </Link>
        <Link href="/contact" className={cn("text-lg text-indigo_dye hover:text-caribbean_current dark:text-caribbean_current-800 dark:hover:text-platinum")}>
          Contact
        </Link>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavBar;
