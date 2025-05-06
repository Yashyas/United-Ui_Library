// CardWithTabs.jsx
import React, { useState } from "react";

const CardWithTabs = ({
  title = "Card with Tabs",
  tab1Title = "Tab 1",
  tab2Title = "Tab 2",
  tab3Title = "Tab 3",
  tab1Content = "Content for Tab 1",
  tab2Content = "Content for Tab 2",
  tab3Content = "Content for Tab 3",
}) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full max-w-xl bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      <div className="mt-4">
        <div className="flex space-x-4 border-b border-gray-300 dark:border-gray-700">
          <button
            className={`text-lg py-2 px-4 ${activeTab === 1 ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 dark:text-gray-300"}`}
            onClick={() => setActiveTab(1)}
          >
            {tab1Title}
          </button>
          <button
            className={`text-lg py-2 px-4 ${activeTab === 2 ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 dark:text-gray-300"}`}
            onClick={() => setActiveTab(2)}
          >
            {tab2Title}
          </button>
          <button
            className={`text-lg py-2 px-4 ${activeTab === 3 ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 dark:text-gray-300"}`}
            onClick={() => setActiveTab(3)}
          >
            {tab3Title}
          </button>
        </div>
        <div className="mt-4">
          {activeTab === 1 && <p className="text-sm text-gray-600 dark:text-gray-300">{tab1Content}</p>}
          {activeTab === 2 && <p className="text-sm text-gray-600 dark:text-gray-300">{tab2Content}</p>}
          {activeTab === 3 && <p className="text-sm text-gray-600 dark:text-gray-300">{tab3Content}</p>}
        </div>
      </div>
    </div>
  );
};

export default CardWithTabs;
