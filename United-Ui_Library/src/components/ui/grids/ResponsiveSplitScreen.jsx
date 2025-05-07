import React from 'react';

export default function ResponsiveSplitScreen() {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 h-screen">
      <div className="flex items-center justify-center bg-blue-500">
        <h1 className="text-white text-4xl">Left Panel</h1>
      </div>
      <div className="flex items-center justify-center bg-green-500">
        <h1 className="text-white text-4xl">Right Panel</h1>
      </div>
    </div>
  );
}
