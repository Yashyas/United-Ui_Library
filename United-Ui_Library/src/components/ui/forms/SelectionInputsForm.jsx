import { useState } from "react";

export default function SelectionInputsForm() {
  const [formData, setFormData] = useState({
    singleSelect: "",
    multiSelect: [],
    searchSelect: "",
    radioOption: "",
    checkboxes: [],
    toggle: false,
    listboxOption: "",
  });

  const [search, setSearch] = useState("");

  const options = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango"];

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  const handleCheckbox = (value) => {
    setFormData((prev) => ({
      ...prev,
      checkboxes: prev.checkboxes.includes(value)
        ? prev.checkboxes.filter((v) => v !== value)
        : [...prev.checkboxes, value],
    }));
  };

  const handleMultiSelect = (e) => {
    const selected = Array.from(e.target.selectedOptions, (o) => o.value);
    setFormData((prev) => ({ ...prev, multiSelect: selected }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto p-6 bg-white rounded-xl shadow space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🔘 Selection Inputs</h2>

      {/* Single Select Dropdown */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Single Select</label>
        <select
          value={formData.singleSelect}
          onChange={(e) => setFormData({ ...formData, singleSelect: e.target.value })}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select a fruit</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Multi Select */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Multi Select</label>
        <select
          multiple
          value={formData.multiSelect}
          onChange={handleMultiSelect}
          className="w-full p-2 border rounded-lg h-32"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Searchable Select */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Searchable Select</label>
        <input
          type="text"
          placeholder="Search options..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-2 p-2 border rounded-lg"
        />
        <select
          value={formData.searchSelect}
          onChange={(e) => setFormData({ ...formData, searchSelect: e.target.value })}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select</option>
          {filteredOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Radio Buttons */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Radio Options</label>
        <div className="space-y-1">
          {["Yes", "No", "Maybe"].map((opt) => (
            <label key={opt} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="radioOption"
                value={opt}
                checked={formData.radioOption === opt}
                onChange={(e) => setFormData({ ...formData, radioOption: e.target.value })}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Checkbox Group */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Checkbox Group</label>
        <div className="space-y-1">
          {["Red", "Green", "Blue"].map((opt) => (
            <label key={opt} className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                value={opt}
                checked={formData.checkboxes.includes(opt)}
                onChange={() => handleCheckbox(opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Toggle Switch */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">Toggle Option</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={formData.toggle}
            onChange={() =>
              setFormData((prev) => ({ ...prev, toggle: !prev.toggle }))
            }
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-indigo-600 after:content-[''] after:absolute after:left-[4px] after:top-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full" />
        </label>
      </div>

      {/* Listbox (simplified dropdown) */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Listbox</label>
        <div className="relative">
          <select
            className="w-full p-2 border rounded-lg"
            value={formData.listboxOption}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, listboxOption: e.target.value }))
            }
          >
            <option value="">Choose an option</option>
            {["Option A", "Option B", "Option C"].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
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
