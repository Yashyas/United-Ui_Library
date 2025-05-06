import React, { useState } from 'react';

const UserProfileModal = ({
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  title = 'Edit Profile',
  name = 'John Doe',
  email = 'johndoe@example.com',
  fullscreen = false, // Toggle full-screen
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [formData, setFormData] = useState({ name, email });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    console.log('Saved:', formData);
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
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;
