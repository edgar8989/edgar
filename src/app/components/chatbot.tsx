'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const responses: Record<string, string> = {
  hi: "Hello! How can I help you today?",
  hello: "Hi there! Need any assistance?",
  bye: "Goodbye! Have a nice day!",
  help: "Sure! I can help you with basic questions.",
};

const quickReplies = ['Hi', 'Help', 'Bye', 'Hello'];

function getResponse(input: string): string {
  const key = Object.keys(responses).find((k) =>
    input.toLowerCase().includes(k)
  );
  return key ? responses[key] : "Sorry, I don't understand that.";
}

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { text, sender: 'user' };
    const botMsg: Message = { text: getResponse(text), sender: 'bot' };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const handleSend = () => sendMessage(input);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl w-full max-w-md mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">💬 Smart ChatBot</h2>

      {/* Quick Replies */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {quickReplies.map((text) => (
          <button
            key={text}
            onClick={() => sendMessage(text)}
            className="bg-gray-700 hover:bg-blue-600 text-sm px-4 py-2 rounded-full transition"
          >
            {text}
          </button>
        ))}
      </div>

      {/* Chat Window */}
      <div className="h-64 overflow-y-auto bg-gray-800 rounded-lg p-4 space-y-2 mb-4 border border-gray-700">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-gray-700 text-white rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 p-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
        >
          Send
        </button>
      </div>
    </motion.div>
  );
};

export default ChatBot;
