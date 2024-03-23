"use client";
import cn from "@/utils/cn";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateVisibility = () => {
      setIsVisible(window.scrollY <= lastScrollY || window.scrollY <= 0);
      ticking = false;
      lastScrollY = window.scrollY;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-10 mx-auto max-w-xl rounded-full px-5 py-3 shadow-lg transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 hover:opacity-100",
        "flex items-center justify-center",
        "bg-platinum-900 dark:bg-gray-700"
      )}
      onMouseEnter={() => setIsVisible(true)} // Use onMouseEnter instead of onMouseOver
      onMouseLeave={() => setIsVisible(window.scrollY > 100 ? false : true)} // Hide nav if scrolled down on mouse leave
    >
      <div className={cn("flex w-full items-center justify-evenly")}>
        <Link
          href="/"
          className={cn(
            "hover:text-indigo_dye dark:text-white dark:hover:text-caribbean_current",
            "text-sm sm:text-base md:text-lg lg:text-xl"
          )}>
          Home
        </Link>
        <Link
          href="/portfolio"
          className={cn(
            "hover:text-indigo_dye dark:text-white dark:hover:text-caribbean_current",
            "text-sm sm:text-base md:text-lg lg:text-xl"
          )}>
          Portfolio
        </Link>
        <Link
          href="/about"
          className={cn(
            "hover:text-indigo_dye dark:text-white dark:hover:text-caribbean_current",
            "text-sm sm:text-base md:text-lg lg:text-xl"
          )}>
          About
        </Link>
        <Link
          href="/contact"
          className={cn(
            "hover:text-indigo_dye dark:text-white dark:hover:text-caribbean_current",
            "text-sm sm:text-base md:text-lg lg:text-xl"
          )}>
          Contact
        </Link>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
