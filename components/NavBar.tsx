"use client";
import ThemeSwitch from "@/components/ThemeSwitch";
import cn from "@/utils/cn";
import Link from "next/link";
import { JSX, useEffect, useState } from "react";

function NavBar(): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateVisibility = (): void => {
      setIsVisible(window.scrollY <= lastScrollY || window.scrollY <= 0);
      lastScrollY = window.scrollY;
      ticking = false;
    };

    const handleScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    // reveal when pointer is very close to top (20px)
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

  const linkClass = cn(
    "hover:text-indigo_dye dark:text-platinum dark:hover:text-caribbean_current",
    "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold",
    "px-2 py-1"
  );

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-10 mx-auto w-full max-w-full rounded-full px-1 py-1 shadow-lg transition-all duration-300 sm:max-w-xl sm:px-2 sm:py-1",
        isVisible ? "opacity-100" : "opacity-0 hover:opacity-100",
        "bg-platinum-900 dark:bg-jet-400",
        "min-h-14"
      )}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(window.scrollY > 100)}>
      <div
        className={cn(
          // flex layout: wrap on small, no-wrap on sm+; even spacing between items on each row
          "flex flex-wrap items-center justify-evenly sm:flex-nowrap",
          "w-full"
        )}>
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
        <div className="px-2 py-1">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
