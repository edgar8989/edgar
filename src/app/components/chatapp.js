'use client';
import { useState } from 'react';

const ChatApp = ({ messages, sendMessage, username }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-800 text-white rounded-2xl shadow-xl p-4 flex flex-col h-[80vh]">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4 px-2 custom-scrollbar">
        {messages.map((msg, index) => {
          const isMe = msg.username === username;
          return (
            <div
              key={index}
              className={`max-w-[75%] px-4 py-2 rounded-xl ${
                isMe
                  ? 'bg-cyan-600 self-end rounded-br-none'
                  : 'bg-gray-600 self-start rounded-bl-none'
              }`}
            >
              <p className="text-sm font-semibold text-white/80">{msg.username}</p>
              <p>{msg.text}</p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
