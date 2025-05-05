'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen px-4">
      {/* Header */}
      <motion.h1 
        className="text-5xl sm:text-6xl font-serif font-bold text-purple-400 mt-16 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Edgar Nadhif
      </motion.h1>
      <p className="text-lg mono-text text-gray-400 mb-6 animate__animated animate__fadeIn animate__delay-1s">
        Programmer & IT Student at UNNES
      </p>

      {/* Profile Image */}
      <motion.img
        src="/baru/imgg.jpg"
        alt="Foto Edgar Nadhif"
        className="w-[120px] h-[160px] object-cover rounded-full border-4 border-purple-400 shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />

      {/* Main Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {[ 
          { href: '/a11.docx', label: 'My CV' },
          { href: '#skills', label: 'Skills' },
          { href: '#about', label: 'About Me' },
          { href: '/projects', label: 'Projects' },
          { href: '#experience', label: 'Experience' },
        ].map(({ href, label }) => (
          <a
            key={label}
            href={href}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm transition transform hover:scale-105"
            download={label === 'My CV' ? 'a11.docx' : undefined}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-10 flex space-x-6">
        {[ 
          { src: '/baru/ig.svg', alt: 'Instagram', href: 'https://instagram.com/edgarndhf_' },
          { src: '/baru/linkedin.svg', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/edgar-nadhif-92071431b' },
          { src: '/baru/wa.svg', alt: 'WhatsApp', href: 'https://wa.me/6282329236106' },
        ].map(({ src, alt, href }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={alt} className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="w-24 h-1 bg-purple-700 mt-6 mb-20 rounded" />

      {/* About Me */}
      <motion.div
        id="about"
        className="max-w-4xl w-full text-left bg-gray-900 rounded-lg shadow-lg px-6 py-10 mb-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl text-green-400 font-bold mb-6 text-center">About Me</h2>
        <div className="about-text space-y-6">
          {/* Contact Info with Icons and Animation */}
          <motion.div 
            className="flex flex-col sm:flex-row sm:justify-between gap-4 text-sm text-gray-200 border border-gray-700 rounded-lg p-4 bg-gray-800"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0v1a4 4 0 01-8 0v-1m8 0a4 4 0 01-8 0" />
              </svg>
              <span className="text-white">edgarnadhif0@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.656 0 3-1.567 3-3.5S13.656 4 12 4s-3 1.567-3 3.5 1.344 3.5 3 3.5zm0 1c-3.866 0-7 3.582-7 8h14c0-4.418-3.134-8-7-8z" />
              </svg>
              <span className="text-white">Semarang, Central Java, Indonesia</span>
            </div>
          </motion.div>

          <p>
            Hello! I am <span className="about-highlight">Edgar Nadhif</span>, an IT student at UNNES. 
            My favorite language is <span className="about-highlight">C++</span>, which I use to solve algorithmic challenges and build efficient systems.
          </p>
          
          <p>
          I&#39;m deeply curious about <span className="about-highlight">Artificial Intelligence</span> and its potential. 
  I constantly explore topics in <span className="about-highlight">machine learning</span>, 
  <span className="about-highlight"> deep learning</span>, and aim to create real-world solutions using AI.
</p>

        </div>
      </motion.div>

      {/* Skills */}
      <div id="skills" className="w-full bg-gray-900 py-20 px-6">
        <h2 className="text-3xl text-purple-400 font-bold text-center mb-10">Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          {['C++', 'Deep Learning', 'Python', 'English (Basic)', 'Machine Learning', 'Git & GitHub'].map((skill, index) => (
            <motion.div 
              key={skill} 
              className="skill-glow text-xl text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div id="experience" className="w-full bg-gray-800 py-20 px-6">
        <h2 className="text-3xl text-blue-400 font-bold text-center mb-10">Experience</h2>
        <div className="max-w-3xl mx-auto text-left text-gray-300 space-y-10">
          {[
            {
              title: 'Freelance Academic',
              date: '2024 – Present',
              description: 'Provided academic support including content structuring, custom solutions, and subject-specific assistance (e.g., programming, math) to help clients meet educational goals efficiently.'
            },
            {
              title: 'Digital Book Seller',
              date: '2024 – Present',
              description: 'Created and sold educational ebooks through online platforms, focusing on accessible content, and digital marketing strategies for academic audiences.'
            }
            
          ].map(({ title, date, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-400">{date}</p>
              <p>{description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Spacer */}
      <div className="h-20" />
    </div>
  );
}
