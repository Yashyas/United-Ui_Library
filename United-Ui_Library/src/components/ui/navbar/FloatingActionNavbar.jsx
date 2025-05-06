import { useEffect, useState } from "react";

export default function FloatingActionNavbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100); // Animated entrance
    return () => clearTimeout(timeout);
  }, []);

  return (
    
    <nav 
    // Add fixed in className for a fixed bottom
      className={`bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-lg border border-gray-300 shadow-lg rounded-full px-4 py-2 flex items-center space-x-6 transition-opacity duration-500 ease-out ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      {/* Home */}
      <button className="group relative">
        <span className="sr-only">Home</span>
        <svg
          className="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9v9a2 2 0 01-2 2h-4a2 2 0 01-2-2V13H9v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Home
        </span>
      </button>

      {/* Search */}
      <button className="group relative">
        <span className="sr-only">Search</span>
        <svg
          className="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
        </svg>
        <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Search
        </span>
      </button>

      {/* Add */}
      <button className="group relative">
        <span className="sr-only">Add</span>
        <svg
          className="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Add
        </span>
      </button>

      {/* Profile */}
      <button className="group relative">
        <span className="sr-only">Profile</span>
        <svg
          className="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A7.967 7.967 0 0112 15c2.21 0 4.21.896 5.879 2.345M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Profile
        </span>
      </button>
    </nav>
  );
}
