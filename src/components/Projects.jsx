import React, { useState } from "react";
import styles from "./Projects.module.css"; 

const projects = [
  {
    name: "Chatwhiz",
    description: "A real-time chat application built for seamless chatting.",
    image: "assets/chatwhiz.png",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/thurunuym/ChatWhiz",
    live: "https://chatwhiz-kpvi.onrender.com/",
    video: "assets/videos/chatwhiz.mp4",
  },
  {
    name: "Chatwhiz",
    description: "A real-time chat application built for seamless chatting.",
    image: "assets/chatwhiz.png",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/thurunuym/ChatWhiz",
    live: "https://chatwhiz-kpvi.onrender.com/",
    video: "assets/chatwhiz.mp4",
  },
  {
    name: "Chatwhiz",
    description: "A real-time chat application built for seamless chatting.",
    image: "assets/chatwhiz.png",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/thurunuym/ChatWhiz",
    live: "https://chatwhiz-kpvi.onrender.com/",
    video: "assets/chatwhiz.mp4",
  },
  {
    name: "Chatwhiz",
    description: "A real-time chat application built for seamless chatting.",
    image: "assets/chatwhiz.png",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/thurunuym/ChatWhiz",
    live: "https://chatwhiz-kpvi.onrender.com/",
    video: "assets/chatwhiz.mp4",
  },
  {
    name: "Chatwhiz",
    description: "A real-time chat application built for seamless chatting.",
    image: "assets/chatwhiz.png",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/thurunuym/ChatWhiz",
    live: "https://chatwhiz-kpvi.onrender.com/",
    video: "assets/chatwhiz.mp4",
  },
  {
    name: "Chatwhiz",
    description: "A real-time chat application built for seamless chatting.",
    image: "assets/chatwhiz.png",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/thurunuym/ChatWhiz",
    live: "https://chatwhiz-kpvi.onrender.com/",
    video: "assets/chatwhiz.mp4",
  },
  {
    name: "Chatwhiz",
    description: "A real-time chat application built for seamless chatting.",
    image: "assets/chatwhiz.png",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/thurunuym/ChatWhiz",
    live: "https://chatwhiz-kpvi.onrender.com/",
    video: "assets/chatwhiz.mp4",
  },
  {
    name: "Chatwhiz",
    description: "A real-time chat application built for seamless chatting.",
    image: "assets/chatwhiz.png",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/thurunuym/ChatWhiz",
    live: "https://chatwhiz-kpvi.onrender.com/",
    video: "assets/chatwhiz.mp4",
  }
];

const getRandomTransform = () => {
  const rotate = Math.floor(Math.random() * 10 - 5); // -5 to +5 deg
  const translateX = Math.floor(Math.random() * 40 - 20); // -20 to +20 px
  const translateY = Math.floor(Math.random() * 40 - 20);
  return `rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`;
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-20 px-20 relative">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] bg-clip-text text-transparent">
        Projects
      </h2>

      <div className={`${styles.floating} flex flex-wrap justify-center gap-10 relative transition-all`}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              transform: getRandomTransform(),
              transition: "transform 0.3s ease",
              zIndex: hoveredIndex === index ? 10 : 1,
              filter:
                hoveredIndex === null
                  ? "none"
                  : hoveredIndex === index
                  ? "none"
                  : "blur(2px) brightness(75%)",
              scale: hoveredIndex === index ? 1.05 : 1,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="w-80 cursor-pointer bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] opacity-30 hover:opacity-100 shadow-[0_0_20px_#9DE3FF] transition-all duration-300 rounded-xl p-4"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-white mb-2">
              {project.name}
            </h3>
            <p className="text-white">{project.description}</p>
            
            

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
