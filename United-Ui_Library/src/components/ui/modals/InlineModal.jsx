import React from 'react';

const InlineModal = ({
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  title = 'Inline Modal',
  children = 'This modal appears within the page content.',
  fullscreen = false, // Toggle full-screen
}) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } ${fullscreen ? 'fixed inset-0 z-50' : 'relative w-full h-auto p-4 border border-dashed border-gray-300'} flex items-center justify-center bg-black/20 backdrop-blur-sm`}
    >
      <div className="bg-white w-full max-w-md p-6 relative animate-fade-in">
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

export default InlineModal;
