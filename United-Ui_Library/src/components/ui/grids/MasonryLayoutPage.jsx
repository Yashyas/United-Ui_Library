export default function MasonryLayoutPage() {
    const colors = [
      "bg-red-300", "bg-blue-300", "bg-green-300", "bg-yellow-300",
      "bg-purple-300", "bg-pink-300", "bg-indigo-300", "bg-teal-300",
      "bg-orange-300", "bg-rose-300", "bg-lime-300", "bg-sky-300"
    ];
  
    return (
      <div className="min-h-screen w-full bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-8">📌 Masonry Layout</h1>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className={`rounded-lg p-4 text-white text-center font-semibold shadow-md break-inside-avoid ${colors[i % colors.length]}`}
              style={{ height: `${Math.floor(Math.random() * 120 + 100)}px` }}
            >
              Card {i + 1}
            </div>
          ))}
        </div>
      </div>
    );
  }
  