// Minimal Split Button
import React from 'react';

const ButtonMinimalSplit = ({ label = "Minimal Split", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative text-[#36454F]
        font-medium px-6 py-2
        overflow-hidden
        border border-[#36454F]
        hover:text-black
        before:content-['']
        before:absolute
        before:top-0
        before:left-0
        before:w-1/2
        before:h-full
        before:bg-[#B2E0D6]
        before:transition-all
        before:duration-300
        before:z-0
        hover:before:w-full
        z-10
      "
    >
      <span className="relative z-10">{label}</span>
    </button>
  );
};

export default ButtonMinimalSplit;

/*
Changes made:
- Wrapped text in <span class="relative z-10"> to keep it above.
- Added before:z-0 to push pseudo-element behind text.
- Preserved original animation and styling.
*/
