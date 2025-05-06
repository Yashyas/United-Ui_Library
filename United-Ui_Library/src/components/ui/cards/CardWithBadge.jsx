// CardWithBadge.jsx
import React from "react";

const CardWithBadge = ({
  title = "Card with Badge",
  content = "This card contains a badge for extra information.",
  badgeText = "New",
}) => {
  return (
    <div className="w-full max-w-xl bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md relative">
      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
        {badgeText}
      </span>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
};

export default CardWithBadge;
