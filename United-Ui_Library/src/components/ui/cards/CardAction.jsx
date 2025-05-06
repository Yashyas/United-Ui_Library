// CardAction.jsx
import React from 'react';

const CardAction = ({
  title = "Join Our Newsletter",
  description = "Get the latest updates, news, and offers directly in your inbox.",
  buttonText = "Subscribe",
  onClick
}) => {
  return (
    <div className="max-w-sm bg-white dark:bg-gray-900 rounded-xl shadow p-6 text-center">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">{description}</p>
      <button
        onClick={onClick || (() => alert("Subscribed!"))}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CardAction;
