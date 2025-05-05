'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Chat Real Time Website',
    description: 'Real Time Chat.',
    image: '/33.png',
    link: '/chatrl/',
  },
  {
    title: 'AI Chatbot',
    description: 'A chatbot built using Python and NLP that answers customer questions automatically.',
    image: '/123456.png',
    link: '/chatbot',
  },
  {
    title: 'TicTacToe Game',
    description: 'A TicTacToe game with a stylish UI using React, Tailwind CSS, and optional AI mode.',
    image: '/12345.png',
    link: '/tictactoe',
  },
 
];


export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-6 py-16">
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }} // Mempercepat durasi animasi judul
      >
        ✨ My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl ring-1 ring-white/10 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }} // Menjaga efek scale
            whileTap={{ scale: 0.95 }} // Mempercepat efek scale saat klik
            transition={{ duration: 0.2, delay: index * 0.1 }} // Mempercepat animasi transisi
            viewport={{ once: true }}
            onClick={() => {
              // Efek animasi klik
              window.open(project.link, '_blank');
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl border border-white/10"
            />
            <h3 className="text-white text-2xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>

            <motion.a
              whileTap={{ scale: 0.95 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition"
              onClick={(e) => e.stopPropagation()} // Menghindari aksi ganda
            >
              🔗 View Project
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
