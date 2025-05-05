// 3D Pop Button
import React from 'react';

const Button3DPop = ({ label = "3D Pop", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-[#36454F] text-white font-bold
        px-6 py-3
        shadow-[4px_4px_0px_#000000]
        hover:shadow-[0px_0px_0px_#000000]
        active:translate-y-[4px] active:translate-x-[4px]
        transition-all duration-150 ease-in-out
      "
    >
      {label}
    </button>
  );
};

export default Button3DPop;

/*
Explanation:
- Creates a fake "3D pop" using offset shadow.
- On active/click, the button shifts down/right and shadow disappears.
*/
