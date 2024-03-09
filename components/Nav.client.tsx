// Nav.client.tsx

"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";

const Nav = () => {
  return (
    <nav className={cn("bg-raisin_black fixed inset-x-0 top-0 z-10 py-3")}>
      <div className={cn("mx-auto max-w-6xl px-4")}>
        <div className={cn("flex items-center justify-between")}>
          <div className={cn("flex space-x-4")}>
            <Link href="/">
              <span
                className={cn(
                  "hover:text-plum cursor-pointer rounded px-3 py-2 text-white",
                )}
              >
                Home
              </span>
            </Link>
            <Link href="/portfolio">
              <span
                className={cn(
                  "hover:text-plum cursor-pointer rounded px-3 py-2 text-white",
                )}
              >
                Portfolio
              </span>
            </Link>
            <Link href="/about">
              <span
                className={cn(
                  "hover:text-plum cursor-pointer rounded px-3 py-2 text-white",
                )}
              >
                About
              </span>
            </Link>
            <Link href="/contact">
              <span
                className={cn(
                  "hover:text-plum cursor-pointer rounded px-3 py-2 text-white",
                )}
              >
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
