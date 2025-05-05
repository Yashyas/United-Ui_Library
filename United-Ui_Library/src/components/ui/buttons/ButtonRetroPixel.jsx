// Retro Pixel Button
import React from 'react';

const ButtonRetroPixel = ({ label = "Retro Pixel", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        font-mono
        bg-[#36454F]
        text-[#B2E0D6]
        border-2 border-[#B2E0D6]
        px-4 py-2
        text-sm
        rounded-none
        hover:bg-[#B2E0D6]
        hover:text-[#36454F]
        transition duration-300 ease-in-out
        tracking-widest
      "
    >
      {label}
    </button>
  );
};

export default ButtonRetroPixel;

/*
Explanation:
- Uses `font-mono` and `rounded-none` for pixel-style retro UI.
- Color scheme reversed on hover for a classic game-button feel.
*/
