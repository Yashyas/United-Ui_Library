// Neon Ripple Button
import React from 'react';

const ButtonNeonRipple = ({ label = "Neon Ripple", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-black text-[#00FF99]
        font-bold px-6 py-3
        rounded-md
        relative overflow-hidden
        transition-all duration-300
        before:content-['']
        before:absolute before:left-0 before:top-0
        before:w-full before:h-full
        before:bg-[#00FF99] before:opacity-30 before:scale-0
        before:transition-all before:duration-300
        hover:before:scale-125
      "
    >
      {label}
    </button>
  );
};

export default ButtonNeonRipple;

/*
Explanation:
- Neon ripple effect using pseudo-element `before:` to create expanding neon ring.
- The effect expands upon hover, mimicking a ripple.
*/
