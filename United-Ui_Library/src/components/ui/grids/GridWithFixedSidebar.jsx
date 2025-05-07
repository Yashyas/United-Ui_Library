import React from "react";

export default function GridWithFixedSidebar() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Grid container */}
      <div className="grid grid-cols-[250px_1fr] md:grid-cols-[200px_auto] gap-4 p-4 h-full">
        {/* Sidebar */}
        <div className="sticky top-0 h-screen bg-gray-800 text-white p-6 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
          <ul>
            <li className="mb-4">Home</li>
            <li className="mb-4">About</li>
            <li className="mb-4">Services</li>
            <li className="mb-4">Contact</li>
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="h-48 bg-blue-400 p-4 flex items-center justify-center text-white font-semibold">Blue</div>
            <div className="h-48 bg-green-400 p-4 flex items-center justify-center text-white font-semibold">Green</div>
            <div className="h-48 bg-red-400 p-4 flex items-center justify-center text-white font-semibold">Red</div>
            <div className="h-48 bg-yellow-400 p-4 flex items-center justify-center text-white font-semibold">Yellow</div>
            <div className="h-48 bg-purple-400 p-4 flex items-center justify-center text-white font-semibold">Purple</div>
            <div className="h-48 bg-pink-400 p-4 flex items-center justify-center text-white font-semibold">Pink</div>
          </div>
        </div>
      </div>
    </div>
  );
}
