// pages/about.tsx

import React from "react";
import Nav from "@/components/Nav.client"; // Ensure the correct path

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        <p className="mt-2 text-gray-600">Learn more about my background.</p>
        {/* Further content */}
      </main>
    </div>
  );
}
