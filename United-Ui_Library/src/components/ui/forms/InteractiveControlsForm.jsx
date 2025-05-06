import { useState } from "react";

export default function InteractiveControlsForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");
  const [selectedSegment, setSelectedSegment] = useState("A");
  const [selectedChips, setSelectedChips] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const toggleCheckbox = () => setIsChecked(!isChecked);

  const handleOptionChange = (event) => setSelectedOption(event.target.value);

  const handleSegmentChange = (segment) => setSelectedSegment(segment);

  const handleChipToggle = (chip) => {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((item) => item !== chip) : [...prev, chip]
    );
  };

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(Math.max(1, quantity - 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      Switch: ${isChecked ? "On" : "Off"}
      Option: ${selectedOption}
      Segment: ${selectedSegment}
      Chips: ${selectedChips.join(", ")}
      Quantity: ${quantity}
    `);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🧩 Interactive Controls</h2>

      {/* Toggle Switch */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Toggle Switch</label>
        <label className="flex items-center cursor-pointer">
          <span className="mr-2">Off</span>
          <div className="relative">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={toggleCheckbox}
              className="sr-only"
            />
            <div className="block bg-gray-300 w-12 h-6 rounded-full"></div>
            <div
              className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-200 ${
                isChecked ? "transform translate-x-full bg-indigo-600" : ""
              }`}
            ></div>
          </div>
          <span className="ml-2">On</span>
        </label>
      </div>

      {/* Button Groups */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Button Groups</label>
        <div className="flex space-x-2">
          {["option1", "option2", "option3"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleOptionChange({ target: { value: option } })}
              className={`py-2 px-4 rounded-lg focus:outline-none ${
                selectedOption === option
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Segmented Controls */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Segmented Controls</label>
        <div className="flex space-x-2">
          {["A", "B", "C"].map((segment) => (
            <button
              key={segment}
              type="button"
              onClick={() => handleSegmentChange(segment)}
              className={`py-2 px-4 rounded-lg focus:outline-none ${
                selectedSegment === segment
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Segment {segment}
            </button>
          ))}
        </div>
      </div>

      {/* Chips / Pills (Selectable Tags) */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Chips / Pills</label>
        <div className="flex flex-wrap gap-2">
          {["Tag 1", "Tag 2", "Tag 3", "Tag 4"].map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => handleChipToggle(chip)}
              className={`py-1 px-3 rounded-full focus:outline-none text-sm ${
                selectedChips.includes(chip)
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Stepper Inputs (Increment/Decrement) */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Quantity</label>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={handleDecrement}
            className="py-2 px-4 bg-gray-200 rounded-full text-gray-800"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-12 text-center border rounded py-2"
          />
          <button
            type="button"
            onClick={handleIncrement}
            className="py-2 px-4 bg-gray-200 rounded-full text-gray-800"
          >
            +
          </button>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
}
