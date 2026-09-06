// src/data/ProjectData.tsx
"use client";

import { Project } from "@/types/Types";

export const projects: Project[] = [
  {
    id: "1",
    name: "AT Route Performance",
    description:
      "Measures how far Auckland Transport runs from its own published schedule.\n" +
      "Polls AT's GTFS-RT feed every couple of minutes and stores each stop arrival with its deviation.\n" +
      "Rolls completed service days into per-route summaries behind daily boards, rankings, and per-route and per-stop pages.\n" +
      "Counts cancellations separately and filters out ghost readings so a cancelled service cannot flatter a route.",
    image: "",
    links: "https://github.com/wobkobi/at-route-performance",
    skills: ["TypeScript", "Next.js", "MongoDB", "Prisma", "Auckland Transport API", "Leaflet"],
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
    skills: ["Python", "discord.py", "ICS Calendar library", "Nginx", "Cloudflare"],
  },
  {
    id: "3",
    name: "ChatGPT Discord Bot",
    description:
      "Discord bot using the OpenAI API to generate replies with configurable personality, tailored to each user.\n" +
      "Thread-aware memory, emoji replacement, LaTeX-to-image conversion, and image/file inputs enhance chats.\n" +
      "Slash commands for controlling cooldown between messages, encrypted memory storage, and rotating logs make debugging easy.",
    image: "/images/chatgpt-discord-bot.jpg",
    links: "https://github.com/wobkobi/discord-chatgpt-bot",
    skills: ["TypeScript", "Discord.js", "OpenAI API", "LaTeX Rendering", "Tenor API", "Giphy API"],
  },
  {
    id: "4",
    name: "Triangle Location Dashboard",
    description:
      "Website to select addresses and candidate meeting places on Google Maps.\n" +
      "Computes geographic midpoint and picks the most central option.\n" +
      "Drag-and-drop lists and auto-fit map bounds for better UX.\n" +
      "Ranks by real driving times via the Routes API, falling back to straight-line distance.",
    image: "/images/project-triangle.jpg",
    links: ["https://github.com/wobkobi/project-triangle", "https://project-triangle.vercel.app/"],
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Google Maps JavaScript API"],
  },
  {
    id: "5",
    name: "ReactionBot",
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
];
