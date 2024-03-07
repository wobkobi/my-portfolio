// pages/about.tsx

import React from 'react';
import Nav from '../components/Nav.client'; // Ensure the correct path

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Nav />
      <main className="flex flex-col justify-center items-center text-center min-h-screen p-4">
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        <p className="text-gray-600 mt-2">Learn more about my background.</p>
        {/* Further content */}
      </main>
    </div>
  );
}
