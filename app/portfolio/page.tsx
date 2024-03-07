import React from "react";
import Nav from "../components/Nav.client"; // Ensure this is the correct relative path

export default function Portfolio() {
  return (
    <div className="bg-white min-h-screen">
      <Nav />
      <main className="flex flex-col justify-center items-center text-center min-h-screen p-4">
        <h1 className="text-4xl font-bold text-gray-800">Portfolio</h1>
        <p className="text-gray-600 mt-2">Here is my work.</p>
        {/* Add content for the portfolio page */}
      </main>
    </div>
  );
}
