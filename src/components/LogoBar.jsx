import React from 'react';
import logo1 from "../assets/thurunuym.png";
import "../styles/LogoBar.css";
import ContactBar from './ContactBar';
import cv from "../assets/cv.pdf";

const LogoBar = () => {
  return (
<div className="w-full bg-black">
  {/* Main Flex Container: Column on mobile, Row on large */}
  <div className="flex flex-col lg:flex-row w-full">
    {/* LEFT - CV (Large screen only) */}
    <div className="hidden lg:flex lg:w-1/4 h-20 items-center justify-center">
      <a
        href={cv}                 
        target="_blank"           // opens in new tab/window
        rel="noopener noreferrer" // security best practice
        className="cursor-pointer hover:bg-[#111111] transition-colors duration-300 h-full flex items-center justify-center w-full"
      >
        <h3 className="lexend-peta-font bg-gradient-to-t from-[#6FD6FF] to-[#BFF098] bg-clip-text text-transparent text-lg font-semibold text-center">
          Download CV
        </h3>
      </a>
    </div>



        {/* CENTER - LOGO SCROLL (Always full width on mobile, center on lg) */}
        <div className="w-full lg:w-2/4 h-20 relative flex items-center justify-center overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 h-full w-[20%] bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-[20%] bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling Logos */}
          <div className="logo-track flex animate-scroll w-max z-0">
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <div className="logo-item mx-6">
                  <img src={logo1} alt="Logo" className="h-10" />
                </div>
                <div className="logo-item mx-6">
                  <img src={logo1} alt="Logo" className="h-10" />
                </div>
                <div className="logo-item mx-6">
                  <img src={logo1} alt="Logo" className="h-10" />
                </div>
                <div className="logo-item mx-6">
                  <img src={logo1} alt="Logo" className="h-10" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* RIGHT - ContactBar (Large screen only) */}
        <div className="hidden lg:flex lg:w-1/4 h-20 items-center justify-center">
          <ContactBar />
        </div>
      </div>

      {/* Bottom row for CV and ContactBar - Mobile only */}
      <div className="flex lg:hidden w-full h-20">
        {/* CV */}
        <div className="w-1/2 bg-black flex items-center justify-center">
          <a
            href={cv}
            download
            className="cursor-pointer hover:bg-[#111111] transition-colors duration-300 h-full flex items-center justify-center w-full"
          >
            <h3 className="lexend-peta-font bg-gradient-to-t from-[#6FD6FF] to-[#BFF098] bg-clip-text text-transparent text-sm font-semibold text-center px-2">
              Download CV
            </h3>
          </a>
        </div>

        {/* Contact */}
        <div className="w-1/2 flex items-center justify-center">
          <ContactBar />
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
