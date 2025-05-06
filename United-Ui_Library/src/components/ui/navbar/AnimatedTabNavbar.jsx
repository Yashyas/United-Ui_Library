import { useState } from "react";

const tabs = [
  { name: "Home", icon: "🏠" },
  { name: "Profile", icon: "👤" },
  { name: "Messages", icon: "✉️", badge: 3 },
  { name: "Settings", icon: "⚙️" }
];

export default function AnimatedTabNavbar() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-3">
      <nav className="relative flex justify-between sm:justify-evenly bg-white border border-gray-200 rounded-full shadow overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`relative w-full sm:w-auto flex-1 py-3 text-sm sm:text-base font-medium text-center transition duration-300 
              ${activeTab === tab.name ? "text-indigo-600" : "text-gray-600 hover:text-indigo-500"}`}
          >
            <span className="flex justify-center items-center gap-2">
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.name}</span>
              {tab.badge && (
                <span className="ml-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold leading-none text-red-100 bg-red-500 rounded-full">
                  {tab.badge}
                </span>
              )}
            </span>

            {/* Animated underline */}
            {activeTab === tab.name && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-indigo-600 rounded-full transition-all duration-300"></span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
