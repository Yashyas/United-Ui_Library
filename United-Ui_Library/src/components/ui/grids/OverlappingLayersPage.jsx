import React from 'react';

export default function OverlappingLayersPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* First Layer (Background color block) */}
        <div className="relative bg-blue-500 h-72 rounded-lg p-6 shadow-md">
          <div className="absolute top-0 right-0 w-16 h-16 bg-red-500 rounded-full z-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500 rounded-lg z-5"></div>
          <div className="relative text-white text-lg font-bold">
            <h3>Layer 1</h3>
            <p>This is the first layer with some text inside.</p>
          </div>
        </div>

        {/* Second Layer (Overlapping layer) */}
        <div className="relative bg-yellow-500 h-72 rounded-lg p-6 shadow-md">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 rounded-full z-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-lg z-5"></div>
          <div className="relative text-white text-lg font-bold">
            <h3>Layer 2</h3>
            <p>This is the second layer with some content inside.</p>
          </div>
        </div>

        {/* Third Layer */}
        <div className="relative bg-red-500 h-72 rounded-lg p-6 shadow-md">
          <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-500 rounded-full z-10"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-teal-500 rounded-lg z-5"></div>
          <div className="relative text-white text-lg font-bold">
            <h3>Layer 3</h3>
            <p>This is the third layer with some content inside.</p>
          </div>
        </div>

        {/* Fourth Layer */}
        <div className="relative bg-green-500 h-72 rounded-lg p-6 shadow-md">
          <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500 rounded-full z-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500 rounded-lg z-5"></div>
          <div className="relative text-white text-lg font-bold">
            <h3>Layer 4</h3>
            <p>This is the fourth layer with some text content inside.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
