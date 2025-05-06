// CardProduct.jsx
import React from 'react';

const CardProduct = ({
  name = "Sample Product",
  price = "$49.99",
  description = "This is a great product with awesome features.",
  image
}) => {
  const defaultImage =
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

  return (
    <div className="max-w-xs bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={image || defaultImage} alt={name} />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-blue-600 font-bold">{price}</span>
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
