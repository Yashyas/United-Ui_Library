// Full Button Paper Fold Transition
import React from 'react';

const ButtonPaperFold = ({ label = "Paper Fold", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative bg-white text-[#36454F]
        font-semibold px-6 py-3
        border border-[#36454F]
        overflow-hidden
        group
        transition-colors duration-500
      "
    >
      <span
        className="
          relative z-10 transition-colors duration-500 group-hover:text-white
        "
      >
        {label}
      </span>

      {/* Expanding Black Overlay */}
      <span
        className="
          absolute top-0 right-0 w-full h-full
          bg-[#36454F]
          origin-top-right
          transform scale-0 rotate-[-90deg]
          group-hover:rotate-0 group-hover:scale-100
          transition-transform duration-700 ease-in-out
          z-0
        "
      />
    </button>
  );
};

export default ButtonPaperFold;
