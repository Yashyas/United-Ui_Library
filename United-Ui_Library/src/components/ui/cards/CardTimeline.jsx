// CardTimeline.jsx
import React from 'react';

const CardTimeline = ({
  time = "10:30 AM",
  title = "Meeting with Product Team",
  description = "Discuss Q3 targets and project deadlines.",
  image
}) => {
  const defaultImage =
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

  return (
    <div className="flex items-start space-x-4 max-w-md p-4 rounded-xl shadow-md bg-white dark:bg-gray-900">
      <img
        src={image || defaultImage}
        alt={title}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <span className="text-xs text-gray-400">{time}</span>
        <h4 className="text-md font-semibold text-gray-800 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default CardTimeline;
