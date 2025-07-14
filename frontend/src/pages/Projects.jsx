import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛍️",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      image: "📋",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with detailed forecasts and animations",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      image: "🌤️",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with 3D animations and interactive elements",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind"],
      image: "🎨",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <div className="min-h-screen p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent text-center">
          Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-item p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">{project.image}</div>
              <h3 className="text-2xl font-semibold mb-3 text-center">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-center">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-sm border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 justify-center">
                <a 
                  href={project.demoLink} 
                  className="glass-item px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200 text-sm"
                >
                  Live Demo
                </a>
                <a 
                  href={project.githubLink} 
                  className="glass-item px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200 text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="glass-item inline-block px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-200 text-lg"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
