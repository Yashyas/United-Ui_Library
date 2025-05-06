import { useState } from "react";

export default function SidebarNavbar() {
  const [hovered, setHovered] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: DashboardIcon },
    { label: "Analytics", icon: AnalyticsIcon },
    { label: "Users", icon: UsersIcon },
    { label: "Settings", icon: SettingsIcon },
  ];

  return (
    <aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    //   add fixed in the className 
      className={` top-0 left-0 h-screen z-40 bg-white shadow-md border-r border-gray-200 transition-all duration-300 ease-in-out
        ${hovered ? "w-48" : "w-16"}
      `}
    >
      <div className="flex flex-col items-start h-full py-4 px-2 space-y-4">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center w-full px-3 py-2 rounded hover:bg-indigo-100 transition group ${
              hovered ? "justify-start" : "justify-center"
            }`}
          >
            <item.icon className="w-6 h-6 text-gray-700" />
            <span
              className={`ml-3 text-sm font-medium text-gray-800 transition-opacity duration-200 ease-in-out ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}

// Icons as components (SVG-based)

function DashboardIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z" />
    </svg>
  );
}

function AnalyticsIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 12h2m-1-1v4m-4 4h10a2 2 0 002-2v-6m-2-2l-4-4m0 0l-4 4m4-4v12" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 110-8 4 4 0 010 8z" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3a1.5 1.5 0 013 0v1.5a1.5 1.5 0 11-3 0V3zm3.75 17.25a1.5 1.5 0 01-3 0v-1.5a1.5 1.5 0 013 0v1.5zM20.25 9.75a1.5 1.5 0 010 3h-1.5a1.5 1.5 0 110-3h1.5zM3 12a1.5 1.5 0 110-3h1.5a1.5 1.5 0 110 3H3zm15.36 6.36a1.5 1.5 0 01-2.12 0l-1.06-1.06a1.5 1.5 0 012.12-2.12l1.06 1.06a1.5 1.5 0 010 2.12zm-10.92 0a1.5 1.5 0 010-2.12l1.06-1.06a1.5 1.5 0 112.12 2.12l-1.06 1.06a1.5 1.5 0 01-2.12 0z" />
    </svg>
  );
}
