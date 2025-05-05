// Retro Wave Button
import React from 'react';

const ButtonRetroWave = ({ label = "Retro Wave", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
        text-white
        font-mono
        px-6 py-3
        border-2 border-white
        rounded-lg
        shadow-lg
        hover:scale-105
        transition-transform duration-300
      "
    >
      {label}
    </button>
  );
};

export default ButtonRetroWave;

/*
Explanation:
- Vaporwave aesthetic with gradient and mono font.
- Slight scale-up on hover gives retro-futuristic touch.
*/
