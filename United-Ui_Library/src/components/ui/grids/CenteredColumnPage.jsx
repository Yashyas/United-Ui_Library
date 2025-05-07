export default function CenteredColumnPage() {
    const colorShades = [
      'bg-red-200', 'bg-red-400', 'bg-red-600',
      'bg-green-200', 'bg-green-400', 'bg-green-600',
      'bg-blue-200', 'bg-blue-400', 'bg-blue-600',
      'bg-yellow-200', 'bg-yellow-400', 'bg-yellow-600',
      'bg-purple-200', 'bg-purple-400', 'bg-purple-600',
    ];
  
    return (
      <div className="min-h-screen w-full bg-gray-100 p-4 flex items-center justify-center">
        <div className="w-full max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            🎨 Centered Single-Column Grid
          </h1>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {colorShades.map((color, index) => (
              <div
                key={index}
                className={`${color} h-24 rounded-md shadow-inner flex items-center justify-center text-white font-semibold`}
              >
                Shade {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  