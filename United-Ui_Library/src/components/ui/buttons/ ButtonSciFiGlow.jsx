// Sci-Fi Glow Button
import React from 'react';

const ButtonSciFiGlow = ({ label = "Sci-Fi Glow", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        text-[#00FF99]
        bg-[#2e2e2e]
        font-bold px-6 py-3
        rounded-md
        border-2 border-[#00FF99]
        shadow-[0_0_10px_#00FF99]
        hover:bg-[#00FF99]
        hover:text-[#2e2e2e]
        hover:shadow-[0_0_20px_#00FF99]
        transition-all duration-300
      "
    >
      {label}
    </button>
  );
};

export default ButtonSciFiGlow;

/*
Explanation:
- Sci-Fi inspired glowing effect with neon green accents.
- Dark background and glowing green color highlight futuristic feel.
*/
