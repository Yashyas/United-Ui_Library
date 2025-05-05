// Sketch Style Button
import React from 'react';

const ButtonSketchStyle = ({ label = "Sketch Style", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        border-2 border-black
        text-black
        bg-white
        px-6 py-3
        font-bold
        rounded-none
        shadow-[3px_3px_0px_0px_black]
        hover:translate-x-[2px] hover:translate-y-[2px]
        hover:shadow-[1px_1px_0px_0px_black]
        transition-transform duration-200 ease-in-out
      "
    >
      {label}
    </button>
  );
};

export default ButtonSketchStyle;

/*
Explanation:
- Mimics a hand-drawn or paper-sketch look using bold outlines and offset shadows.
- Movement on hover gives a playful hand-drawn effect.
*/
