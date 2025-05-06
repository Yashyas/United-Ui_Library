// CardMedia.jsx
import React from 'react';

const CardMedia = ({
  title = "Media Title",
  description = "This is a media description.",
  thumbnail,
  onPlay = () => alert("Play media")
}) => {
  const defaultThumbnail =
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-900">
      <div className="relative">
        <img src={thumbnail || defaultThumbnail} alt={title} className="w-full h-48 object-cover" />
        <button
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition text-white text-3xl font-bold"
        >
          ▶
        </button>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default CardMedia;
