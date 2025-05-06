import React from 'react';

const LightboxModal = ({
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  title = 'Lightbox Modal',
  mediaContent = 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1746489298~exp=1746492898~hmac=6a797f8a115ffa4d1f551a650243d56f9493010916440531dc8616b97db09347&w=740', // Default image URL
  mediaType = 'image', // 'image' or 'video'
  fullscreen = false, // Toggle full-screen
}) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } ${fullscreen ? 'fixed inset-0 z-50' : 'relative w-full h-auto p-4 border border-dashed border-gray-300'} flex items-center justify-center bg-black/50 backdrop-blur-sm`}
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full mx-4 p-6 relative animate-fade-in">
        <h2 className="text-xl font-semibold text-black mb-4">{title}</h2>
        <div className="relative flex items-center justify-center">
          {mediaType === 'image' ? (
            <img
              src={mediaContent}
              alt="media content"
              className="max-w-full max-h-[80vh] object-contain transition-transform transform hover:scale-105"
            />
          ) : (
            <video controls className="max-w-full max-h-[80vh] object-contain">
              <source src={mediaContent} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-400"
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default LightboxModal;
