'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import ChatApp from '../components/chatapp';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [entered, setEntered] = useState(false);

  // Fungsi untuk mengirim pesan
  const sendMessage = async (text) => {
    const messageData = {
      username,
      text,
    };

    // Menyimpan pesan ke Supabase
    await supabase.from('messages').insert([messageData]);

    // Optimistic UI update
    setMessages((prev) => [...prev, messageData]);
  };

  useEffect(() => {
    if (entered) {
      // Langganan untuk pesan baru menggunakan channel
      const channel = supabase.channel('chat_channel')
        .on('INSERT', { schema: 'public', table: 'messages' }, (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        })
        .subscribe();

      // Ambil pesan-pesan yang sudah ada
      const fetchMessages = async () => {
        const { data } = await supabase
          .from('messages')
          .select('*')
          .order('created_at', { ascending: false });
        setMessages(data);
      };
      fetchMessages();

      // Bersihkan langganan saat komponen dibersihkan
      return () => {
        supabase.removeChannel(channel);  // Unsubscribe dari real-time
      };
    }
  }, [entered]);

  const handleJoinChat = () => {
    if (username.trim()) {
      setEntered(true);
    }
  };

  if (!entered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-700 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-6">Enter your name</h1>
          <input
            type="text"
            className="px-6 py-3 rounded-xl bg-gray-800 text-white text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4 w-80"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleJoinChat()}
            placeholder="Your username"
          />
          <button
            onClick={handleJoinChat}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Join Chat
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 to-indigo-600 p-8 flex flex-col justify-between">
      <h1 className="text-4xl font-bold text-center text-white mb-6">Welcome, {username}</h1>
      <div className="flex flex-col-reverse max-h-[70vh] overflow-auto">
        <ChatApp messages={messages} sendMessage={sendMessage} username={username} />
      </div>
    </div>
  );
};

export default ChatPage;
