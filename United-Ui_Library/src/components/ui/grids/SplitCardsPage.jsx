import React from 'react';

const SplitCardsPage = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-blue-500 text-white rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                alt="Card 1"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 flex items-center justify-center">
              <h2 className="text-2xl font-bold">Card 1: Blue Theme</h2>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-green-500 text-white rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                alt="Card 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 flex items-center justify-center">
              <h2 className="text-2xl font-bold">Card 2: Green Theme</h2>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-red-500 text-white rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                alt="Card 3"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 flex items-center justify-center">
              <h2 className="text-2xl font-bold">Card 3: Red Theme</h2>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-yellow-500 text-white rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                alt="Card 4"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 flex items-center justify-center">
              <h2 className="text-2xl font-bold">Card 4: Yellow Theme</h2>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-purple-500 text-white rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                alt="Card 5"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 flex items-center justify-center">
              <h2 className="text-2xl font-bold">Card 5: Purple Theme</h2>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-indigo-500 text-white rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                alt="Card 6"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 flex items-center justify-center">
              <h2 className="text-2xl font-bold">Card 6: Indigo Theme</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitCardsPage;
