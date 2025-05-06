import { useState } from "react";

export default function CenteredNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 relative">
          {/* Left Links */}
          <div className="hidden md:flex space-x-6 items-center flex-grow">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Blog</a>
          </div>

          {/* Logo */}
          <div className="text-xl font-bold text-center text-indigo-600 absolute left-1/2 transform -translate-x-1/2">
            MyBrand
          </div>

          {/* Right Links */}
          <div className="hidden md:flex space-x-6 items-center flex-grow justify-end">
            <a href="#" className="nav-link">Portfolio</a>
            <a href="#" className="nav-link">Contact</a>
            {/* Optional Theme Toggle */}
            <button
              title="Toggle Theme"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              🌓
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-600">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-4">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Portfolio</a>
            <a href="#" className="nav-link">Contact</a>
          </div>
        )}
      </div>

      {/* Tailwind Utility Class Definitions */}
      <style jsx>{`
        .nav-link {
          position: relative;
          font-weight: 500;
          color: #4B5563;
          transition: transform 0.3s ease;
          display: block;
          padding: 0.5rem 1rem;
        }
        .nav-link:hover {
          transform: scale(1.05) rotateX(5deg);
          color: #4F46E5;
        }
      `}</style>
    </header>
  );
}
