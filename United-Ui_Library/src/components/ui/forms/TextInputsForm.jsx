import { useState } from "react";

export default function TextInputsForm() {
  const [formData, setFormData] = useState({
    text: "",
    password: "",
    email: "",
    number: "",
    search: "",
    url: "",
    phone: "",
    hiddenValue: "secret123",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🧾 Text Inputs Form</h2>

      {/* Text Input */}
      <div>
        <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">
          Text Input
        </label>
        <input
          type="text"
          name="text"
          id="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Enter text"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Password Input */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Number Input */}
      <div>
        <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
          Number
        </label>
        <input
          type="number"
          name="number"
          id="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Enter a number"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Search Input */}
      <div>
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Search
        </label>
        <input
          type="search"
          name="search"
          id="search"
          value={formData.search}
          onChange={handleChange}
          placeholder="Search something..."
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* URL Input */}
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
          Website URL
        </label>
        <input
          type="url"
          name="url"
          id="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="https://example.com"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Phone Number Input */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91-9876543210"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Hidden Input */}
      <input
        type="hidden"
        name="hiddenValue"
        value={formData.hiddenValue}
        onChange={handleChange}
      />

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Form
        </button>
      </div>
    </form>
  );
}
