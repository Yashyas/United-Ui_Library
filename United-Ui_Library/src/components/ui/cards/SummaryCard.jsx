// SummaryCard.jsx
import React from "react";

const SummaryCard = ({
  title = "Article Title",
  content = "A short preview of the article or product description goes here.",
  image = "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1746489298~exp=1746492898~hmac=6a797f8a115ffa4d1f551a650243d56f9493010916440531dc8616b97db09347&w=740",
}) => {
  return (
    <div className="w-full max-w-xl bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
      <img
        src={image}
        alt="Article Image"
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
};

export default SummaryCard;
