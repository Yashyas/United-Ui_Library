const BasicModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-xl shadow-lg w-96 max-w-full relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl">
            ×
          </button>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{content}</p>
          <div className="mt-4 flex justify-end">
            <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  