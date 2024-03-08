// Nav.client.tsx

"use client";

import Link from "next/link";
import { cn } from "../utils/cn";
const Nav = () => {
  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-20 flex w-full items-center justify-center bg-white p-4 shadow-md",
      )}
    >
      <ul className="flex gap-8">
        <li>
          <Link
            href="/"
            className={cn(
              "hover:bg-red-600 rounded-md px-3 py-2 text-lg font-bold text-gray-800 transition duration-300 hover:text-white",
            )}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={cn(
              "hover:bg-red-600 rounded-md px-3 py-2 text-lg font-bold text-gray-800 transition duration-300 hover:text-white",
            )}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={cn(
              "hover:bg-red-600 rounded-md px-3 py-2 text-lg font-bold text-gray-800 transition duration-300 hover:text-white",
            )}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={cn(
              "hover:bg-red-600 rounded-md px-3 py-2 text-lg font-bold text-gray-800 transition duration-300 hover:text-white",
            )}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
