import React from 'react';

const LoadingModal = ({
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  title = 'Loading...',
  message = 'Please wait while we process your request.',
  fullscreen = false, // Toggle full-screen
}) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } ${fullscreen ? 'fixed inset-0 z-50' : 'relative w-full h-auto p-4 border border-dashed border-gray-300'} flex items-center justify-center bg-black/50 backdrop-blur-sm`}
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-4 p-6 relative animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="flex justify-center">
          <div className="w-8 h-8 border-4 border-t-transparent border-gray-600 border-solid rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
