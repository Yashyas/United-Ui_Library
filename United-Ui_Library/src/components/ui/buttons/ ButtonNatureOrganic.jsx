// Nature Organic Button
import React from 'react';

const ButtonNatureOrganic = ({ label = "Nature Organic", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-green-200 text-green-900
        px-5 py-3
        rounded-full
        font-medium
        shadow-md
        hover:bg-green-300
        hover:shadow-lg
        transition-all duration-300
      "
    >
      {label}
    </button>
  );
};

export default ButtonNatureOrganic;

/*
Explanation:
- Uses soft green tones and rounded pill shape for an organic feel.
- Hover increases brightness and shadow for a fresh, alive effect.
*/
