"use client";

import { Project } from "@/types/Types";

export const projects: Project[] = [
  {
    id: "1",
    name: "ChatGPT Discord Bot",
    description:
      "A lean, GPT-powered Discord companion with thread-aware memory and auto-summaries, persona-driven replies, fine-tuned conversational models, and built-in rate-limiting. It handles emoji shortcodes, renders LaTeX inline as images, parses images and files, and even converts requests into private “ephemeral” responses, all wrapped in a robust TypeScript + Discord.js codebase and backed by a CI-driven Build & Test pipeline.",
    image: "/images/chatgpt-discord-bot.jpg",
    links: "https://github.com/wobkobi/ChatGPT-Discord-Bot",
    skills: [
      "TypeScript",
      "Node.js",
      "Discord.js",
      "OpenAI API",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    id: "2",
    name: "Discord Event-to-ICS Bot",
    description:
      "A Python-powered Discord bot that lets users subscribe to Scheduled Events and receive a personal webcal (.ics) feed. It watches for event creations, edits (bumping SEQUENCE so calendar clients see updates, not duplicates), and cancellations, then regenerates each subscriber’s ICS feed on the fly. Includes slash commands for managing reminders, a lightweight HTTP server to serve iCalendar files, and seamless background rebuilds.",
    image: "",
    links: "https://github.com/wobkobi/discord-event-to-ics",
    skills: [
      "Python",
      "Pycord",
      "iCalendar / ICS Generation",
      "Nginx / Cloudflare",
      "Ubuntu Server",
      "Cron / Background Tasks",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    id: "3",
    name: "Project Triangle",
    description:
      "This is a web application designed to identify the optimal central location for group meetings, such as bowling events. It calculates geographical centres and the most convenient location based on user distances. Future improvements will incorporate travel times using different transportation modes, enhancing utility.",
    image: "/images/project-triangle.jpg",
    links: [
      "https://github.com/wobkobi/project-triangle",
      "https://project-triangle.vercel.app/",
    ],
    skills: [
      "TypeScript",
      "Next.js",
      "Google Maps API",
      "Vercel",
      "Front-End Development",
    ],
  },
  {
    id: "4",
    name: "Sorting Algorithms Benchmark",
    description:
      "A detailed Python benchmarking tool designed to evaluate and compare the performance of various sorting algorithms. The tool executes tests concurrently on different array sizes, generating comprehensive CSV reports, detailed markdown summaries, and automatic README updates. It is ideal for performance analysis and algorithmic studies.",
    image: "/images/sorting-algorithms.jpg",
    links: "https://github.com/wobkobi/Sorting-Algorithms",
    skills: [
      "Python",
      "Multiprocessing",
      "Benchmarking",
      "Data Analysis",
      "CSV",
      "Algorithm Analysis",
    ],
  },
  {
    id: "5",
    name: "Personal Portfolio Site",
    description:
      "My portfolio site (the one you're viewing right now!). Built using Next.js and Tailwind CSS, it showcases my professional projects and skills. It was developed as a hands-on project to enhance my understanding and proficiency in modern web technologies.",
    image: "/images/portfolio.jpg",
    links: ["https://github.com/wobkobi/my-portfolio", "/"],
    skills: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
      "Web Development",
    ],
  },
  {
    id: "6",
    name: "YouTube Downloader",
    description:
      "A user-friendly Python command-line tool designed for effortlessly downloading YouTube videos and playlists, it leverages the yt-dlp library and provides straightforward functionality for personal use. Due to recent YouTube API changes, some features need updates planned for future revisions.",
    image: "/images/youtube-downloader.jpg",
    links: "https://github.com/wobkobi/youtube-downloader",
    skills: ["Python", "yt-dlp", "Command-Line Interface", "API Integration"],
  },
  {
    id: "7",
    name: "Reaction Bot",
    description:
      "A dynamic Python-based Discord bot that reacts to user-defined keywords and phrases. It humorously 'screams' at users based on specific triggers and maintains a leaderboard tracking word usage frequency among server members, adding a fun, competitive element.",
    image: "",
    links: "https://github.com/wobkobi/reactionBot",
    skills: ["Python", "Discord.py", "Bot Development", "Data Tracking"],
  },
];
