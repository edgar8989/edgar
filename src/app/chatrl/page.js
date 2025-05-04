'use client';

import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChatApp from '../components/chatapp';

let socket;

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (entered) {
      socket = io('http://localhost:3001');

      socket.on('message', (msg) => {
        setMessages((prev) => [...prev, msg]);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [entered]);

  const sendMessage = (text) => {
    const messageData = {
      username,
      text,
    };

    socket.emit('message', messageData);
    setMessages((prev) => [...prev, messageData]); // agar langsung muncul
  };

  if (!entered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
        <h1 className="text-2xl mb-4">Enter your name</h1>
        <input
          type="text"
          className="px-4 py-2 rounded bg-slate-700 text-white outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && username.trim() && setEntered(true)}
        />
        <button
          onClick={() => username.trim() && setEntered(true)}
          className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded"
        >
          Join Chat
        </button>
      </div>
    );
  }

  return (
    <div className="chat-page">
      <h1 className="text-2xl font-bold text-center text-white my-4">Welcome, {username}</h1>
      <ChatApp messages={messages} sendMessage={sendMessage} username={username} />
    </div>
  );
};

export default ChatPage;
