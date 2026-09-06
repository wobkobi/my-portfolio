// src/data/PortfolioData.tsx
// Portfolio page content: education, work, projects, certifications, and the skill cloud.
// Kept in sync with the CV in public/files.
"use client";

import { Certification, DataBox } from "@/types/Types";

export const Education: DataBox[] = [
  {
    id: "edu1",
    title: "AWS re/Start",
    subtitle: "Cloud Training Programme",
    summary: "2024",
    details: [
      "Covered core AWS services and foundational cloud computing concepts.",
      "Practised Python scripting, Linux administration, and the network fundamentals used in cloud support.",
      "Completed hands-on labs and projects building on AWS.",
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
    title: "Bachelor of Computer and Information Science",
    subtitle: "Auckland University of Technology",
    summary: "2021 - 2023",
    details: [
      "Majored in Software Development and Networks & Cybersecurity.",
      "Graduated with a GPA of 5.5 (B+ average).",
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
    id: "work3",
    title: "Owner & Technician - To the Point Tech",
    subtitle: "IT Support",
    summary: "10/2025 - Present",
    details: [
      "Provide on-site and remote IT support to residential and small business clients across Auckland.",
      "Diagnose and resolve hardware, operating system, email, printer, and connectivity faults across Windows and macOS.",
      "Configure Wi-Fi networks, routers, and new device setups; handle data migration, backup, and recovery.",
      "Log and triage incoming jobs, track them through to resolution, and keep structured records of work performed, alongside scheduling, invoicing, and follow-up.",
      "Standardise setups and keep records for repeat clients to reduce recurring issues.",
    ],
    skills: [
      "Windows",
      "macOS",
      "Microsoft 365",
      "Hardware diagnostics",
      "Network configuration",
      "Data recovery",
      "Remote support",
      "Client communication",
      "Invoicing & scheduling",
    ],
    link: {
      url: "https://tothepoint.co.nz",
      text: "tothepoint.co.nz",
    },
  },
  {
    id: "work1",
    title: "Night Fill Assistant - Woolworths",
    summary: "11/2022 - 06/2023",
    details: [
      "Restocked and faced shelves on overnight shifts so the store was ready to trade at opening.",
      "Worked to fixed deadlines with minimal supervision as part of a night crew, checking stock condition and presentation.",
    ],
    skills: ["Inventory management", "Team collaboration", "Time management", "Multitasking"],
  },
  {
    id: "work2",
    title: "Lifeguard - Mount Albert Aquatic Centre",
    summary: "10/2019 - 05/2023",
    details: [
      "Responsible for public safety at a busy aquatic centre, working in a team of three to six, coordinating with front of house.",
      "Dealt with the public all day, from answering questions to enforcing rules with people who did not want to hear it, and stayed calm during incidents.",
    ],
    skills: ["Risk assessment", "Emergency response", "Conflict resolution", "Customer service"],
  },
];

export const Projects: DataBox[] = [
  {
    id: "project6",
    title: "Home Server & Network Lab",
    subtitle: "Systems & Network Administration - Personal Project",
    summary: "2022 - Present",
    details: [
      "Administers a TrueNAS SCALE server with a 46 TB ZFS pool, covering special vdev configuration, snapshot lifecycle management, and command-line diagnosis of checksum and capacity faults.",
      "Runs 19 containerised services and two virtual machines, managing CPU and memory limits, GPU passthrough for hardware transcoding, and inter-container networking.",
      "Maintains external access through Cloudflare tunnels and DNS, with Tailscale for device-to-device connectivity and VPN routing for selected traffic.",
    ],
    skills: [
      "TrueNAS SCALE",
      "ZFS",
      "Docker",
      "Linux",
      "Networking",
      "Cloudflare",
      "Tailscale",
      "VPN",
      "Nginx",
      "PowerShell",
    ],
  },
  {
    id: "project1",
    title: "Chat Bot Platform for Counties Manukau Health",
    subtitle: "Software Developer - University Team Project",
    summary: "03/2023 - 11/2023",
    details: [
      "Chatbot prototype for Te Whatu Ora Counties Manukau that fields HR, Health & Safety, and location questions.",
      "Two Azure stacks, Language Studio Custom QA or Bot Framework Composer, slot straight into Microsoft Teams.",
      "Delivered for a real external client as a university team project of 4, working to the client's requirements across a full academic year.",
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
    subtitle: "Software Developer - University Team Project",
    summary: "07/2022 - 11/2022",
    details: [
      "Software-as-a-Service that allows users to generate 50+ recipes using the items listed in their virtual fridge.",
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
      "Built in my own time: AT Route Performance, a ChatGPT-powered Discord bot, a Discord events-to-iCal bot, an emoji reaction bot, and a Google Maps midpoint finder.",
      "All public, so the code and commit history are open to read.",
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
  // Support & infrastructure
  "Windows",
  "macOS",
  "Linux",
  "Ubuntu",
  "Microsoft 365",
  "Active Directory",
  "TrueNAS SCALE",
  "ZFS",
  "Docker",
  "Tailscale",
  "VPN",
  "Virtualisation",
  "Hardware Diagnostics",
  "Backup & Recovery",
  "Data Recovery",
  "Printer & Peripheral Setup",
  "Remote Support",
  "TeamViewer",
  "RDP",

  // Networking
  "TCP/IP",
  "DNS",
  "DHCP",
  "VLANs",
  "Wi-Fi",
  "Routers & Switches",
  "HTTP",
  "SSL/TLS",
  "Nginx",
  "Cloudflare",
  "Cloudflare Tunnels",

  // Development & tooling
  "TypeScript",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "C",
  "C#",
  "SQL",
  "MongoDB",
  "Prisma",
  "HTML",
  "Tailwind CSS",
  "REST APIs",
  "Discord API",
  "OpenAI API",
  "Tenor API",
  "Giphy API",
  "iCalendar (ICS)",
  "Auckland Transport API",
  "Google Maps JavaScript API",
  "Leaflet",
  "Azure",
  "AWS",
  "Vercel",
  "Git",
  "GitHub",
  "GitHub Actions",
  "VS Code",
  "Shell Scripting",
  "Bash",
  "PowerShell",
  "SSH",
  "SFTP",

  // Soft
  "Customer Service",
  "Fault Isolation",
  "Problem-solving",
  "Documentation",
  "Quick Learner",
  "Adaptability",
  "Collaboration",
  "Time Management",
  "Attention to detail",
];
