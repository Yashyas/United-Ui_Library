export default function ScrollSnapGrid() {
    const colors = [
      "bg-red-400", "bg-orange-400", "bg-amber-400", "bg-yellow-400",
      "bg-lime-400", "bg-green-400", "bg-emerald-400", "bg-cyan-400",
      "bg-sky-400", "bg-blue-400", "bg-indigo-400", "bg-purple-400",
      "bg-pink-400", "bg-rose-400"
    ];
  
    return (
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="w-full max-w-7xl overflow-x-auto snap-x snap-mandatory flex gap-6 scroll-smooth py-10">
          {colors.map((bg, index) => (
            <div
              key={index}
              className={`snap-start shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 rounded-xl shadow-lg text-white flex items-center justify-center text-2xl font-bold ${bg}`}
            >
              Card {index + 1}
            </div>
          ))}
        </div>
      </div>
    );
  }
  