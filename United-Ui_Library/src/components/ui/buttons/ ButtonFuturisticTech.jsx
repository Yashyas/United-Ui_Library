// Futuristic Tech Button
import React from 'react';

const ButtonFuturisticTech = ({ label = "Futuristic Tech", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        text-[#B2E0D6]
        bg-[#1a1a1a]
        px-6 py-3
        border border-[#B2E0D6]
        font-mono uppercase tracking-widest
        shadow-[0_0_10px_#B2E0D6]
        hover:bg-[#B2E0D6]
        hover:text-[#1a1a1a]
        hover:shadow-[0_0_20px_#B2E0D6]
        transition-all duration-300
      "
    >
      {label}
    </button>
  );
};

export default ButtonFuturisticTech;

/*
Explanation:
- Sci-fi tech effect using mono font, glowing borders, and shadow animations.
- Text transforms to caps with spaced letters for machine-like style.
*/
