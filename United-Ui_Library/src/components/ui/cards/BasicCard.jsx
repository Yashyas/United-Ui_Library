// CardBasic.jsx
import React from 'react';

const CardBasic = ({ title = "Default Title", content = "This is a basic card with default content.", image }) => {
  const defaultImage = "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

  return (
    <div className="max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-900">
      <img
        className="w-full h-48 object-cover"
        src={image || defaultImage}
        alt={title}
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{content}</p>
      </div>
    </div>
  );
};

export default CardBasic;
