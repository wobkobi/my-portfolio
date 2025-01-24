"use client";
import ThemeSwitch from "@/components/ThemeSwitch";
import cn from "@/utils/cn";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateVisibility = () => {
      setIsVisible(window.scrollY <= lastScrollY || window.scrollY <= 0);
      lastScrollY = window.scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = cn(
    "hover:text-indigo_dye dark:text-platinum dark:hover:text-caribbean_current",
    "text-xl sm:text-lg md:text-xl lg:text-2xl"
  );

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-10 mx-auto max-w-xl rounded-full px-5 py-3 shadow-lg transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 hover:opacity-100",
        "bg-platinum-900 dark:bg-jet-400 flex items-center justify-center"
      )}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(window.scrollY > 100 ? false : true)}>
      <div className="flex w-full items-center justify-evenly">
        <Link href="/" className={linkClass}>
          Home
        </Link>
        <Link href="/portfolio" className={linkClass}>
          Portfolio
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
