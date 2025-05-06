// CardImage.jsx
import React from 'react';

const CardImage = ({ title = "Default Title", subtitle = "Subtitle goes here", image }) => {
  const defaultImage = "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

  return (
    <div className="relative max-w-sm rounded-xl overflow-hidden shadow-lg">
      <img
        src={image || defaultImage}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white w-full p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default CardImage;
