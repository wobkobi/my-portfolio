// src/app/page.tsx

import Section from "@/components/Section";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Projects from "@/components/sections/Projects";
import { JSX } from "react";

/**
 * HomePage component.
 *
 * The whole site as one scrolling page. Section ids are the anchor targets the
 * navbar and hero link to, and the ones the retired routes redirect to. Tints
 * alternate so neighbouring bands stay distinguishable.
 * @returns The single-page layout.
 */
function HomePage(): JSX.Element {
  return (
    <>
      <section id="top" className="relative w-full scroll-mt-24 sm:scroll-mt-32">
        <Hero />
      </section>

      <Section id="portfolio" tinted>
        <Portfolio />
      </Section>

      <Section id="projects">
        <Projects />
      </Section>

      <Section id="about" tinted>
        <About />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>
    </>
  );
}

export default HomePage;
