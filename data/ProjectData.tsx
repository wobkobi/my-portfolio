"use client";

import { Project } from "@/types/Types";

export const projects: Project[] = [
  {
    id: "1",
    name: "Auckland Transport Tracker",
    description:
      "Gets real-time data for Auckland buses, trains, and ferries.\n" +
      "Compares actual arrivals against scheduled stop times.\n" +
      "Work in progress. Backend currently operational.",
    image: "",
    links: "https://github.com/wobkobi/public-transport-routing-app",
    skills: ["TypeScript", "PostgreSQL", "Next.js", "Auckland Transport API"],
  },
  {
    id: "2",
    name: "Discord Events-to-iCal Bot",
    description:
      "Slash command exports upcoming Discord events to a universal .ics feed.\n" +
      "Handles timezone conversion and auto-fills missing end times.\n" +
      "Attaches the .ics file directly in Discord. Roadmap includes more calendar features.",
    image: "",
    links: "https://github.com/wobkobi/discord-event-to-ics",
    skills: [
      "Python",
      "discord.py",
      "ICS Calendar library",
      "Nginx",
      "Cloudflare",
    ],
  },
  {
    id: "3",
    name: "ChatGPT Discord Bot",
    description:
      "Large personal project focused on high-quality chat in Discord.\n" +
      "Persona replies with thread-aware memory and cooldown controls.\n" +
      "Emoji replacement, LaTeX-to-image, and image/file inputs.\n" +
      "Supports edge cases, math rendering, and Tenor/Giphy media.\n" +
      "Encrypted memory storage and rotating logs for clean debugging.",
    image: "/images/chatgpt-discord-bot.jpg",
    links: "https://github.com/wobkobi/ChatGPT-Discord-Bot",
    skills: [
      "TypeScript",
      "Discord.js",
      "OpenAI API",
      "Shell Scripting",
      "LaTeX Rendering",
      "Tenor API",
    ],
  },
  {
    id: "4",
    name: "ReactionBot (StinkyBot - Working Title)",
    description:
      "Combines multiple bot ideas into one.\n" +
      "Reacts with emojis using regex-based phrase triggers.\n" +
      "Rewrites social links into embeddable forms with poster confirmation.\n" +
      "Slash commands to add or update keywords.\n" +
      "Originally Python. Migrating to TypeScript.",
    image: "",
    links: "https://github.com/wobkobi/reactionBot",
    skills: ["Python", "discord.py", "TypeScript", "Discord.js"],
  },
  {
    id: "5",
    name: "Triangle Location Dashboard",
    description:
      "Website to select addresses and candidate meeting places on Google Maps.\n" +
      "Computes geographic midpoint and picks the most central option.\n" +
      "Drag-and-drop lists and auto-fit map bounds for better UX.\n" +
      "Planned: use routes and travel times instead of straight lines.",
    image: "/images/project-triangle.jpg",
    links: [
      "https://github.com/wobkobi/project-triangle",
      "https://project-triangle.vercel.app/",
    ],
    skills: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Google Maps JavaScript API",
    ],
  },
];
