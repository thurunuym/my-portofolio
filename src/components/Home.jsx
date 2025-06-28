import React, { useState } from "react";
import blackBg from "../assets/image_under.png";
import coloredBg from "../assets/image_over4.png";
import "../styles/Home.css";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div className="home-container" id="home" onMouseMove={handleMouseMove}>
      <div className="overlay-text">
        <div className="ml-15 text-white">
          <p className="text-4xl md:text-4xl font-bold">Hello There !</p>
          <p style={{ fontSize: "4rem" }} className="text-[50rem] md:text-6xl font-bold">
            I'm&nbsp;
            <span
              style={{ fontSize: "7rem" }}
              className="md:text-6xl bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] bg-clip-text text-transparent select-none"
            >
              Thurunu,
            </span>
          </p>

          <h1 className="martian-mono" aria-label="Hi! I'm a Full-Stack Developer">
            <code>&lt;</code>
            <span className="typewriter thick"></span>
            <code>/&gt;</code>
          </h1>
        </div>
      </div>

      <img src={blackBg} alt="Grayscale Background" className="base-image" />

      <div
        className="hover-image"
        style={{
          maskImage: `radial-gradient(circle 700px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)`,
          WebkitMaskImage: `radial-gradient(circle 700px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)`,
        }}
      >
        <img src={coloredBg} alt="Colored Background" />
      </div>

      <div className="bottom"></div>
    </div>
  );
};

export default Home;
