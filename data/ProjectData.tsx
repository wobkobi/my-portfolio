import { Project } from "@/types/Types";

export const projects: Project[] = [
  {
    id: "1",
    name: "ChatGPT Discord Bot",
    description:
      'A sophisticated Discord bot powered by OpenAI’s GPT, featuring thread-aware memory with automated summarisation, persona-based and fine-tuned modes, rate-limiting cooldowns, emoji-shortcode replacement, inline LaTeX-to-image rendering, comprehensive image/file input parsing, rotating logs, and a Build & Test CI pipeline. Built with TypeScript, Discord.js and Node.js. I made this to make "clones" of my friends but with exaggerated personalities, and they love it, especially the fine-tuned models.',
    image: "/images/chatgpt-discord-bot.jpg",
    links: "https://github.com/wobkobi/ChatGPT-Discord-Bot",
    skills: ["TypeScript", "Discord.js", "OpenAI API", "Node.js"],
  },
  {
    id: "2",
    name: '"project triangle"',
    description:
      'This project was created to determine the most central location for a group to go bowling. Since we lived in different areas, I wanted a tool that could identify the technically most central location for us to meet. It shows both the geographical centre of the group and the "most central" location based on the distances of each person. I plan to work on a version 2 of this project soon, which will include travel times using various transportation methods.',
    image: "/images/project-triangle.jpg",
    links: [
      "https://github.com/wobkobi/project-triangle",
      "https://project-triangle.vercel.app/", // Second link for preview
    ],
    skills: ["TypeScript", "Google Maps API", "Next.js", "Vercel"],
  },
  {
    id: "3",
    name: "Sorting Algorithms Benchmark",
    description:
      "A comprehensive Python-based benchmarking tool designed to evaluate the performance of various sorting algorithms across multiple array sizes. It executes iterations concurrently, generates CSV reports, and produces detailed markdown summaries along with an updated README. The project supports a wide variety of sorting algorithms, making it ideal for performance comparisons and algorithm analysis.",
    image: "/images/sorting-algorithms.jpg",
    links: "https://github.com/wobkobi/Sorting-Algorithms",
    skills: ["Python", "Multiprocessing", "Benchmarking", "CSV", "Algorithms"],
  },
  {
    id: "4",
    name: "This Portfolio Site",
    description:
      "It's this site (Crazy). I built it with Next.js and Tailwind CSS. I wanted to have a place where I could showcase my projects and skills. I also wanted to learn Next.js and Tailwind CSS, so I built this site to do just that.",
    image: "/images/portfolio.jpg",
    links: ["https://github.com/wobkobi/my-portfolio", "/"], // Second link for preview
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
  },
  {
    id: "5",
    name: "YouTube Downloader",
    description:
      "I didn't like any of the online YouTube downloaders, so I made my own. It's a simple Python script that downloads YouTube videos and playlists. It's a command-line tool that uses the yt-dlp library. But with recent changes to the YouTube API, it's not working as expected. I plan to update it soon.",
    image: "/images/youtube-downloader.jpg",
    links: "https://github.com/wobkobi/youtube-downloader",
    skills: ["Python", "YT-DLP", "Command-Line"],
  },
  {
    id: "6",
    name: "Reaction Bot",
    description:
      'This is a Python-based Discord bot that allows users to set up specific words for the bot to react to. It also includes functionality where certain words will trigger the bot to "scream" at the user. Additionally, it features a leaderboard that tracks and displays which user has said a particular word the most.',
    image: "",
    links: "https://github.com/wobkobi/reactionBot",
    skills: ["Python", "Discord.py"],
  },
];
