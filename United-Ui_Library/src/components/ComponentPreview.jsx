import { useState, useEffect } from "react";
import { Clipboard, ClipboardCheck, Code2 } from "lucide-react"; //icons
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/components/prism-jsx"; // Important for JSX syntax highlighting

const ComponentPreview = ({ title, component: Component, code }) => {
  const [showCode, setShowCode] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    if (showCode && code) {
      Prism.highlightAll();
    }
  }, [showCode, code]);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus("Copied Successfully");
      setTimeout(() => setCopyStatus(""), 2000);
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
          {/* Toggle code  */}
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={() => setShowCode((prev) => !prev)}
            title="Toggle Code"
          >
            <Code2 className="w-5 h-5 text-blue-600 hover:text-blue-800" />
          </button>

          {/* Copy code  */}
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={handleCopyClick}
            title="Copy Code"
          >
            {copyStatus === "Copied Successfully" ? (
              <ClipboardCheck className="w-5 h-5 text-green-600" />
            ) : (
              <Clipboard className="w-5 h-5 text-blue-600 hover:text-blue-800" />
            )}
          </button>
        </div>
      </div>

      {/* Rendered Component */}
      <div className="p-4 bg-white flex justify-center items-center">
        <Component />
      </div>

      {/* Code Block with line numbers and syntax highlighting */}
      {showCode && (
        <pre className="language-jsx line-numbers bg-gray-900 text-sm overflow-auto p-4 rounded-md">
          <code className="language-jsx" key={code}>
            {code}
          </code>
        </pre>
      )}

      {/* Copy Status */}
      <div
        className={`text-sm px-4 py-2 h-8 transition-opacity duration-300 ${
          copyStatus ? "text-green-500 opacity-100" : "opacity-0"
        }`}
      >
        {copyStatus} {/* Keeps space reserved */}
      </div>
    </div>
  );
};

export default ComponentPreview;
