import React from "react";
import { cn } from "@/utils/cn";

export default function About() {
  return (
    <div className={cn("min-h-screen bg-white p-4 pt-20 text-center dark:bg-jet")}>
      <main className={cn("mx-auto flex max-w-[85%] flex-col items-center justify-center p-4 text-center")}>
        <h1 className={cn("text-4xl font-bold text-indigo_dye dark:text-caribbean_current")}>About Me</h1>
        <p className={cn("mt-2 text-gray-600 dark:text-platinum")}>Here's a little more about me.</p>

        {/* Introduction */}
        <section className={cn("mt-6")}>
          <h2 className={cn("text-2xl font-semibold text-indigo_dye dark:text-caribbean_current")}>Introduction</h2>
          <p className={cn("mt-2 text-gray-600 dark:text-platinum")}>
            I'm Harrison Raynes, a software developer with a passion for creating impactful and user-friendly applications. With a background in computer science, I've developed a strong foundation in
            coding, problem-solving, and project management.
          </p>
        </section>

        {/* Background */}
        <section className={cn("mt-6")}>
          <h2 className={cn("text-2xl font-semibold text-indigo_dye dark:text-caribbean_current")}>Background</h2>
          <p className={cn("mt-2 text-gray-600 dark:text-platinum")}>
            Born and raised in [Your City], I've always been fascinated by technology and its potential to change the world. From building my first computer to developing my first web application,
            I've been on a journey of continuous learning and growth.
          </p>
        </section>

        {/* Interests */}
        <section className={cn("mt-6")}>
          <h2 className={cn("text-2xl font-semibold text-indigo_dye dark:text-caribbean_current")}>Interests</h2>
          <p className={cn("mt-2 text-gray-600 dark:text-platinum")}>
            Outside of programming, I enjoy [list a few of your hobbies or interests]. Whether it's [hobby 1], [hobby 2], or [hobby 3], I find these activities rejuvenating and a great way to balance
            my professional interests with personal well-being.
          </p>
        </section>

        {/* Goals */}
        <section className={cn("mb-8 mt-6")}>
          <h2 className={cn("text-2xl font-semibold text-indigo_dye dark:text-caribbean_current")}>Goals</h2>
          <p className={cn("mt-2 text-gray-600 dark:text-platinum")}>
            Looking ahead, my goal is to further my expertise in [Your Goal], contributing to projects and technologies that have a meaningful impact. I'm excited about the future of tech and my role
            in shaping it.
          </p>
        </section>
      </main>
    </div>
  );
}
