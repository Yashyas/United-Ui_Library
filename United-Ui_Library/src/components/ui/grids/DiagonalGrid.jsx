import React from "react";

const DiagonalGrid = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 w-full max-w-screen-xl">
        {/* Grid Items */}
        <div className="bg-red-500 h-48 transform transition-all duration-300 mt-4 sm:mt-8 lg:mt-12 xl:mt-16 hover:translate-y-4 flex items-center justify-center text-white text-xl">
          <p>Red Item</p>
        </div>
        <div className="bg-blue-500 h-48 transform transition-all duration-300 mt-6 sm:mt-12 lg:mt-16 xl:mt-20 hover:translate-y-4 flex items-center justify-center text-white text-xl">
          <p>Blue Item</p>
        </div>
        <div className="bg-yellow-500 h-48 transform transition-all duration-300 mt-8 sm:mt-16 lg:mt-20 xl:mt-24 hover:translate-y-4 flex items-center justify-center text-white text-xl">
          <p>Yellow Item</p>
        </div>
        <div className="bg-green-500 h-48 transform transition-all duration-300 mt-10 sm:mt-20 lg:mt-24 xl:mt-28 hover:translate-y-4 flex items-center justify-center text-white text-xl">
          <p>Green Item</p>
        </div>
        <div className="bg-purple-500 h-48 transform transition-all duration-300 mt-12 sm:mt-24 lg:mt-28 xl:mt-32 hover:translate-y-4 flex items-center justify-center text-white text-xl">
          <p>Purple Item</p>
        </div>
        <div className="bg-pink-500 h-48 transform transition-all duration-300 mt-14 sm:mt-28 lg:mt-32 xl:mt-36 hover:translate-y-4 flex items-center justify-center text-white text-xl">
          <p>Pink Item</p>
        </div>
        <div className="bg-indigo-500 h-48 transform transition-all duration-300 mt-16 sm:mt-32 lg:mt-36 xl:mt-40 hover:translate-y-4 flex items-center justify-center text-white text-xl">
          <p>Indigo Item</p>
        </div>
        <div className="bg-teal-500 h-48 transform transition-all duration-300 mt-18 sm:mt-36 lg:mt-40 xl:mt-44 hover:translate-y-4 flex items-center justify-center text-white text-xl">
          <p>Teal Item</p>
        </div>
        <div className="bg-orange-500 h-48 transform transition-all duration-300 mt-20 sm:mt-40 lg:mt-44 xl:mt-48 hover:translate-y-4 flex items-center justify-center text-white text-xl">
          <p>Orange Item</p>
        </div>
        <div className="bg-gray-500 h-48 transform transition-all duration-300 mt-22 sm:mt-44 lg:mt-48 xl:mt-52 hover:translate-y-4 flex items-center justify-center text-white text-xl">
          <p>Gray Item</p>
        </div>
      </div>
    </div>
  );
};

export default DiagonalGrid;
