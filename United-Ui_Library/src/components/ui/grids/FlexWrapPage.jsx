export default function FlexWrapPage() {
    const colors = [
      "bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", "bg-teal-500",
      "bg-blue-500", "bg-indigo-500", "bg-purple-500", "bg-pink-500", "bg-gray-500",
      "bg-rose-500", "bg-lime-500", "bg-sky-500", "bg-emerald-500", "bg-cyan-500"
    ];
  
    return (
      <div className="min-h-screen bg-white p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">🎨 Flexbox-Wrapped Layout</h1>
  
        <div className="flex flex-wrap gap-4 justify-center">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`h-32 ${color} rounded-lg shadow-md flex items-center justify-center text-white font-semibold text-lg transition hover:scale-105`}
              style={{
                flexBasis: "calc(33.333% - 1rem)",
                maxWidth: "calc(33.333% - 1rem)",
                minWidth: "240px"
              }}
            >
              Block {index + 1}
            </div>
          ))}
        </div>
      </div>
    );
  }
  