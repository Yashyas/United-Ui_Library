import React from "react";

export default function BannerWithGrid() {
  return (
    <div className="font-sans w-full bg-gray-50">
      {/* Banner Section */}
      <div className="w-full bg-indigo-600 text-white text-center py-12 px-4">
        <h1 className="text-4xl font-bold">Welcome to Our Service</h1>
        <p className="text-xl mt-4">Your one-stop solution for all your needs</p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        <div className="h-48 bg-red-300 rounded-lg shadow-lg"></div>
        <div className="h-48 bg-yellow-300 rounded-lg shadow-lg"></div>
        <div className="h-48 bg-green-300 rounded-lg shadow-lg"></div>
        <div className="h-48 bg-blue-300 rounded-lg shadow-lg"></div>
        <div className="h-48 bg-purple-300 rounded-lg shadow-lg"></div>
        <div className="h-48 bg-pink-300 rounded-lg shadow-lg"></div>
        <div className="h-48 bg-teal-300 rounded-lg shadow-lg"></div>
        <div className="h-48 bg-orange-300 rounded-lg shadow-lg"></div>
      </div>
    </div>
  );
}
