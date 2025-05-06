// DashboardCard.jsx
import React from "react";

const DashboardCard = ({
  title = "Revenue",
  value = "$50,000",
  change = "+12%",
  chart = "Graph Placeholder",
}) => {
  return (
    <div className="w-full max-w-sm bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
      <p className={`mt-1 text-sm ${change.startsWith('+') ? "text-green-500" : "text-red-500"}`}>
        {change}
      </p>
      <div className="mt-4 h-20 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-center text-gray-400">{chart}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
