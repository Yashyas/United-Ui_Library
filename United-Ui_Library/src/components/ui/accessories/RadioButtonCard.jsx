import React, { useState } from "react";

export default function RadioStylesShowcase() {
  const [selected, setSelected] = useState("");

  const options = [
    { id: "classic", label: "Classic", className: "peer hidden", custom: "after:content-[''] after:block after:h-3 after:w-3 after:rounded-full after:mx-auto after:my-1 after:bg-blue-600 peer-checked:after:visible border-2 border-gray-400 rounded-full w-6 h-6 flex items-center justify-center" },
    { id: "flat", label: "Flat", className: "appearance-none w-6 h-6 rounded-full bg-blue-500 hover:bg-blue-600 checked:bg-blue-700" },
    { id: "square", label: "Rounded Square", className: "appearance-none w-6 h-6 rounded-md bg-green-500 hover:shadow-md checked:bg-green-700" },
    { id: "outlined", label: "Outlined", className: "appearance-none w-6 h-6 rounded-full border-2 border-gray-500 hover:bg-gray-100 checked:border-blue-500 checked:bg-blue-100" },
    { id: "neon", label: "Neon Glow", className: "appearance-none w-6 h-6 rounded-full border border-cyan-400 shadow-[0_0_10px_#0ff] hover:shadow-[0_0_15px_#0ff] checked:bg-cyan-500 checked:shadow-[0_0_20px_#0ff]" },
    { id: "minimal", label: "Minimalistic", className: "appearance-none w-4 h-4 rounded-full bg-gray-300 checked:bg-black transition-all hover:scale-110" },
    { id: "threed", label: "3D Effect", className: "appearance-none w-6 h-6 rounded-full bg-gray-500 shadow-md hover:shadow-lg checked:bg-gray-700 active:translate-y-0.5" },
    { id: "material", label: "Material Design", className: "appearance-none w-6 h-6 rounded-full border-2 border-indigo-400 checked:bg-indigo-600 relative after:content-[''] after:absolute after:top-1.5 after:left-1.5 after:w-2 after:h-2 after:rounded-full after:bg-white checked:after:block after:hidden transition-all duration-200" },
    { id: "icon", label: "Icon (⭐)", className: "appearance-none w-6 h-6 bg-transparent checked:text-yellow-400 text-xl transition-all hover:scale-125" },
    { id: "gradient", label: "Gradient", className: "appearance-none w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 checked:ring-2 checked:ring-purple-500 hover:opacity-80" },
  ];

  return (
    <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {options.map(({ id, label, className, custom }) => (
        <div
          key={id}
          className="border rounded-lg shadow-md p-4 flex items-center justify-between"
        >
          <label htmlFor={id} className="text-sm font-medium flex items-center gap-3 w-full">
            {id === "icon" ? (
              <>
                <input
                  type="radio"
                  id={id}
                  name="styledRadio"
                  value={id}
                  checked={selected === id}
                  onChange={(e) => setSelected(e.target.value)}
                  className={`${className}`}
                />
                <span>⭐ {label}</span>
              </>
            ) : (
              <>
                <input
                  type="radio"
                  id={id}
                  name="styledRadio"
                  value={id}
                  checked={selected === id}
                  onChange={(e) => setSelected(e.target.value)}
                  className={`cursor-pointer ${className}`}
                />
                <span>{label}</span>
              </>
            )}
            {custom && <div className={`${custom}`}></div>}
          </label>
        </div>
      ))}
    </div>
  );
}
