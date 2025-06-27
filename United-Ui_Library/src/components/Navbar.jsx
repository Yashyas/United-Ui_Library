import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 left-0 w-full z-101 bg-white/30 backdrop-blur-md border-b border-gray-200/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          style={{ fontFamily: "'Qurova', sans-serif" }}
          className="text-2xl font-extrabold tracking-wide text-white drop-shadow-sm uppercase"
        >
          United <span className="text-purple-500">Ui</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white  px-3 py-2 rounded font-semibold hover:text-black hover:bg-white/50 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white px-3 py-2 rounded font-semibold hover:text-black hover:bg-white/50 transition"
          >
            About
          </Link>
          <Link
            to="/library"
            className="text-white px-3 py-2 rounded font-semibold hover:text-black hover:bg-white/50 transition"
          >
            Library
          </Link>
          <Link
            to="/contact"
            className="text-white px-3 py-2 rounded font-semibold hover:text-black hover:bg-white/50 transition"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Button (SVG icons) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // X icon (Close)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Menu icon (Hamburger)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      
        {isOpen && (
            <div
              className={`absolute top-full left-0 w-full px-4 pt-2 space-y-2 bg-white/50 backdrop-blur-md border-t border-white/50 shadow-lg transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
              } overflow-hidden z-50`}
            >
              <Link to="/" className="block text-white px-3 py-2 rounded font-semibold hover:text-black hover:bg-white/50 transition">Home</Link>
              <Link to="/about" className="block text-white px-3 py-2 rounded font-semibold hover:text-black hover:bg-white/50 transition">About</Link>
              <Link to="/library" className="block text-white px-3 py-2 rounded font-semibold hover:text-black hover:bg-white/50 transition">Library</Link>
              <Link to="/contact" className="block text-white px-3 py-2 rounded font-semibold hover:text-black hover:bg-white/50 transition">Contact</Link>
            </div>
          )}
          

    </nav>
  );
}
