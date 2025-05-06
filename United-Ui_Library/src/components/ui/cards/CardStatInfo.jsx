// CardStatInfo.jsx
import React from 'react';

const CardStatInfo = ({
  title = "Monthly Visitors",
  stat = "24.5K",
  change = "+12%",
  trend = "up"
}) => {
  const trendColor = trend === "up" ? "text-green-500" : "text-red-500";
  const trendArrow = trend === "up" ? "▲" : "▼";

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-5 w-64">
      <h4 className="text-gray-700 dark:text-gray-300 text-sm font-medium">{title}</h4>
      <div className="mt-2 flex items-end justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">{stat}</span>
        <span className={`ml-2 text-sm ${trendColor} font-semibold`}>{trendArrow} {change}</span>
      </div>
    </div>
  );
};

export default CardStatInfo;
