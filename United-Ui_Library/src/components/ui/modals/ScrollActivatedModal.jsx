import React from 'react';

const ScrollActivatedModal = ({
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  title = 'Scroll-Activated Modal',
  children = 'This modal will show when you scroll to a specific point.',
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
        <div className="text-gray-700 mb-6">{children}</div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ScrollActivatedModal;
