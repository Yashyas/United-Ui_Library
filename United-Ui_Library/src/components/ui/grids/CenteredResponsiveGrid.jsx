export default function CenteredResponsiveGrid() {
    const colors = [
      "bg-red-300",
      "bg-orange-300",
      "bg-yellow-300",
      "bg-green-300",
      "bg-teal-300",
      "bg-blue-300",
      "bg-indigo-300",
      "bg-purple-300",
      "bg-pink-300",
      "bg-gray-300",
      "bg-lime-300",
      "bg-rose-300",
    ];
  
    return (
      <div className="min-h-screen bg-white px-4 py-8">
        <div className="max-w-lg mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Responsive Centered Grid
          </h1>
          <p className="text-gray-600">
            This layout is centered, responsive, and shows stacked columns with unique solid shades.
          </p>
        </div>
  
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 px-2">
          {colors.map((color, i) => (
            <div
              key={i}
              className={`rounded-lg p-6 mb-4 ${color} break-inside-avoid shadow transition-transform hover:scale-105`}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Box {i + 1}
              </h2>
              <p className="text-sm text-gray-700">
                This is a sample card with a {color.replace("bg-", "")} background.
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  