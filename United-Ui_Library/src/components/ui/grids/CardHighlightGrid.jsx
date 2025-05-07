import React from 'react';

export default function CardHighlightGrid() {
  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold text-center mb-8">Card Highlight Grid</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* First Card (Highlighted - larger card) */}
        <div className="col-span-2 row-span-2 bg-red-500 p-6 rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-white text-xl font-semibold">
            Featured Card
          </div>
        </div>

        {/* Other Cards */}
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-white text-xl">Card 2</div>
        </div>

        <div className="bg-green-500 p-6 rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-white text-xl">Card 3</div>
        </div>

        <div className="bg-yellow-500 p-6 rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-white text-xl">Card 4</div>
        </div>

        <div className="bg-indigo-500 p-6 rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-white text-xl">Card 5</div>
        </div>

        <div className="bg-purple-500 p-6 rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-white text-xl">Card 6</div>
        </div>

        <div className="bg-pink-500 p-6 rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-white text-xl">Card 7</div>
        </div>

        <div className="bg-teal-500 p-6 rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-white text-xl">Card 8</div>
        </div>
      </div>
    </div>
  );
}
