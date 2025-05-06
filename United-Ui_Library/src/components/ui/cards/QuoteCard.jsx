// QuoteCard.jsx
import React from "react";

const QuoteCard = ({
  quote = "This is a sample quote.",
  author = "John Doe",
  avatar = "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1746489298~exp=1746492898~hmac=6a797f8a115ffa4d1f551a650243d56f9493010916440531dc8616b97db09347&w=740",
}) => {
  return (
    <div className="w-full max-w-xl bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
      <blockquote className="italic text-gray-600 dark:text-gray-300">
        "{quote}"
      </blockquote>
      <div className="flex items-center mt-4">
        <img
          className="w-10 h-10 rounded-full"
          src={avatar}
          alt="Author Avatar"
        />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-800 dark:text-white">{author}</h4>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
