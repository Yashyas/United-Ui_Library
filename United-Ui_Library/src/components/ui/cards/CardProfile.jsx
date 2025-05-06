// CardProfile.jsx
import React from 'react';

const CardProfile = ({
  name = "John Doe",
  bio = "A short bio about the user.",
  role = "Frontend Developer",
  avatar
}) => {
  const defaultAvatar = "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

  return (
    <div className="max-w-xs bg-white dark:bg-gray-900 rounded-xl shadow-md p-5 text-center">
      <img
        src={avatar || defaultAvatar}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full object-cover shadow"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{name}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-300">{role}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{bio}</p>
    </div>
  );
};

export default CardProfile;
