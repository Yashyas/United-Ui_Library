// SocialMediaCard.jsx
import React from "react";

const SocialMediaCard = ({
  username = "John Doe",
  postContent = "This is a sample social media post content.",
  likes = 250,
  comments = 15,
  shares = 30,
}) => {
  return (
    <div className="w-full max-w-xl bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-full"
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1746489298~exp=1746492898~hmac=6a797f8a115ffa4d1f551a650243d56f9493010916440531dc8616b97db09347&w=740"
          alt="User Avatar"
        />
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white">{username}</h4>
        </div>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">{postContent}</p>
      <div className="mt-4 flex space-x-6 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center">
          <span className="mr-1">👍</span>
          <span>{likes} Likes</span>
        </div>
        <div className="flex items-center">
          <span className="mr-1">💬</span>
          <span>{comments} Comments</span>
        </div>
        <div className="flex items-center">
          <span className="mr-1">🔗</span>
          <span>{shares} Shares</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;
