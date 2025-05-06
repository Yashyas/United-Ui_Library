import { useState, useEffect } from "react";

export default function ScrollProgressNavbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Scroll Progress Bar */}
      <div
        className="sticky top-0 left-0 w-full h-1 bg-indigo-600"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-white shadow-md w-full">
        <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-indigo-600">
            <a href="#">Logo</a>
          </div>

          {/* Menu Links */}
          <div className="hidden sm:flex space-x-8">
            <a href="#home" className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-all duration-200">
              Home
            </a>
            <a href="#about" className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-all duration-200">
              About
            </a>
            <a href="#services" className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-all duration-200">
              Services
            </a>
            <a href="#contact" className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-all duration-200">
              Contact
            </a>
          </div>

          {/* Hamburger for Mobile */}
          <button className="sm:hidden text-2xl text-gray-700">
            ☰
          </button>
        </div>
      </nav>
    </div>
  );
}
