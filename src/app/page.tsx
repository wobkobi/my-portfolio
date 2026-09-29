// src/app/page.tsx

import Section from "@/components/Section";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Projects from "@/components/sections/Projects";
import type { Metadata } from "next";
import { JSX } from "react";

/** Declares the root URL as the one indexable page, so search results point here. */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Person structured data, so search engines tie the name to this page and to
 * the linked profiles. `<` is escaped to keep the payload from closing the
 * script tag early.
 */
const personJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harrison Raynes",
  url: "https://www.harrisonraynes.com",
  jobTitle: "IT Support & Infrastructure Technician",
  address: { "@type": "PostalAddress", addressLocality: "Auckland", addressCountry: "NZ" },
  worksFor: { "@type": "Organization", name: "To the Point Tech", url: "https://tothepoint.co.nz" },
  sameAs: ["https://github.com/wobkobi", "https://linkedin.com/in/harrisonraynes"],
}).replace(/</g, "\\u003c");

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd }} />
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
