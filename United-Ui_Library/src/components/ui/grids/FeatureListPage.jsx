import { FaCheckCircle, FaReact, FaDatabase, FaCode } from "react-icons/fa";

export default function FeatureListPage() {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Our Features</h2>
      
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {/* Feature 1 */}
        <div className="flex items-center justify-center p-6 rounded-lg shadow-lg bg-blue-500 text-white">
          <FaCheckCircle className="text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Easy Setup</h3>
            <p>Quick and hassle-free setup to get you started.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center justify-center p-6 rounded-lg shadow-lg bg-green-500 text-white">
          <FaReact className="text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">React Integration</h3>
            <p>Built with React for smooth and efficient development.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center justify-center p-6 rounded-lg shadow-lg bg-yellow-500 text-white">
          <FaDatabase className="text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Database Support</h3>
            <p>Easy to integrate with various databases for flexibility.</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-center justify-center p-6 rounded-lg shadow-lg bg-red-500 text-white">
          <FaCode className="text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Code Optimized</h3>
            <p>Optimized for clean and efficient code structures.</p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="flex items-center justify-center p-6 rounded-lg shadow-lg bg-purple-500 text-white">
          <FaCheckCircle className="text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Feature 5</h3>
            <p>Placeholder text for Feature 5</p>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 rounded-lg shadow-lg bg-indigo-500 text-white">
          <FaReact className="text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Feature 6</h3>
            <p>Placeholder text for Feature 6</p>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 rounded-lg shadow-lg bg-teal-500 text-white">
          <FaDatabase className="text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Feature 7</h3>
            <p>Placeholder text for Feature 7</p>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 rounded-lg shadow-lg bg-pink-500 text-white">
          <FaCode className="text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Feature 8</h3>
            <p>Placeholder text for Feature 8</p>
          </div>
        </div>
      </div>
    </div>
  );
}
