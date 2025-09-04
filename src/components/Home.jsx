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
    <div
      className="home-container"
            id="home"
      onMouseMove={handleMouseMove}
      onTouchMove={(e) => {
        if (e.touches && e.touches.length > 0) {
          const touch = e.touches[0];
          const rect = e.currentTarget.getBoundingClientRect();
          const x = touch.clientX - rect.left;
          const y = touch.clientY - rect.top;
          setMousePosition({ x, y });
        }
      }}
    >
      <div className="overlay-text ml-4 lg:ml-0">
        <div className="ml-4 md:ml-15 text-white">
          <p className="text-base md:text-xl lg:text-4xl font-bold dm-serif-text-regular">Hello There !</p>
          <p className="text-2xl md:text-5xl lg:text-6xl font-bold dm-serif-text-regular">
            I'm&nbsp;
            <span
              
              className="text-4xl md:text-7xl lg:text-9xl color-cycle select-none"
            >
              Thurunu,
            </span>
          </p>
          <h1 className="martian-mono text-sm md:text-2xl lg:text-5xl" aria-label="Hi! I'm a Full-Stack Developer">
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

 
    </div>
  );
};

export default Home;
