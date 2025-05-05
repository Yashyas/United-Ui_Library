// Minimal Curtain Slide Button (Curtain from Bottom to Top)
import React from 'react';

const ButtonMinimalCurtainSlide = ({ label = "Curtain Slide", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative text-[#36454F]
        font-medium px-4 py-2
        overflow-hidden
        after:content-['']
        after:absolute after:left-0 after:bottom-0
        after:w-full after:h-0
        after:bg-[#36454F]
        after:transition-all after:duration-300
        hover:text-black
        hover:after:h-full hover:after:bg-[#B2E0D6]
        z-10
      "
    >
      <span className="relative z-20">{label}</span> {/* Ensure the text stays on top */}
    </button>
  );
};

export default ButtonMinimalCurtainSlide;

/*
Explanation:
- The line (`after:` pseudo-element) has a `z-0` default, which places it behind the text.
- The button text (`<span>`) has `z-20`, ensuring it remains on top of the sliding line.
- The height of the line starts at 0 (`after:h-0`) and expands on hover to `h-full`.
- The text color and line color change as the animation completes.
*/
