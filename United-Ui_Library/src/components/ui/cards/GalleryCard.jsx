// GalleryCard.jsx
import React from "react";

const GalleryCard = ({ images = [], title = "Gallery" }) => {
  const defaultImage =
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1746489298~exp=1746492898~hmac=6a797f8a115ffa4d1f551a650243d56f9493010916440531dc8616b97db09347&w=740";

  return (
    <div className="w-full max-w-xl bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.length > 0
          ? images.map((image, index) => (
              <div key={index} className="w-full h-36 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`gallery-image-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          : Array(4)
              .fill()
              .map((_, index) => (
                <div key={index} className="w-full h-36 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src={defaultImage}
                    alt={`default-gallery-image-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
      </div>
    </div>
  );
};

export default GalleryCard;
