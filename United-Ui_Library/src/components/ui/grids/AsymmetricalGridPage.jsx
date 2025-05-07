export default function AsymmetricalGridPage() {
    return (
      <div className="min-h-screen w-full bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Asymmetrical Grid</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Item */}
          <div className="bg-red-300 col-span-1 md:col-span-2 lg:col-span-2 rounded-xl p-6 break-inside-avoid">
            <h2 className="text-xl font-semibold text-white">Large Block</h2>
            <p className="text-white mt-2">This block spans two columns on medium and large screens.</p>
          </div>
  
          {/* Smaller Items */}
          <div className="bg-blue-300 rounded-xl p-6 break-inside-avoid">
            <h2 className="text-lg font-semibold text-white">Small Block 1</h2>
          </div>
          <div className="bg-green-300 rounded-xl p-6 break-inside-avoid">
            <h2 className="text-lg font-semibold text-white">Small Block 2</h2>
          </div>
          <div className="bg-yellow-300 rounded-xl p-6 break-inside-avoid">
            <h2 className="text-lg font-semibold text-white">Small Block 3</h2>
          </div>
          <div className="bg-purple-300 rounded-xl p-6 break-inside-avoid">
            <h2 className="text-lg font-semibold text-white">Small Block 4</h2>
          </div>
          <div className="bg-pink-300 rounded-xl p-6 break-inside-avoid">
            <h2 className="text-lg font-semibold text-white">Small Block 5</h2>
          </div>
        </div>
      </div>
    );
  }
  