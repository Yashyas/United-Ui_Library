import React, { useState } from 'react';

const LoginSignupModal = ({
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  title = 'Login or Sign Up',
  fullscreen = false, // Toggle full-screen
}) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } ${fullscreen ? 'fixed inset-0 z-50' : 'relative w-full h-auto p-4 border border-dashed border-gray-300'} flex items-center justify-center bg-black/50 backdrop-blur-sm`}
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-4 p-6 relative animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="text-gray-700 mb-6">
          {isLogin ? (
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          ) : (
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Confirm your password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
        <button
          onClick={toggleForm}
          className="w-full py-2 text-blue-500 underline hover:text-blue-700 mb-4"
        >
          {isLogin ? 'Need an account? Sign up' : 'Already have an account? Login'}
        </button>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default LoginSignupModal;
