// CardContent.jsx
import React from 'react';

const CardContent = ({
  title = "Default Article Title",
  description = "This is a default article summary or content snippet.",
  author = "Jane Doe",
  date = "May 6, 2025",
  image
}) => {
  const defaultImage =
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

  return (
    <div className="max-w-md bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src={image || defaultImage}
        alt={title}
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>By {author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
