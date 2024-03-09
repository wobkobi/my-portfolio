import React from "react";
import Nav from "@/components/Nav.client"; // Ensure this is the correct relative path

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Portfolio</h1>
        <p className="mt-2 text-gray-600">Here is my work.</p>
        {/* Add content for the portfolio page */}
      </main>
    </div>
  );
}
