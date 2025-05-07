export default function AlternatingZigZagPage() {
    const sections = [
      { text: "Section One", bg: "bg-red-300" },
      { text: "Section Two", bg: "bg-blue-300" },
      { text: "Section Three", bg: "bg-green-300" },
      { text: "Section Four", bg: "bg-yellow-300" },
      { text: "Section Five", bg: "bg-purple-300" },
      { text: "Section Six", bg: "bg-pink-300" },
    ];
  
    return (
      <div className="w-full min-h-screen p-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Alternating Zig-Zag Layout</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`break-inside-avoid mb-6 rounded-xl shadow-lg overflow-hidden ${section.bg} text-white`}
            >
              <div className="p-6 text-xl font-semibold">
                {index % 2 === 0 ? (
                  <div>
                    <div className="mb-4">{section.text}</div>
                    <div className="h-40 bg-white opacity-20 rounded" />
                  </div>
                ) : (
                  <div>
                    <div className="h-40 bg-white opacity-20 rounded mb-4" />
                    <div>{section.text}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  