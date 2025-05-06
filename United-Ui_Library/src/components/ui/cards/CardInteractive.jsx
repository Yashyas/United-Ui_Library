// CardInteractive.jsx
import React, { useState } from 'react';

const CardInteractive = ({
  title = "Interactive Card",
  content = "Hover or click to reveal more info.",
  reveal = "Here is the hidden content!",
  image
}) => {
  const defaultImage =
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-72 h-80 cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900 shadow-lg rounded-xl backface-hidden p-4">
          <img
            src={image || defaultImage}
            alt={title}
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-4">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{content}</p>
        </div>
        {/* Back */}
        <div className="absolute inset-0 bg-blue-600 text-white rounded-xl flex items-center justify-center rotate-y-180 backface-hidden">
          <p>{reveal}</p>
        </div>
      </div>
    </div>
  );
};

export default CardInteractive;
