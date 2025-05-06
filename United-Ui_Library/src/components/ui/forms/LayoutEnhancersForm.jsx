import { useState } from "react";

export default function LayoutEnhancersForm() {
  const [formData, setFormData] = useState({
    currency: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    preferences: "option1",
  });

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);

  return (
    <form className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Form with Layout Enhancers</h2>

      {/* Input Groups (Prefix/Suffix like Currency) */}
      <div className="space-y-4">
        <div className="flex items-center border border-gray-300 rounded-md p-3">
          <span className="text-gray-500 mr-2">$</span>
          <input
            type="number"
            name="currency"
            value={formData.currency}
            onChange={handleInputChange}
            className="w-full p-2 border-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Amount"
          />
        </div>
      </div>

      {/* Grid Layout Form */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Doe"
          />
        </div>
      </div>

      {/* Responsive Field Wrappers */}
      <div className="block sm:flex items-center space-x-4">
        <div className="w-full sm:w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="youremail@example.com"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="********"
          />
        </div>
      </div>

      {/* Accordion Form Section */}
      <div>
        <button
          type="button"
          onClick={toggleAccordion}
          className="w-full py-2 bg-indigo-600 text-white rounded-md"
        >
          {isAccordionOpen ? "Hide" : "Show"} Additional Information
        </button>
        {isAccordionOpen && (
          <div className="mt-4 space-y-4 p-4 border rounded-md border-gray-300">
            <label htmlFor="preferences" className="block text-sm font-medium text-gray-700">
              Preferences
            </label>
            <select
              id="preferences"
              name="preferences"
              value={formData.preferences}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
