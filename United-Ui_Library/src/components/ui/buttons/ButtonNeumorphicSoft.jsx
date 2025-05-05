// Neumorphic Soft Button
import React from 'react';

const ButtonNeumorphicSoft = ({ label = "Neumorphic Soft", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        text-gray-700
        bg-[#E0E0E0]
        px-6 py-3
        rounded-xl
        shadow-[8px_8px_15px_#c5c5c5,-8px_-8px_15px_#ffffff]
        hover:shadow-[inset_4px_4px_6px_#c5c5c5,inset_-4px_-4px_6px_#ffffff]
        transition-all duration-300 ease-in-out
      "
    >
      {label}
    </button>
  );
};

export default ButtonNeumorphicSoft;

/*
Explanation:
- Uses light and dark shadows to simulate soft UI elements.
- On hover, changes to inset shadows to mimic a "pressed" button.
*/
