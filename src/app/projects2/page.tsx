// src/app/projects.tsx
export default function ProjectsPage() {
    return (
      <div className="px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center animate__animated animate__fadeIn">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all animate__animated animate__fadeIn">
            <img src="/images/project1.jpg" alt="Project 1" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-2xl text-white mt-4">Project 1</h3>
            <p className="text-gray-400 mt-2">Description of the project goes here...</p>
            <a href="#" className="text-green-500 mt-4 block">View Project</a>
          </div>
          {/* Tambahkan proyek lainnya di sini */}
        </div>
      </div>
    );
  }
  