import React, { useState } from 'react';

const ChatModal = ({
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  title = 'Chat or Messenger',
  fullscreen = false, // Toggle full-screen
}) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Support', text: 'Hello! How can I assist you today?' },
    { id: 2, sender: 'User', text: 'I need help with my account.' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: 'User', text: newMessage },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } ${fullscreen ? 'fixed inset-0 z-50' : 'relative w-full h-auto p-4 border border-dashed border-gray-300'} flex items-center justify-center bg-black/50 backdrop-blur-sm`}
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-4 p-6 relative animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="h-80 overflow-y-auto mb-4 border-b border-gray-300 p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-3 ${message.sender === 'User' ? 'bg-gray-200 p-2 rounded-lg' : ''}`}
            >
              <strong>{message.sender}:</strong>
              <p className="text-gray-700">{message.text}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
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

export default ChatModal;
