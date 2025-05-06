import React, { useState } from 'react';

const ContextualModal = ({
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  title = 'Contextual Modal',
  context = 'This modal provides additional context for your actions.',
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
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-4 p-6 relative animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{context}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContextualModal;
