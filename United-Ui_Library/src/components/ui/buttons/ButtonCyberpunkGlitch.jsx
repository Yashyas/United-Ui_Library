// Cyberpunk Glitch Button
import React from 'react';

const ButtonCyberpunkGlitch = ({ label = "Cyberpunk Glitch", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative bg-[#000] text-[#B2E0D6]
        px-6 py-3 font-bold text-sm uppercase
        border border-[#B2E0D6]
        overflow-hidden
        hover:text-[#000]
        hover:bg-[#B2E0D6]
        transition-colors duration-300
        before:content-['']
        before:absolute before:top-0 before:left-0
        before:w-full before:h-full
        before:border-t-2 before:border-b-2 before:border-[#B2E0D6]
        before:animate-[glitch_1s_infinite]
      "
    >
      {label}
    </button>
  );
};

export default ButtonCyberpunkGlitch;

/*
Explanation:
- Cyberpunk theme with glitch animation via pseudo-element and Tailwind's `animate-[...]`.
- You can define custom glitch keyframes in Tailwind config for more variation.
*/
