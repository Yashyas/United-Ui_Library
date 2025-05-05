// Static Split Button with Hover Invert & Click Curl
import React from 'react';

const ButtonStaticSplit = ({ label = "Static Split", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative overflow-hidden
        font-medium px-6 py-2
        border border-[#36454F]
        text-[#36454F]
        group
        transition-all duration-300
        active:rounded-full
        active:bg-[#B2E0D6]
        active:text-black
      "
    >
      <span
        className="
          absolute top-0 left-0 w-1/2 h-full
          bg-white
          group-hover:bg-[#B2E0D6]
          transition-colors duration-300
          z-0
        "
      ></span>
      <span
        className="
          absolute top-0 right-0 w-1/2 h-full
          bg-[#B2E0D6]
          group-hover:bg-white
          transition-colors duration-300
          z-0
        "
      ></span>
      <span className="relative z-10">{label}</span>
    </button>
  );
};

export default ButtonStaticSplit;

/*
Explanation:
- Left and right halves are colored using absolute <span>s.
- Hover inverts their colors.
- Click (active) triggers a fully rounded button and fills with the B2E0D6 color.
- Uses Tailwind utilities like group-hover, active:bg, and z-index layering.
*/
