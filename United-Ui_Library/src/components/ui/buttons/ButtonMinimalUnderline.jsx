// Minimal Underline Button
import React from 'react';

const ButtonMinimalUnderline = ({ label = "Minimal Underline", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative text-[#36454F] font-semibold px-2 py-1
        after:content-['']
        after:absolute
        after:left-0
        after:bottom-0
        after:h-[2px]
        after:w-0
        after:bg-[#36454F]
        hover:after:w-full
        after:transition-all
        after:duration-300
      "
    >
      {label}
    </button>
  );
};

export default ButtonMinimalUnderline;

/*
Explanation:
- Uses Tailwind pseudo-element support (`after:`) to create a custom underline.
- Underline grows from left to right on hover.
*/
