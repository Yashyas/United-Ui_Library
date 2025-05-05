// Paper Cut Button
import React from 'react';

const ButtonPaperCut = ({ label = "Paper Cut", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-white text-black
        px-6 py-3
        font-medium
        border border-black
        shadow-[4px_4px_0_#000]
        hover:shadow-[2px_2px_0_#000]
        transition-all duration-200
      "
    >
      {label}
    </button>
  );
};

export default ButtonPaperCut;

/*
Explanation:
- Mimics layered paper cuts with a harsh black shadow.
- Shadow shrinks on hover for a 'cutout' press effect.
*/
