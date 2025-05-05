// Vintage Press Button
import React from 'react';

const ButtonVintagePress = ({ label = "Vintage Press", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-[#f0e6d2] text-[#5a4d41]
        font-serif tracking-wide
        px-6 py-3
        border-2 border-[#5a4d41]
        shadow-inner
        hover:shadow-md
        active:translate-y-[2px]
        transition-all duration-200
      "
    >
      {label}
    </button>
  );
};

export default ButtonVintagePress;

/*
Explanation:
- Inspired by old press or printed labels.
- Uses serif font, warm tones, and inner shadow to give a vintage look.
*/
