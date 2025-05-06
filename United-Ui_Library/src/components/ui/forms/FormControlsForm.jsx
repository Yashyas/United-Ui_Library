import { useState } from "react";

export default function FormControlsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", password: "" });
    setCurrentStep(1);
  };

  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Form Controls</h2>

      {/* Form Section Divider */}
      <div className="border-t-2 border-gray-300 my-4"></div>

      {/* Stepper / Wizard Navigation */}
      <div className="flex justify-between mb-4">
        <button
          type="button"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-xl text-gray-600">Step {currentStep} of 3</span>
        <button
          type="button"
          onClick={nextStep}
          disabled={currentStep === 3}
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Step 1: Name and Email */}
      {currentStep === 1 && (
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Your Name"
          />

          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Your Email"
          />
        </div>
      )}

      {/* Step 2: Password */}
      {currentStep === 2 && (
        <div>
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
            placeholder="Your Password"
          />
        </div>
      )}

      {/* Step 3: Review */}
      {currentStep === 3 && (
        <div>
          <p className="text-lg font-medium text-gray-700">Review Your Details:</p>
          <div className="mt-2">
            <p className="text-sm text-gray-600">Name: {formData.name}</p>
            <p className="text-sm text-gray-600">Email: {formData.email}</p>
            <p className="text-sm text-gray-600">Password: {formData.password}</p>
          </div>
        </div>
      )}

      {/* Form Section Divider */}
      <div className="border-t-2 border-gray-300 my-4"></div>

      {/* Form Controls (Submit and Reset) */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
