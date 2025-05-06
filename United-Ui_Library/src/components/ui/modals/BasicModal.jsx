import React, { useEffect, useRef } from 'react';

const BasicModal = ({
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  title = 'Default Modal Title',
  children = 'This is the default modal content.',
  fullscreen = false, // Toggle full-screen vs container-bound modal
}) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className={`${
        fullscreen
          ? 'fixed inset-0 z-50'
          : 'relative w-full h-auto border border-dashed border-gray-300 p-4'
      } flex items-center justify-center bg-black/20 backdrop-blur-sm`}
    >
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="text-gray-700">{children}</div>
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

export default BasicModal;
