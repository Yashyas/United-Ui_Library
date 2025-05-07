export default function HolyGrailLayout() {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-blue-700 text-white p-4 text-center text-xl font-bold shadow">
          🧱 Holy Grail Layout
        </header>
  
        {/* 3-Column Layout */}
        <div className="flex-1 p-4 space-y-4 md:space-y-0 md:flex md:space-x-4">
          {/* Navigation */}
          <nav className="bg-blue-100 break-inside-avoid w-full md:w-1/4 p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Navigation</h2>
            <ul className="space-y-2">
              <li className="hover:underline">Home</li>
              <li className="hover:underline">Services</li>
              <li className="hover:underline">About</li>
              <li className="hover:underline">Contact</li>
            </ul>
          </nav>
  
          {/* Main Content */}
          <main className="bg-blue-200 break-inside-avoid w-full md:w-2/4 p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Main Content</h2>
            <p className="text-gray-700">
              This is the main area. On smaller screens, it stacks vertically. Resize the window to see the responsive behavior.
            </p>
          </main>
  
          {/* Sidebar */}
          <aside className="bg-blue-300 break-inside-avoid w-full md:w-1/4 p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Sidebar</h2>
            <p className="text-gray-700">This section can contain ads, links, or extra info.</p>
          </aside>
        </div>
  
        {/* Footer */}
        <footer className="bg-blue-800 text-white text-center p-4 mt-4">
          &copy; 2025 Your Company. All rights reserved.
        </footer>
      </div>
    );
  }
  