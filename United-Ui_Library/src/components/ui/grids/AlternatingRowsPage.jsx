import React from "react";

const AlternatingRowsPage = () => {
  return (
    <div className="min-h-screen w-full">
      <section className="grid grid-cols-1 gap-4 px-4 py-8">
        <div className="bg-blue-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Row 1</h2>
          <p className="text-gray-600">This is the first row with a light blue background.</p>
        </div>

        <div className="bg-green-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Row 2</h2>
          <p className="text-gray-600">This is the second row with a light green background.</p>
        </div>

        <div className="bg-red-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Row 3</h2>
          <p className="text-gray-600">This is the third row with a light red background.</p>
        </div>

        <div className="bg-yellow-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Row 4</h2>
          <p className="text-gray-600">This is the fourth row with a light yellow background.</p>
        </div>

        <div className="bg-purple-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Row 5</h2>
          <p className="text-gray-600">This is the fifth row with a light purple background.</p>
        </div>

        <div className="bg-pink-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Row 6</h2>
          <p className="text-gray-600">This is the sixth row with a light pink background.</p>
        </div>
      </section>
    </div>
  );
};

export default AlternatingRowsPage;
