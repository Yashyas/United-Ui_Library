// Elegant Serif Button
import React from 'react';

const ButtonElegantSerif = ({ label = "Elegant Serif", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-white
        text-[#36454F]
        font-serif italic
        border border-[#36454F]
        px-6 py-3
        rounded-lg
        hover:bg-[#36454F]
        hover:text-white
        transition-colors duration-300
      "
    >
      {label}
    </button>
  );
};

export default ButtonElegantSerif;

/*
Explanation:
- Uses serif + italic styling for a classy, elegant feel.
- Subtle hover color transition from white to deep slate.
*/
