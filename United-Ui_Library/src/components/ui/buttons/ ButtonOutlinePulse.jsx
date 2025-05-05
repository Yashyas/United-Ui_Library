// Outline Pulse Button
import React from 'react';

const ButtonOutlinePulse = ({ label = "Outline Pulse", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative
        border-2 border-[#36454F]
        text-[#36454F]
        px-6 py-3
        rounded-md
        font-medium
        hover:animate-pulse
        transition-all duration-300
      "
    >
      {label}
    </button>
  );
};

export default ButtonOutlinePulse;

/*
Explanation:
- Uses `animate-pulse` for a soft pulsing animation on hover.
- Outline border and text styling based on your color palette.
*/
