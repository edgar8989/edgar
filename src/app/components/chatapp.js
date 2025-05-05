'use client';

import { useState } from 'react';

const ChatApp = ({ messages, sendMessage, username }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-app flex flex-col justify-between h-full p-4 bg-gray-900 rounded-xl shadow-lg max-w-md mx-auto">
      {/* Messages Container */}
      <div className="messages flex-1 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message p-3 rounded-xl max-w-xs ${
              msg.username === username
                ? 'bg-blue-500 text-white self-end'
                : 'bg-gray-700 text-white self-start'
            }`}
          >
            <strong>{msg.username === username ? 'You' : msg.username}:</strong>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="input-box flex items-center space-x-2 mt-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type a message..."
          className="input-field flex-1 p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSendMessage}
          className="send-button px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-all duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
