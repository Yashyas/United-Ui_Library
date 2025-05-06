import { useState } from "react";

export default function MegaMenuNavbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky w-full top-0 z-50 bg-white shadow">
      <nav className="w-full max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-indigo-700">MegaBrand</div>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Main Links - Desktop */}
        <ul className="hidden lg:flex space-x-8 items-center">
          <li
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="text-gray-800 hover:text-indigo-600 font-medium focus:outline-none">
              Products
            </button>

            {/* Mega Menu Dropdown */}
            {isHovered && (
              <div className="absolute left-0 top-full w-screen bg-white shadow-xl border-t border-gray-200 mt-2 py-6 px-8 grid grid-cols-3 gap-8">
                {/* Column 1 */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Categories</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 hover:text-indigo-600">
                      <span>📱</span><span>Electronics</span>
                    </li>
                    <li className="flex items-center space-x-2 hover:text-indigo-600">
                      <span>👗</span><span>Fashion</span>
                    </li>
                    <li className="flex items-center space-x-2 hover:text-indigo-600">
                      <span>🏠</span><span>Home & Living</span>
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Popular</h3>
                  <ul className="space-y-2">
                    <li className="hover:text-indigo-600">Best Sellers</li>
                    <li className="hover:text-indigo-600">New Arrivals</li>
                    <li className="hover:text-indigo-600">Gift Ideas</li>
                  </ul>
                </div>

                {/* Column 3 with image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://source.unsplash.com/300x200/?shopping,store"
                    alt="Promo"
                    className="rounded-lg object-cover w-full h-32"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white font-bold text-sm">
                    Shop Now →
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <a href="#" className="text-gray-800 hover:text-indigo-600 font-medium">About</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-indigo-600 font-medium">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <ul className="space-y-4 mt-4">
            <li>
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-gray-800 hover:text-indigo-600 font-medium">
                  Products
                  <span className="text-sm transform group-open:rotate-180 transition duration-200">▼</span>
                </summary>
                <div className="pl-4 mt-2 space-y-2 text-gray-700">
                  <p className="font-semibold text-sm text-gray-500">Categories</p>
                  <p>📱 Electronics</p>
                  <p>👗 Fashion</p>
                  <p>🏠 Home & Living</p>
                  <p className="mt-2 font-semibold text-sm text-gray-500">Popular</p>
                  <p>Best Sellers</p>
                  <p>New Arrivals</p>
                  <p>Gift Ideas</p>
                </div>
              </details>
            </li>
            <li><a href="#" className="text-gray-800 hover:text-indigo-600 font-medium">About</a></li>
            <li><a href="#" className="text-gray-800 hover:text-indigo-600 font-medium">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
