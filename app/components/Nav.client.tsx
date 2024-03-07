// Nav.client.tsx

"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

const Nav = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Adjusted navbarClasses to include conditional positioning
  const navbarClasses = `flex justify-between items-center p-4 z-10 transition-all duration-300 ${
    isHome ? "relative text-primary" : "fixed inset-x-0 top-0 bg-white text-gray-800 shadow-md"
  }`;

  return (
    <div className={isHome ? "" : "fixed inset-x-0 top-0"}>
      <nav className={navbarClasses}>
        <ul className="flex gap-8">
          <li>
            <Link href="/" className="hover:text-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-secondary">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-secondary">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-secondary">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
