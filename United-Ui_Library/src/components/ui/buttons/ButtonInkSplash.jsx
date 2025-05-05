// Ink Splash Button (Pulse from White to Black Background)
import React from 'react';

const ButtonInkSplash = ({ label = "Ink Splash", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-white text-black
        font-medium px-6 py-3
        border border-black
        rounded-lg
        relative
        overflow-hidden
        before:content-['']
        before:absolute before:top-0 before:left-0
        before:w-full before:h-full
        before:bg-black
        before:opacity-0
        before:animate-pulse
        hover:bg-black hover:text-white hover:before:opacity-30
        transition-all duration-300
      "
    >
      {label}
    </button>
  );
};

export default ButtonInkSplash;

/*
Explanation:
- The `before:` pseudo-element is used to animate the background color of the button.
- The background color starts white (`bg-white`) and pulses to black (`before:bg-black`).
- The button text color changes on hover, but the main color pulse effect is applied to the background.
*/
