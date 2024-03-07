
// pages/index.tsx
import React from 'react';
import Nav from './components/Nav.client'; // Adjust the path as needed

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-blue-500">
      <Nav />
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-red-500">Harrison Raynes</h1>
        <p className="mt-4 text-xl text-purple-500">
          Welcome to my personal portfolio where I showcase my projects and skills.
        </p>
      </div>
    </div>
  );
}
