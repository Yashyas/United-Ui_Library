// CardNotification.jsx
import React from 'react';

const CardNotification = ({
  message = "Your profile was updated successfully.",
  icon = "🔔",
  time = "2 minutes ago",
  onDismiss = () => alert("Dismissed")
}) => {
  return (
    <div className="flex items-start max-w-sm bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      <div className="text-2xl mr-3">{icon}</div>
      <div className="flex-1">
        <p className="text-sm text-gray-700 dark:text-white">{message}</p>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
      <button
        onClick={onDismiss}
        className="ml-3 text-gray-400 hover:text-red-500 text-sm font-bold transition"
      >
        ✕
      </button>
    </div>
  );
};

export default CardNotification;
