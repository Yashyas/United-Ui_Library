import React, { useState } from 'react';

const FormCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data to backend (e.g., API call)
      console.log('Form submitted successfully', formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg p-8  bg-gray-900 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-800 text-white placeholder-gray-400"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-800 text-white placeholder-gray-400"
              placeholder="Enter your email address"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-800 text-white placeholder-gray-400"
              placeholder="Create a password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>

          {/* Sign In Link */}
          <p className="mt-4 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="text-blue-400 hover:underline">Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormCard;
