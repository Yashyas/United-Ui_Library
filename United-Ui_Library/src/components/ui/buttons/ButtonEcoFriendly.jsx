// Eco Friendly Button
import React from 'react';

const ButtonEcoFriendly = ({ label = "Eco Friendly", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-green-100 text-green-800
        px-6 py-3
        font-medium rounded-full
        border border-green-300
        hover:bg-green-200
        transition duration-300
      "
    >
      {label}
    </button>
  );
};

export default ButtonEcoFriendly;

/*
Explanation:
- Light greens for an eco-friendly vibe.
- Rounded full pill shape to feel soft and organic.
*/
