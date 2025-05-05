// Neon Glow Button with TailwindCSS
import React from 'react';

const ButtonNeonGlow = ({ label = "Neon Glow", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        text-[#B2E0D6]
        border border-[#B2E0D6]
        px-6 py-3
        rounded-md
        text-lg font-semibold
        shadow-[0_0_8px_#B2E0D6]
        hover:shadow-[0_0_20px_#B2E0D6]
        transition-all duration-300 ease-in-out
        bg-transparent
      "
    >
      {label}
    </button>
  );
};

export default ButtonNeonGlow;

/*
Explanation:
- Uses neon-like text and shadow effects with Tailwind's `shadow-[custom]`.
- The `hover:shadow-[...]` adds glowing effect on hover.
- Fully transparent background gives it that "light in the dark" feel.
*/
