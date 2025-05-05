// Origami Fold Button
import React from 'react';

const ButtonOrigamiFold = ({ label = "Origami Fold", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-white text-black
        px-6 py-3
        font-semibold
        shadow-[inset_0_0_0_1px_#000]
        relative
        transition-all duration-300
        hover:shadow-[inset_8px_8px_0_#ccc]
        hover:translate-x-[2px] hover:translate-y-[2px]
      "
    >
      {label}
    </button>
  );
};

export default ButtonOrigamiFold;

/*
Explanation:
- Mimics an origami-style folded edge using `inset` shadows.
- On hover, the inner shadow shifts like a folded flap effect.
*/
