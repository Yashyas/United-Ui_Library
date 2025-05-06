// CardPricing.jsx
import React from 'react';

const CardPricing = ({
  plan = "Pro Plan",
  price = "$29",
  features = ["10 Projects", "100GB Storage", "Priority Support"],
  buttonText = "Choose Plan"
}) => {
  return (
    <div className="w-72 bg-white dark:bg-gray-900 text-center p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{plan}</h3>
      <p className="text-3xl font-extrabold text-blue-600 mt-2">{price}<span className="text-base font-normal text-gray-500 dark:text-gray-300">/mo</span></p>
      <ul className="text-sm text-gray-600 dark:text-gray-300 mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="border-b border-gray-100 pb-2">{feature}</li>
        ))}
      </ul>
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        {buttonText}
      </button>
    </div>
  );
};

export default CardPricing;
