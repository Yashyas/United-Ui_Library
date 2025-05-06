// CardExpandable.jsx
import React, { useState } from "react";

const CardExpandable = ({
  title = "FAQ Item",
  summary = "What is your return policy?",
  details = "We accept returns within 30 days of purchase. Please ensure the item is in its original condition.",
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full max-w-xl bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md">
      <button
        className="w-full text-left"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white flex justify-between items-center">
          {summary}
          <span>{expanded ? "−" : "+"}</span>
        </h4>
      </button>
      {expanded && (
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{details}</p>
      )}
    </div>
  );
};

export default CardExpandable;
