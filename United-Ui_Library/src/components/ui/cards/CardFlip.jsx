// CardFlip.jsx
import React, { useState } from "react";

const CardFlip = ({
  frontTitle = "Front Side",
  frontText = "Hover to flip",
  backTitle = "Back Side",
  backText = "More content here",
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-64 h-40 perspective"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`relative w-full h-full duration-700 transform-style-preserve-3d ${flipped ? "rotate-y-180" : ""}`}>
        <div className="absolute inset-0 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md backface-hidden">
          <h4 className="font-semibold text-lg text-gray-800 dark:text-white">{frontTitle}</h4>
          <p className="text-gray-600 dark:text-gray-300">{frontText}</p>
        </div>
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 p-4 rounded-xl shadow-md backface-hidden rotate-y-180">
          <h4 className="font-semibold text-lg text-gray-900 dark:text-white">{backTitle}</h4>
          <p className="text-gray-700 dark:text-gray-300">{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
