import React, { useState } from 'react';

const ImageGalleryModal = ({
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  images = [
    'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
    'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?t=st=1746496690~exp=1746500290~hmac=e4484fb827d49ad5cc78f2320b4c7890d5b61f336c4cf8d0061e74425d3b2f46&w=740',
    'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?t=st=1746496720~exp=1746500320~hmac=53ba7e614b73076292809b291ff34f0c1b277d42965ee8da02df1edb7c55fb3d&w=740',
  ],
  fullscreen = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`${
        isModalOpen ? 'flex' : 'hidden'
      } ${
        fullscreen ? 'fixed inset-0 z-50' : 'relative w-full h-auto p-4 border border-dashed border-gray-300'
      } items-center justify-center bg-black/50 backdrop-blur-sm`}
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full mx-4 p-6 relative animate-fade-in">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
          <button
            onClick={prevImage}
            className="px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700"
          >
            &#8249;
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Gallery Image ${currentImageIndex + 1}`}
            className="w-full max-w-[90vw] max-h-[70vh] object-contain rounded-lg shadow-lg"
          />
          <button
            onClick={nextImage}
            className="px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700"
          >
            &#8250;
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryModal;
