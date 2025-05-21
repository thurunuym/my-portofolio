import React from "react";
import blackBg from "../assets/black_bg.png";
import coloredBg from "../assets/colored_bg.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="overlay-text">
        <div className="ml-15 text-white">
            <p className="text-4xl md:text-6xl font-semi-bold">Hello There !</p>
            <p style={{fontSize:'4rem'}} className="text-[50rem] md:text-6xl font-bold">I'm&nbsp; 
                <span style={{fontSize:'7rem'}}  className="md:text-6xl bg-gradient-to-r from-[#a9f1df] to-[#ffbbbb] bg-clip-text text-transparent select-none">
                Thurunu,
                </span>
            </p>

            <h1 aria-label="Hi! I'm a Full-Stack Developer">
  <span class="typewriter thick"></span>
</h1>

        </div>
      </div>
      <img src={blackBg} alt="Grayscale Background" className="base-image" />
      <img src={coloredBg} alt="Colored Background" className="hover-image" />
    </div>
  );
};

export default Home;

















