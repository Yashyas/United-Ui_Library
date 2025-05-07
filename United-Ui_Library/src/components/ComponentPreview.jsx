import { useState, useEffect } from "react";
import { Clipboard, ClipboardCheck, Code2 } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/components/prism-jsx";

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
    <div className="mb-8 border border-white/20 rounded-lg overflow-hidden shadow-xl backdrop-blur-md bg-white/10 transition-all duration-500">
      
      {/* Title + Toggle + Copy Button */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-white/20 bg-white/10 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white capitalize">{title}</h3>
        <div className="flex items-center space-x-2">
          <button
            className="hover:text-indigo-300"
            onClick={() => setShowCode((prev) => !prev)}
            title="Toggle Code"
          >
            <Code2 className="w-5 h-5 text-indigo-200 hover:text-indigo-400" />
          </button>
          <button
            onClick={handleCopyClick}
            title="Copy Code"
          >
            {copyStatus === "Copied Successfully" ? (
              <ClipboardCheck className="w-5 h-5 text-green-400" />
            ) : (
              <Clipboard className="w-5 h-5 text-indigo-200 hover:text-indigo-400" />
            )}
          </button>
        </div>
      </div>

      {/* Rendered Component */}
      <div className="p-4 flex justify-center items-center">
        <Component />
      </div>

      {/* Code Block */}
      {showCode && (
        <pre className="language-jsx line-numbers bg-gray-900/80 text-sm overflow-auto p-4 rounded-b-lg">
          <code className="language-jsx" key={code}>
            {code}
          </code>
        </pre>
      )}

      {/* Copy Status */}
      <div
        className={`text-sm px-4 py-2 h-8 transition-opacity duration-300 ${
          copyStatus ? "text-green-400 opacity-100" : "opacity-0"
        }`}
      >
        {copyStatus}
      </div>
    </div>
  );
};

export default ComponentPreview;
