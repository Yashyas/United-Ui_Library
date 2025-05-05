// Playful Bounce Button
import React from 'react';

const ButtonPlayfulBounce = ({ label = "Playful Bounce", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-pink-400
        text-white
        font-bold
        px-6 py-3
        rounded-full
        transition-transform duration-300
        hover:animate-bounce
      "
    >
      {label}
    </button>
  );
};

export default ButtonPlayfulBounce;

/*
Explanation:
- Bouncy and fun using Tailwind's built-in `animate-bounce`.
- Good for playful or casual interfaces like kids apps or fun dashboards.
*/
