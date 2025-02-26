import { Project } from "@/types/Types";

export const projects: Project[] = [
  {
    id: "1",
    name: "ChatGPT Discord Bot",
    description:
      "A discord bot that uses OpenAI's ChatGPT to chat with users. To make it fun i give it a personality so it can be more engaging to chat with. It was a fun project to work on and i learned a lot about discord bots and the OpenAI API.",
    image: "/files/chatgpt-discord-bot.jpg",
    links: "https://github.com/wobkobi/ChatGPT-Discord-Bot",
    skills: ["typescript", "discord.js", "openai-gpt"],
  },
  {
    id: "2",
    name: '"project triangle"',
    description:
      'This project was created to determine the most central location for a group to go bowling. Since we lived in different areas, I wanted a tool that could identify the technically most central location for us to meet. It shows both the geographical center of the group and the "most central" location based on the distances of each person. I plan to work on a version 2 of this project soon, which will include travel times using various transportation methods.',
    image: "/files/project-triangle.jpg",
    links: [
      "https://github.com/wobkobi/project-triangle",
      "https://project-triangle.vercel.app/", // Second link for preview
    ],
    skills: ["typescript", "google-maps-api", "next.js", "vercel"],
  },
  {
    id: "3",
    name: "Sorting Algorithms Benchmark",
    description:
      "A comprehensive Python-based benchmarking tool designed to evaluate the performance of various sorting algorithms across multiple array sizes. It executes iterations concurrently, generates CSV reports, and produces detailed markdown summaries along with an updated README. The project supports a wide variety of sorting algorithms, making it ideal for performance comparisons and algorithm analysis.",
    image: "/files/sorting-algorithms.jpg",
    links: "https://github.com/wobkobi/Sorting-Algorithms",
    skills: [
      "python",
      "multiprocessing",
      "benchmarking",
      "csv",
      "markdown",
      "algorithms",
    ],
  },
  {
    id: "4",
    name: "This Portfolio Site",
    description:
      "This is my portfolio site. I built it with Next.js and Tailwind CSS. I wanted to have a place where I could showcase my projects and skills. I also wanted to learn Next.js and Tailwind CSS, so I built this site to do just that.",
    image: "/files/portfolio.jpg",
    links: ["https://github.com/wobkobi/my-portfolio", "/"], // Second link for preview
    skills: ["next.js", "tailwind-css", "typescript", "vercel"],
  },
  {
    id: "5",
    name: "YouTube Downloader",
    description:
      "I didn't like any of the online YouTube downloaders, so I made my own. It's a simple Python script that downloads YouTube videos and playlists. It's a command-line tool that uses the yt-dlp library. But with recent changes to the YouTube API, it's not working as expected. I plan to update it soon.",
    image: "/files/youtube-downloader.jpg",
    links: "https://github.com/wobkobi/youtube-downloader",
    skills: ["python", "yt-dlp", "command-line"],
  },
  {
    id: "6",
    name: "Reaction Bot",
    description:
      'This is a Python-based Discord bot that allows users to set up specific words for the bot to react to. It also includes functionality where certain words will trigger the bot to "scream" at the user. Additionally, it features a leaderboard that tracks and displays which user has said a particular word the most.',
    image: "",
    links: "https://github.com/wobkobi/reactionBot",
    skills: ["python", "discord.py"],
  },
];
