import { useState } from "react";

export default function VerticalPopoutNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Button for mobile view */}
      <button
        onClick={handleToggle}
        className="md:hidden text-2xl text-gray-600 p-4 absolute top-4 left-4 z-50"
      >
        ☰
      </button>

      {/* Overlay when menu is open (only on mobile view) */}
      {isOpen && (
        <div
          onClick={handleToggle}
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 md:hidden"
        />
      )}

      {/* Off-canvas Sidebar */}
      <div
        className={`fixed inset-0 md:w-64 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:flex md:flex-col md:space-y-6 md:mt-8`}
      >
        <div className="flex justify-end p-4 md:hidden">
          <button
            onClick={handleToggle}
            className="text-xl text-gray-600 hover:text-indigo-600"
          >
            &times; {/* Close icon */}
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center space-y-6 md:items-start md:space-y-8">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-link">Portfolio</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
      </div>

      {/* Tailwind Utility Class Definitions */}
      <style jsx>{`
        .nav-link {
          font-weight: 500;
          color: #4B5563;
          transition: transform 0.3s ease;
          display: block;
          padding: 0.5rem 1rem;
        }
        .nav-link:hover {
          transform: scale(1.05);
          color: #4F46E5;
        }
      `}</style>
    </div>
  );
}
