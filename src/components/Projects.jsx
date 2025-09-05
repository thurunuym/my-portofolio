import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import chatwhizImg from "../assets/chatwhiz.png";
import signImg from "../assets/sign.webp";
import hardwareImg from "../assets/hardware.webp";
import ecommerceImg from "../assets/ecommerceImg.jpg";
import lmsImg from "../assets/lmsImg.png";
import githubIcon from "../assets/icons/github.svg";
import linkIcon from "../assets/icons/link.svg";
import videoIcon from "../assets/icons/video.svg";
import chatwhizVideo from "../assets/videos/chatwhiz.mp4";
import signVideo from "../assets/videos/signVideo.mp4";
import hardwareVideo from "../assets/videos/hardwareVideo.mp4";

const projects = [
  {
    name: "Chatwhiz",
    description: "A real-time chat application built for seamless chatting.",
    image: chatwhizImg,
    technologies: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/thurunuym/ChatWhiz",
    live: "https://chatwhiz-kpvi.onrender.com/",
    video: chatwhizVideo,
  },
  {
    name: "Sign Language Detector",
    description: "A real-time sign language detector.",
    image: signImg,
    technologies: ["Python", "YOLOv8", "Flask"],
    github: "https://github.com/thurunuym/sign-language-detector",
    live: "",
    video: signVideo,
  },
  {
    name: "Hardware Store Management System",
    description: "A real-time chat application built for seamless chatting.",
    image: hardwareImg,
    technologies: ["C#", ".NET"],
    github: "https://github.com/thurunuym/HardwareManagement",
    live: "",
    video: hardwareVideo,
  },
  {
    name: "SHILPA ",
    description: "A fully functional Learning Management System.",
    image: lmsImg,
    technologies: ["React", "Spring Boot", "MongoDB"],
    github:"https://github.com/ThusalDilhara/LMS-frontend"
    
  },
    {
    name: "E-Commerce Platform ",
    description: "A fully functional E-Commerce platform for sports item shop",
    image: ecommerceImg,
    technologies: ["React", "Spring Boot", "MySQL" , "Redis"],
    github:"https://github.com/ShashithaU/SportsCente-Frontend"
    
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [videoModal, setVideoModal] = useState(null);

  const openVideo = (videoSrc) => setVideoModal(videoSrc);

  const closeVideo = () => {
  setVideoModal(null);

  setTimeout(() => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 100); // tiny delay for smoother effect
};


  

  return (
    <section id="projects" className="py-20 px-8 md:px-20 relative">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] bg-clip-text text-transparent">
        Projects
      </h2>
      

      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <div
  key={index}
  onMouseEnter={() => setHoveredIndex(index)}
  onMouseLeave={() => setHoveredIndex(null)}
  className={`w-80 bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] shadow-[0_0_20px_#9DE3FF] transition-all duration-300 rounded-xl p-4 cursor-pointer ${styles.floatingCard}`}
  style={{
    zIndex: hoveredIndex === index ? 10 : 1,
    opacity:
      hoveredIndex === null || hoveredIndex === index ? 1 : 0.5, // FULL opacity initially
    filter:
      hoveredIndex === null || hoveredIndex === index
        ? "none"
        : "blur(2px) brightness(75%)",
  }}
>

            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-bold text-black mb-2">{project.name}</h3>
            <p className="text-black mb-2">{project.description}</p>

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

            <div className="flex justify-start gap-4 mt-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="w-8 h-8 p-1 rounded-full bg-white transition duration-300"
                  />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <img src={linkIcon} alt="Live Site" className="w-6 h-6" />
                </a>
              )}
              {project.video && (
                <button onClick={() => openVideo(project.video)}>
                  <img src={videoIcon} alt="Demo Video" className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* VIDEO MODAL */}
      {videoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeVideo}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white text-black font-bold text-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition duration-300 z-10"
              aria-label="Close video"
            >
              ✕
            </button>

            {/* Video player */}
            <video
              src={videoModal}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh] rounded-b-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
