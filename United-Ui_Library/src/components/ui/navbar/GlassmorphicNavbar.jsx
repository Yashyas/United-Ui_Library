import { useState } from "react";

export default function GlassmorphicNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">GlassNav</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600 transition">About</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Services</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
        </div>

        {/* Hamburger Button (SVG icons) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // X icon (Close)
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Menu icon (Hamburger)
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white/80 backdrop-blur-md border-t border-gray-200">
          <a href="#" className="block text-gray-700 hover:text-indigo-600 transition">Home</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 transition">About</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 transition">Services</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
