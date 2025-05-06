import React from 'react';

const Button3DPop = ({ label = "3D Pop", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg 
        shadow-[0_5px_0_#4C51BF] 
        hover:shadow-[0_2px_0_#4C51BF] 
        active:shadow-none 
        hover:translate-y-1 active:translate-y-2 
        transition-all duration-150
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
- On active/click, the button shifts down and shadow disappears.
*/
