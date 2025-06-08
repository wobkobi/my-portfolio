"use client";

import { Project } from "@/types/Types";

export const projects: Project[] = [
  {
    id: "1",
    name: "ChatGPT Discord Bot",
    description:
      "A sophisticated and feature-rich Discord bot powered by OpenAI's GPT technology, it supports thread-aware memory with automatic summarisation, persona-based interactions, fine-tuned conversational models, rate-limiting cooldowns, emoji shortcode conversions, inline LaTeX rendering, and robust image and file parsing. This comprehensive feature set and a streamlined Build & Test CI pipeline make it a powerful tool for Discord users. Developed with TypeScript, Discord.js, Node.js, and OpenAI API. I created this bot to generate entertaining 'clones' of friends with exaggerated personalities, earning enthusiastic feedback from users.",
    image: "/images/chatgpt-discord-bot.jpg",
    links: "https://github.com/wobkobi/ChatGPT-Discord-Bot",
    skills: [
      "TypeScript",
      "Discord.js",
      "OpenAI API",
      "Node.js",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    id: "2",
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
      "Frontend Development",
    ],
  },
  {
    id: "3",
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
    id: "4",
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
    id: "5",
    name: "YouTube Downloader",
    description:
      "A user-friendly Python command-line tool designed for effortlessly downloading YouTube videos and playlists, it leverages the yt-dlp library and provides straightforward functionality for personal use. Due to recent YouTube API changes, some features need updates planned for future revisions.",
    image: "/images/youtube-downloader.jpg",
    links: "https://github.com/wobkobi/youtube-downloader",
    skills: ["Python", "yt-dlp", "Command-Line Interface", "API Integration"],
  },
  {
    id: "6",
    name: "Reaction Bot",
    description:
      "A dynamic Python-based Discord bot that reacts to user-defined keywords and phrases. It humorously 'screams' at users based on specific triggers and maintains a leaderboard tracking word usage frequency among server members, adding a fun, competitive element.",
    image: "",
    links: "https://github.com/wobkobi/reactionBot",
    skills: ["Python", "Discord.py", "Bot Development", "Data Tracking"],
  },
];
