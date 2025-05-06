import { useState } from "react";

export default function FeedbackElementsForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(/\S+@\S+\.\S+/.test(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.length >= 6);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid) {
      alert("Form submitted!");
    } else {
      alert("Please fix the errors.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">💬 Feedback Elements</h2>

      {/* Email Field */}
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className={`w-full p-3 pr-10 border ${
              isEmailValid ? "border-gray-300" : "border-red-500"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600`}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-help" title="We use your email to send confirmations.">
            ℹ️
          </div>
        </div>
        <p className={`text-sm ${isEmailValid ? "text-gray-500" : "text-red-500"}`}>
          {isEmailValid ? "We'll never share your email." : "Please enter a valid email address."}
        </p>
      </div>

      {/* Password Field with Toggle and Floating Label */}
      <div className="space-y-1">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            className={`w-full p-3 pr-10 border ${
              isPasswordValid ? "border-gray-300" : "border-red-500"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500"
            title={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
        <p className={`text-sm ${isPasswordValid ? "text-gray-500" : "text-red-500"}`}>
          {isPasswordValid
            ? "Password must be at least 6 characters."
            : "Password is too short."}
        </p>
      </div>

      {/* Additional Help Text */}
      <div className="text-sm text-gray-500">
        Ensure your password is strong and secure.
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
