import { useState } from "react";

const ComponentPreview = ({ title, component: Component, code }) => {
  const [showCode, setShowCode] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(code); // Copy the code to clipboard
      setCopyStatus("Code copied!"); // Show the feedback message
      setTimeout(() => setCopyStatus(""), 2000); // Reset after 2 seconds
    } catch (error) {
      setCopyStatus("Failed to copy code.");
    }
  };

  return (
    <div className="mb-8 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      {/* Title + Toggle + Copy Button */}
      <div className="flex justify-between items-center bg-gray-100 px-4 py-2">
        <h3 className="text-lg font-semibold capitalize">{title}</h3>
        <div className="flex items-center space-x-2">
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={() => setShowCode((prev) => !prev)}
          >
            {showCode ? "Hide Code" : "Show Code"}
          </button>
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={handleCopyClick}
          >
            Copy
          </button>
        </div>
      </div>

      {/* Rendered Component */}
      <div className="p-4 bg-white flex justify-center items-center">
        <Component />
      </div>

      {/* Code Block */}
      {showCode && (
        <pre className="bg-gray-900 text-gray-100 text-sm overflow-auto p-4">
          <code>{code}</code>
        </pre>
      )}

      {/* Copy Status */}
      {copyStatus && (
        <div className="text-sm text-green-500 px-4 py-2">
          {copyStatus}
        </div>
      )}
    </div>
  );
};

export default ComponentPreview;
