// Neon Pulse Button
import React from 'react';

const ButtonNeonPulse = ({ label = "Neon Pulse", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        text-white
        bg-[#0ff]
        px-6 py-3
        rounded-md
        font-bold
        shadow-[0_0_10px_#0ff]
        animate-pulse
        hover:shadow-[0_0_20px_#0ff]
        transition duration-300
      "
    >
      {label}
    </button>
  );
};

export default ButtonNeonPulse;

/*
Explanation:
- Neon glow and subtle pulsing effect using `animate-pulse`.
- Bright cyan for futuristic/club UI.
*/
