import { useState } from "react";

export default function RangeSliderForm() {
  const [rangeValue, setRangeValue] = useState(50);
  const [brightness, setBrightness] = useState(70);
  const [multiThumb, setMultiThumb] = useState({ min: 20, max: 80 });
  const [color, setColor] = useState("#ff5733");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: 
    Range Value: ${rangeValue}, 
    Brightness: ${brightness}, 
    Min-Max: ${multiThumb.min}-${multiThumb.max}, 
    Color: ${color}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">🎛️ Range & Slider Inputs</h2>

      {/* Single Range Slider */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Range Slider: {rangeValue}
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Volume/Brightness Slider */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Brightness: {brightness}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
          className="w-full accent-yellow-400"
        />
      </div>

      {/* Simulated Multi-Thumb Slider */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Multi-Thumb Range (Simulated)
        </label>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="text-xs text-gray-600">Min: {multiThumb.min}</label>
            <input
              type="range"
              min="0"
              max="100"
              value={multiThumb.min}
              onChange={(e) =>
                setMultiThumb({ ...multiThumb, min: Number(e.target.value) })
              }
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-600">Max: {multiThumb.max}</label>
            <input
              type="range"
              min="0"
              max="100"
              value={multiThumb.max}
              onChange={(e) =>
                setMultiThumb({ ...multiThumb, max: Number(e.target.value) })
              }
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Color Picker */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Color Picker
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="h-10 w-16 border rounded"
          />
          <span className="text-gray-700">{color}</span>
        </div>
      </div>

      {/* Submit */}
      <div>
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
