import { useState } from "react";

export default function SpecializedInputsForm() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [pin, setPin] = useState(["", "", "", ""]);
  const [currency, setCurrency] = useState("");
  const [rating, setRating] = useState(3);
  const [level, setLevel] = useState(50);

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handlePinChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:
    OTP: ${otp.join("")}
    PIN: ${pin.join("")}
    Currency: ${currency}
    Rating: ${rating} stars
    Level: ${level}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📍 Specialized Inputs</h2>

      {/* OTP Input */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">OTP</label>
        <div className="flex gap-2">
          {otp.map((digit, i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(i, e.target.value)}
              className="w-12 h-12 text-center border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          ))}
        </div>
      </div>

      {/* PIN Input */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">PIN</label>
        <div className="flex gap-2">
          {pin.map((digit, i) => (
            <input
              key={i}
              type="password"
              maxLength="1"
              value={digit}
              onChange={(e) => handlePinChange(i, e.target.value)}
              className="w-12 h-12 text-center border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          ))}
        </div>
      </div>

      {/* Currency Input */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Currency</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            ₹
          </span>
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            placeholder="Enter amount"
            className="pl-8 w-full border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>

      {/* Rating Stars */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((val) => (
            <span
              key={val}
              onClick={() => setRating(val)}
              className={`text-2xl cursor-pointer ${
                rating >= val ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Slider with Steps */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Skill Level: {level}
        </label>
        <input
          type="range"
          min="0"
          max="100"
          step="25"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full accent-indigo-500"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Progress</label>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-indigo-500 h-4 rounded-full transition-all duration-300"
            style={{ width: `${level}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-1">{level}% completed</p>
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
