import { useState } from "react";

export default function DateTimeInputsForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    datetime: "",
    month: "",
    week: "",
    rangeStart: "",
    rangeEnd: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📅 Date & Time Inputs</h2>

      {/* Date Picker */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Date Picker</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Time Picker */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Time Picker</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Datetime Picker */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Datetime Picker</label>
        <input
          type="datetime-local"
          name="datetime"
          value={formData.datetime}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Month Picker */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Month Picker</label>
        <input
          type="month"
          name="month"
          value={formData.month}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Week Picker */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Week Picker</label>
        <input
          type="week"
          name="week"
          value={formData.week}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Date Range Picker */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Date Range Picker</label>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-xs text-gray-600 mb-1">Start Date</label>
            <input
              type="date"
              name="rangeStart"
              value={formData.rangeStart}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs text-gray-600 mb-1">End Date</label>
            <input
              type="date"
              name="rangeEnd"
              value={formData.rangeEnd}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
            />
          </div>
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
