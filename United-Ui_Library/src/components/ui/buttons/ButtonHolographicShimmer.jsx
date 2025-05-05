// Holographic Shimmer Button
import React from 'react';

const ButtonHolographicShimmer = ({ label = "Holographic Shimmer", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300
        text-black
        font-bold
        px-6 py-3
        rounded-md
        transition-all duration-300
        hover:brightness-110
        hover:contrast-125
        shadow-md
      "
    >
      {label}
    </button>
  );
};

export default ButtonHolographicShimmer;

/*
Explanation:
- Simulates holographic sheen with a 3-color gradient and glow on hover.
- Works best on dark or minimal backgrounds.
*/
