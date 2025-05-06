import { useState, useRef, useEffect } from "react";

export default function AdvancedTextInputsForm() {
  const [multiline, setMultiline] = useState("");
  const [resizableText, setResizableText] = useState("");
  const [charCountText, setCharCountText] = useState("");
  const [masked, setMasked] = useState("");
  const [tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState("");
  const autoResizeRef = useRef(null);

  // Auto-resize effect
  useEffect(() => {
    if (autoResizeRef.current) {
      autoResizeRef.current.style.height = "auto";
      autoResizeRef.current.style.height = `${autoResizeRef.current.scrollHeight}px`;
    }
  }, [resizableText]);

  const handleAddTag = (e) => {
    if (e.key === "Enter" && inputTag.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputTag.trim())) {
        setTags([...tags, inputTag.trim()]);
      }
      setInputTag("");
    }
  };

  const removeTag = (index) => {
    const updated = [...tags];
    updated.splice(index, 1);
    setTags(updated);
  };

  const handleMaskedInput = (value) => {
    // Format as credit card (XXXX XXXX XXXX XXXX)
    const digits = value.replace(/\D/g, "").substring(0, 16);
    const parts = digits.match(/.{1,4}/g);
    setMasked(parts ? parts.join(" ") : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      JSON.stringify(
        {
          multiline,
          resizableText,
          charCountText,
          masked,
          tags,
        },
        null,
        2
      )
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto p-6 bg-white rounded-xl shadow space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🧠 Advanced Text Inputs</h2>

      {/* Multiline Textarea */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Multiline Textarea</label>
        <textarea
          name="multiline"
          value={multiline}
          onChange={(e) => setMultiline(e.target.value)}
          placeholder="Type multiple lines..."
          rows={4}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Auto-Resizing Textarea */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Auto-Resizing Textarea</label>
        <textarea
          ref={autoResizeRef}
          value={resizableText}
          onChange={(e) => setResizableText(e.target.value)}
          placeholder="This textarea resizes based on content"
          rows={1}
          className="w-full px-4 py-2 border rounded-lg resize-none shadow-sm overflow-hidden focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Character Counter Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Input with Character Counter</label>
        <input
          type="text"
          maxLength={100}
          value={charCountText}
          onChange={(e) => setCharCountText(e.target.value)}
          placeholder="Max 100 characters"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
        <p className="text-xs text-gray-500 text-right mt-1">{charCountText.length}/100 characters</p>
      </div>

      {/* Masked Input (Credit Card Format) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Masked Input (Credit Card)</label>
        <input
          type="text"
          value={masked}
          onChange={(e) => handleMaskedInput(e.target.value)}
          placeholder="XXXX XXXX XXXX XXXX"
          className="w-full px-4 py-2 border rounded-lg shadow-sm tracking-widest focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Tag/Token Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tag/Token Input</label>
        <div className="flex flex-wrap gap-2 p-2 border rounded-lg">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(idx)}
                className="text-xs hover:text-red-500"
              >
                ✕
              </button>
            </span>
          ))}
          <input
            type="text"
            value={inputTag}
            onChange={(e) => setInputTag(e.target.value)}
            onKeyDown={handleAddTag}
            placeholder="Type & press Enter"
            className="flex-1 min-w-[150px] px-2 py-1 outline-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit Form
        </button>
      </div>
    </form>
  );
}
