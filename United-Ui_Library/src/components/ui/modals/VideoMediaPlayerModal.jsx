import React, { useState } from 'react';

const VideoMediaPlayerModal = ({
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  videoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4', // Default video
  fullscreen = false, // Toggle full-screen
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <div
      className={`${
        isModalOpen ? 'block' : 'hidden'
      } ${fullscreen ? 'fixed inset-0 z-50' : 'relative w-full h-auto p-4 border border-dashed border-gray-300'} flex items-center justify-center bg-black/50 backdrop-blur-sm`}
    >
      <div className="bg-black rounded-2xl shadow-lg max-w-4xl w-full mx-4 p-6 relative animate-fade-in">
        <video controls className="w-full h-auto rounded-lg">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoMediaPlayerModal;
