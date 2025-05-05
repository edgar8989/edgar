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
    <div className="chat-app-container">
      <div className="messages-container space-y-4 py-4 px-2">
        {messages.map((msg, index) => (
          <div key={index} className="message-item flex items-start">
            <div className="message-bubble bg-indigo-700 text-white p-4 rounded-lg max-w-[80%] ml-auto">
              <strong className="text-lg">{msg.username}: </strong>
              <span>{msg.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="input-container flex items-center gap-2 mt-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type a message..."
          className="input-field px-4 py-2 w-full rounded-lg bg-gray-800 text-white text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={handleSendMessage}
          className="send-button px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-all duration-300 ease-in-out"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
