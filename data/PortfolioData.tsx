// data/PortfolioData.tsx
"use client";

import { Certification, DataBox } from "@/types/Types";

/**
 * Each item can now optionally list the specific skills gained.
 */
export const Education: DataBox[] = [
  {
    id: "edu1",
    title: "AWS re/Start Certification",
    summary: "2024",
    details: [
      "Acquired practical skills and knowledge in core AWS services and foundational cloud computing concepts.",
      "Developed expertise in Python scripting, Linux administration, and network fundamentals essential for cloud support.",
      "Successfully completed hands-on projects demonstrating effective application of AWS cloud solutions.",
    ],
    skills: [
      "AWS (EC2, S3, IAM)",
      "Python scripting",
      "Linux administration",
      "Network fundamentals",
    ],
  },
  {
    id: "edu2",
    title: "Bachelor of Computer and Information Sciences",
    summary: "2021 – 2023",
    details: [
      "Majored in Software Development and Networks & Cyber Security.",
      "Graduated with a GPA of 5.5 (B+ average), highlighting consistent academic performance and understanding of key IT concepts.",
    ],
    skills: [
      "Software Development",
      "Networks & Cyber Security",
      "Coding Fundamentals",
      "Programming Best Practices",
      "Network Architecture & Protocols",
      "Academic Research",
      "Problem Solving",
    ],
  },
];

export const WorkExperience: DataBox[] = [
  {
    id: "work1",
    title: "Night Fill Long Life Assistant – Woolworths",
    summary: "11/2022 – 06/2023",
    details: [
      "Efficiently managed night-shift responsibilities, ensuring optimal product availability for customers.",
      "Prepared the store for morning operations, supporting seamless daytime activities.",
      "Collaborated within a team of 4–5 members to maintain productivity and store presentation.",
    ],
    skills: [
      "Inventory management",
      "Team collaboration",
      "Time management",
      "Multitasking",
    ],
  },
  {
    id: "work2",
    title: "Lifeguard – Mt Albert Aquatic Centre",
    summary: "10/2019 – 05/2023",
    details: [
      "Maintained vigilant supervision to ensure visitor safety, significantly reducing incident risk.",
      "Performed routine facility checks and promptly addressed safety hazards.",
      "Provided exceptional customer service, fostering a welcoming environment for guests.",
    ],
    skills: [
      "Risk assessment",
      "Emergency response",
      "Facility maintenance",
      "Customer service",
    ],
  },
];

export const Projects: DataBox[] = [
  {
    id: "project1",
    title: "Chat Bot Platform for Counties Manukau Health",
    summary: "02/2023 – 11/2023",
    details: [
      "Developed a chatbot using Microsoft Bot Framework Composer to improve digital communications as a part of Team of 4",
      "Focused on accessibility and ease of use, receiving positive stakeholder feedback.",
    ],
    link: {
      url: "https://www.countiesmanukau.health.nz/",
      text: "Counties Manukau Health",
    },
    skills: [
      "Microsoft Bot Framework",
      "TypeScript",
      "Teams integration",
      "Accessibility design",
    ],
  },
  {
    id: "project2",
    title: "iFridge",
    subtitle: "Software Developer",
    summary: "07/2022 – 11/2022",
    details: [
      "Software as a Service that can generate 50+ recipes using items listed in their digital fridge with a Team of 4 of us",
    ],
    link: {
      url: "https://github.com/TheIFridge",
      text: "GitHub Repo",
    },
    skills: ["Node.js backend", "Web scraping", "Data analysis", "API design"],
  },
  {
    id: "project3",
    title: "Personal GitHub Projects",
    subtitle: "Ongoing Side Projects",
    summary: "2021 - current",
    details: [
      "Maintain a portfolio of 10+ personal projects in a variety of languages and frameworks.",
      "Demonstrate continuous learning via side builds and experiments.",
    ],
    link: [
      {
        url: "https://github.com/wobkobi",
        text: "My GitHub",
      },
      { url: "/projects", text: "View on this Site" },
    ],
    skills: ["Full-stack development", "Git workflow", "Rapid prototyping"],
  },
];

export const Certifications: Certification[] = [
  {
    id: "cert1",
    title: "CCNA – Enterprise Networking, Security, and Automation",
    year: "2023",
  },
  {
    id: "cert2",
    title: "CCNA – Switching, Routing, and Wireless Essentials",
    year: "2022",
  },
  {
    id: "cert3",
    title: "CCNA – Introduction to Networks",
    year: "2021",
  },
];

/**
 * Global list of purely technical skills used across the site.
 * “Soft” skills have been moved into each DataBox’s own `skills` field.
 */
export const skills: string[] = [
  "AWS",
  "Bot Development",
  "C",
  "Cloud Computing",
  "CSS",
  "Discord.js",
  "Discord.py",
  "Excel",
  "Git",
  "GitHub Actions",
  "Google Maps API",
  "HTML",
  "Java",
  "JavaScript",
  "LaTeX",
  "Linux",
  "Multiprocessing",
  "Next.js",
  "Node.js",
  "PHP",
  "Python",
  "React.js",
  "SQL",
  "Tailwind CSS",
  "TypeScript",
  "Vercel",
  "Virtualisation",
  "Web Scraping",
  "Windows Server",
];
