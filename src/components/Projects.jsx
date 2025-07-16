import React, { useState } from "react";
import styles from "./Projects.module.css";
import chatwhizImg from "../assets/chatwhiz.png";
import githubIcon from "../assets/icons/github.svg";
import linkIcon from "../assets/icons/link.svg";
import videoIcon from "../assets/icons/video.svg";


const projects = [
  {
    name: "Chatwhiz",
    description: "A real-time chat application built for seamless chatting.",
    image: "chatwhiz.png",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/thurunuym/ChatWhiz",
    live: "https://chatwhiz-kpvi.onrender.com/",
    video: "../assets/videos/chatwhiz.mp4",
  },
  {
    name: "Chatwhiz",
    description: "A real-time chat application built for seamless chatting.",
    image: "chatwhiz.png",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/thurunuym/ChatWhiz",
    live: "https://chatwhiz-kpvi.onrender.com/",
    video: "../assets/videos/chatwhiz.mp4",
  },
  {
    name: "Chatwhiz",
    description: "A real-time chat application built for seamless chatting.",
    image: "chatwhiz.png",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/thurunuym/ChatWhiz",
    live: "https://chatwhiz-kpvi.onrender.com/",
    video: "../assets/videos/chatwhiz.mp4",
  },
  {
    name: "Chatwhiz",
    description: "A real-time chat application built for seamless chatting.",
    image: "chatwhiz.png",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/thurunuym/ChatWhiz",
    live: "https://chatwhiz-kpvi.onrender.com/",
    video: "../assets/videos/chatwhiz.mp4",
  }

];

// Generate stable random transforms for all cards
const transforms = Array.from({ length: projects.length }, () => {
  const rotate = Math.floor(Math.random() * 10 - 5); // -5 to +5 deg
  const translateX = Math.floor(Math.random() * 40 - 20);
  const translateY = Math.floor(Math.random() * 40 - 20);
  return `rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`;
});

const delays = Array.from({ length: projects.length }, () => `${Math.random() * 3}s`);

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const imageMap = {
  "chatwhiz.png": chatwhizImg,
};

  return (
    <section id="projects" className="py-20 px-8 md:px-20 relative">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-10 relative">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`w-80 bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] opacity-30 hover:opacity-100 shadow-[0_0_20px_#9DE3FF] transition-all duration-300 rounded-xl p-4 cursor-pointer ${styles.floatingCard}`}
            style={{
              transform: `${transforms[index]} scale(${hoveredIndex === index ? 1.1 : 1})`,
              transition: "transform 0.3s ease",
              animationDelay: delays[index],
              zIndex: hoveredIndex === index ? 10 : 1,
              filter:
                hoveredIndex === null
                  ? "none"
                  : hoveredIndex === index
                  ? "none"
                  : "blur(2px) brightness(75%)",
            }}
          >
            <img
              src={imageMap[project.image] || project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-black mb-2">{project.name}</h3>
            <p className="text-black mb-2">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white text-black text-sm font-semibold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex justify-start gap-4 mt-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub"     className="w-8 h-8 p-1 rounded-full border-none bg-white hover:border transition duration-300"
 />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <img src={linkIcon} alt="Live Site" className="w-6 h-6" />
                </a>
              )}
              {project.video && (
                <a href={project.video} target="_blank" rel="noopener noreferrer">
                  <img src={videoIcon} alt="Demo Video" className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
