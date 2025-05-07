export default function FullWidthHeroWith3CTAs() {
    return (
      <div className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-indigo-700 text-white py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our Platform
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Experience the future of productivity, performance, and power in one place.
          </p>
        </section>
  
        {/* 3-Column CTA Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-16 max-w-7xl mx-auto">
          <div className="bg-red-200 rounded-lg p-6 shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Speed</h2>
            <p className="text-gray-700">Super-fast performance across all devices and platforms.</p>
          </div>
          <div className="bg-green-200 rounded-lg p-6 shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Security</h2>
            <p className="text-gray-700">Your data is safe with top-notch security measures.</p>
          </div>
          <div className="bg-blue-200 rounded-lg p-6 shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Support</h2>
            <p className="text-gray-700">24/7 assistance to help you when you need it most.</p>
          </div>
        </section>
      </div>
    );
  }
  