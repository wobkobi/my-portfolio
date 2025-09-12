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
      "Completed hands-on projects demonstrating the practical application of AWS cloud solutions.",
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
    summary: "2021 - 2023",
    details: [
      "Majored in Software Development and Networks & Cybersecurity.",
      "Graduated with a GPA of 5.5 (B+ average), demonstrating consistent academic performance and a solid understanding of key IT concepts.",
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
    title: "Night Fill Long Life Assistant - Woolworths",
    summary: "11/2022 - 06/2023",
    details: [
      "Efficiently managed night-shift responsibilities, ensuring optimal product availability for customers.",
      "Prepared the store for morning operations, supporting seamless daytime activities.",
      "Collaborated within a team of 4-5 members to maintain productivity and store presentation.",
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
    title: "Lifeguard - Mt Albert Aquatic Centre",
    summary: "10/2019 - 05/2023",
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
    summary: "03/2023 - 11/2023",
    details: [
      "Chatbot prototype for Te Whatu Ora Counties Manukau that answers HR, Health & Safety, and location questions.",
      "Two Azure stacks (Language Studio Custom QA and Bot Framework Composer) integrated directly with Microsoft Teams.",
      "Team of 4 with a focus on accessibility and ease of use; received positive stakeholder feedback.",
    ],
    link: {
      url: "https://www.countiesmanukau.health.nz/",
      text: "Te Whatu Ora Counties Manukau",
    },
    skills: [
      "C#",
      "JavaScript",
      "HTML",
      "PowerShell",
      "Shell Scripting",
      "Azure Language Studio",
      "Azure Bot Framework Composer",
      "Microsoft Teams Integration",
      "Git",
    ],
  },
  {
    id: "project2",
    title: "iFridge",
    subtitle: "Software Developer",
    summary: "07/2022 - 11/2022",
    details: [
      "Software-as-a-Service that generates 50+ recipes using items in a virtual fridge.",
      "Progressive Web App with real-time sync and OAuth sign-in.",
      "Team project (4 members).",
    ],
    link: {
      url: "https://github.com/TheIFridge",
      text: "GitHub Repo",
    },
    skills: [
      "React",
      "Progressive Web App",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Firebase Hosting",
      "Firebase Realtime Database",
      "Firebase Authentication",
      "OAuth",
    ],
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
  },
];

export const Certifications: Certification[] = [
  {
    id: "cert1",
    title: "CCNA - Enterprise Networking, Security, and Automation",
    year: "2023",
  },
  {
    id: "cert2",
    title: "CCNA - Switching, Routing, and Wireless Essentials",
    year: "2022",
  },
  {
    id: "cert3",
    title: "CCNA - Introduction to Networks",
    year: "2021",
  },
];

export const skills: string[] = [
  // Technical
  "TypeScript",
  "JavaScript",
  "React.js",
  "Node.js",
  "Python",
  "Java",
  "C",
  "C#",
  "SQL",
  "PostgreSQL",
  "Linux",
  "Nginx",
  "Azure",
  "AWS",
  "Cloudflare",
  "HTTP",
  "DNS",
  "TCP/IP",
  "Git",
  "GitHub",
  "GitHub Actions",
  "VS Code",
  "Shell",
  "Shell Scripting",
  "PowerShell",
  "SSH",
  "SFTP",
  "REST APIs",
  "Discord API",
  "OpenAI API",
  "Tenor API",
  "iCalendar (ICS)",
  "Auckland Transport API",
  "Google Maps JavaScript API",
  "HTML",
  "Tailwind CSS",
  "Next.js",
  "Vercel",
  "Virtualisation",

  // Soft
  "Customer Service",
  "Problem-solving",
  "Quick Learner",
  "Adaptability",
  "Collaboration",
  "Attention to detail",
];
