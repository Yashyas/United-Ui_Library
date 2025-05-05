// Neon Outline Button
import React from 'react';

const ButtonNeonOutline = ({ label = "Neon Outline", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        text-[#B2E0D6]
        border-2 border-[#B2E0D6]
        px-6 py-3
        rounded-md
        hover:bg-[#B2E0D6]
        hover:text-black
        hover:shadow-[0_0_10px_#B2E0D6,0_0_20px_#B2E0D6]
        transition-all duration-300 ease-in-out
      "
    >
      {label}
    </button>
  );
};

export default ButtonNeonOutline;

/*
Explanation:
- Clean neon outline, which glows on hover.
- Keeps the button transparent until hovered, then fills in.
*/
