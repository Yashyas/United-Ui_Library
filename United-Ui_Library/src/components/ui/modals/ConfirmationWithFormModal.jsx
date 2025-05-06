import React, { useState } from 'react';

const ConfirmationWithFormModal = ({
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  fullscreen = false, // Toggle full-screen
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [formData, setFormData] = useState({ reason: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleConfirm = () => {
    console.log('Confirmed with reason:', formData.reason);
    setIsModalOpen(false);
    onClose();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <div
      className={`${
        isModalOpen ? 'block' : 'hidden'
      } ${fullscreen ? 'fixed inset-0 z-50' : 'relative w-full h-auto p-4 border border-dashed border-gray-300'} flex items-center justify-center bg-black/50 backdrop-blur-sm`}
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-4 p-6 relative animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="mb-4">
          <label htmlFor="reason" className="block text-gray-700">Reason</label>
          <input
            type="text"
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex justify-between gap-4">
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Confirm
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationWithFormModal;
