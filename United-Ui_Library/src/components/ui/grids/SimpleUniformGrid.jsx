// SimpleUniformGrid.jsx
export default function SimpleUniformGrid() {
    const colors = [
      "bg-red-200", "bg-red-300", "bg-orange-200", "bg-orange-300",
      "bg-yellow-200", "bg-yellow-300", "bg-green-200", "bg-green-300",
      "bg-blue-200", "bg-blue-300", "bg-indigo-200", "bg-indigo-300",
      "bg-purple-200", "bg-purple-300", "bg-pink-200", "bg-pink-300",
    ];
  
    return (
      <div className="min-h-screen w-full bg-white p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          🎨 Simple Uniform Grid
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`h-40 rounded-lg shadow ${color} flex items-center justify-center text-gray-800 font-semibold text-xl`}
            >
              Box {index + 1}
            </div>
          ))}
        </div>
      </div>
    );
  }
  