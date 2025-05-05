// Cosmic Sparkle Button
import React from 'react';

const ButtonCosmicSparkle = ({ label = "Cosmic Sparkle", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        text-white
        px-6 py-3
        rounded-full
        overflow-hidden
        font-semibold
        shadow-md
        hover:shadow-xl
        transition duration-500
        before:content-['']
        before:absolute before:inset-0
        before:bg-white before:opacity-10
        before:blur-[4px]
        before:animate-pulse
      "
    >
      {label}
    </button>
  );
};

export default ButtonCosmicSparkle;

/*
Explanation:
- Cosmic glowing effect using gradients and a pulsing pseudo-element blur.
- Gives an "outer space" sparkle feel without needing custom CSS.
*/
