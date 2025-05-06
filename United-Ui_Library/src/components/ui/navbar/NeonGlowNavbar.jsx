import { useState } from "react";

export default function NeonGlowNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full">
      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center p-4 bg-black bg-opacity-60 text-white font-sans shadow-lg">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">
          Neon Logo
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-lg font-bold uppercase tracking-wide hover:text-pink-500 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg font-bold uppercase tracking-wide hover:text-pink-500 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-lg font-bold uppercase tracking-wide hover:text-pink-500 transition-all duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="text-lg font-bold uppercase tracking-wide hover:text-pink-500 transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-20 md:hidden">
          <div className="flex flex-col items-center pt-12 space-y-6">
            <a
              href="#"
              className="text-xl font-bold uppercase tracking-wide text-white hover:text-pink-500"
            >
              Home
            </a>
            <a
              href="#"
              className="text-xl font-bold uppercase tracking-wide text-white hover:text-pink-500"
            >
              About
            </a>
            <a
              href="#"
              className="text-xl font-bold uppercase tracking-wide text-white hover:text-pink-500"
            >
              Services
            </a>
            <a
              href="#"
              className="text-xl font-bold uppercase tracking-wide text-white hover:text-pink-500"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
