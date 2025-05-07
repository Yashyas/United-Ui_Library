import React, { useState } from "react";

export default function CheckboxStylesShowcase() {
  const [checked, setChecked] = useState({});

  const toggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const options = [
    {
      id: "classic",
      label: "Classic",
      className:
        "appearance-none w-5 h-5 border border-gray-500 rounded-sm checked:bg-blue-600 checked:border-transparent checked:text-white flex items-center justify-center",
    },
    {
      id: "rounded",
      label: "Rounded",
      className:
        "appearance-none w-6 h-6 rounded-lg bg-gray-200 checked:bg-green-500 transition-all duration-200",
    },
    {
      id: "outline",
      label: "Outline",
      className:
        "appearance-none w-5 h-5 border-2 border-gray-600 rounded checked:bg-blue-500 focus:ring-2 focus:ring-offset-1",
    },
    {
      id: "animated",
      label: "Animated",
      className:
        "appearance-none w-6 h-6 rounded border bg-white checked:bg-violet-600 transition-transform duration-300 transform checked:scale-110",
    },
    {
      id: "flat",
      label: "Flat",
      className:
        "appearance-none w-5 h-5 bg-blue-200 checked:bg-blue-700 hover:bg-blue-400",
    },
    {
      id: "material",
      label: "Material Design",
      className:
        "appearance-none w-6 h-6 border-2 border-indigo-500 rounded checked:bg-indigo-600 transition-all relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-3 after:h-3 after:rounded-sm after:bg-white checked:after:block after:hidden",
    },
    {
      id: "neon",
      label: "Neon",
      className:
        "appearance-none w-6 h-6 rounded border border-cyan-400 shadow-[0_0_10px_#0ff] hover:shadow-[0_0_15px_#0ff] checked:bg-cyan-500 checked:shadow-[0_0_20px_#0ff]",
    },
    {
      id: "threed",
      label: "3D",
      className:
        "appearance-none w-6 h-6 rounded bg-gray-300 shadow-inner checked:shadow-md checked:bg-gray-700 transition-all active:scale-95",
    },
    {
      id: "icon",
      label: "Icon (✓)",
      className:
        "appearance-none w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-lg text-green-500 checked:bg-green-100 hover:scale-110",
    },
    {
      id: "glass",
      label: "Glassmorphic",
      className:
        "appearance-none w-6 h-6 rounded backdrop-blur-md bg-white/30 border border-white/50 shadow-inner checked:bg-white/70",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {options.map(({ id, label, className }) => (
        <div
          key={id}
          className="border rounded-lg shadow-md p-4 flex items-center justify-between"
        >
          <label htmlFor={id} className="flex items-center gap-3 text-sm font-medium w-full">
            <input
              type="checkbox"
              id={id}
              name={id}
              checked={checked[id] || false}
              onChange={() => toggle(id)}
              className={`cursor-pointer ${className}`}
            />
            {id === "icon" && checked[id] ? <span>✓</span> : <span>{label}</span>}
          </label>
        </div>
      ))}
    </div>
  );
}
