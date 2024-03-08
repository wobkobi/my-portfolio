// pages/index.js or pages/index.tsx based on your project setup

import React from "react";
import Nav from "./components/Nav.client"; // Adjust the import path as necessary
import { cn } from "./utils/cn";

const HomePage = () => {
  return (
    <div className={cn("flex min-h-screen flex-col")}>
      <Nav />
      <div className={cn("flex flex-grow items-center justify-center")}>
        <div className="px-4 text-center">
          {/* Using flex and flex-wrap to manage the name's responsiveness */}
          <h1
            className={cn(
              "text-4xl font-bold sm:flex sm:flex-wrap sm:justify-center sm:gap-2",
            )}
          >
            <span className={cn("block sm:inline")}>Harrison</span>
            {/* Conditional rendering or utility classes could be applied here if needed */}
            <span className={cn("block sm:inline")}>Raynes</span>
          </h1>
          <p className={cn("mt-4 text-lg")}>
            Welcome to my personal portfolio. Explore and learn more about me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
