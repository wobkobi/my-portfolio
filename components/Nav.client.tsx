// Nav.client.tsx

"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import ThemeSwitch from "./ThemeSwitch";
const Nav = () => {
  return (
    <nav className="bg-jet dark:bg-indigo_dye fixed inset-x-0 top-0 z-10 shadow-md">
      <div className="flex w-full justify-center">
        <div className="flex items-center justify-between space-x-10 py-4">
          <Link
            href="/"
            passHref
            className={cn(
              "text-platinum dark:text-platinum-200 text-xl hover:opacity-75",
            )}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            passHref
            className={cn(
              "text-platinum dark:text-platinum-200 text-xl hover:opacity-75",
            )}
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            passHref
            className={cn(
              "text-platinum dark:text-platinum-200 text-xl hover:opacity-75",
            )}
          >
            About
          </Link>
          <Link
            href="/contact"
            passHref
            className={cn(
              "text-platinum dark:text-platinum-200 text-xl hover:opacity-75",
            )}
          >
            Contact
          </Link>
          {/* Theme toggle button */}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
