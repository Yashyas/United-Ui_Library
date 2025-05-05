// Gradient Fade Button
import React from 'react';

const ButtonGradientFade = ({ label = "Gradient Fade", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        text-white
        px-6 py-3
        rounded-lg
        font-semibold
        bg-gradient-to-r from-[#36454F] to-[#B2E0D6]
        hover:from-[#B2E0D6] hover:to-[#36454F]
        transition-all duration-300 ease-in-out
      "
    >
      {label}
    </button>
  );
};

export default ButtonGradientFade;

/*
Explanation:
- Uses Tailwind's `bg-gradient-to-r` and `hover:from/to` for a fade transition.
- Responsive and modern look.
*/
