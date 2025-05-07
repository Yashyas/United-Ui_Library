import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Make sure lucide-react is installed

export default function Sidebar({ groupNames, selectedGroup, onSelectGroup }) {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed top-0 left-0 h-screen z-[100] backdrop-blur-md bg-white/30 border-r border-white/20 shadow-lg transition-all duration-300 ease-in-out
        ${hovered ? "w-48" : "w-16"}
      `}
    >
      {/* Arrow Icon */}
      <div className="flex justify-center items-center py-20 h-12">
        <ChevronDown
          className={`text-gray-800 transition-transform duration-300 ease-in-out ${
            hovered ? "rotate-[-90deg]" : "rotate-0"
          }`}
        />
      </div>

      {/* Group Buttons */}
      <div className="flex flex-col items-start h-full py-4 px-2 space-y-4">
        {groupNames.map((group) => (
          <button
            key={group}
            className={`flex items-center w-full px-3 py-2 rounded hover:bg-black/30 hover:text-white transition group ${
              hovered ? "justify-start" : "justify-center"
            } ${selectedGroup === group && hovered ? "bg-black/50 font-semibold text-white" : "text-gray-800"}`}
            onClick={() => onSelectGroup(group)}
          >
            <span
              className={`ml-3 transition-opacity duration-200 ease-in-out ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {group.charAt(0).toUpperCase() + group.slice(1)}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
