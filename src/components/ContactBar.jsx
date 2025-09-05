import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import '../styles/ContactBar.css'; 

const ContactBar = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(prev => !prev);
    }, 4000); 
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
<div
  style={{
    background:
      'linear-gradient(to right, rgba(191, 240, 152, 0.65), rgba(111, 214, 255, 0.65))',
  }}
  className="lexend-peta-font h-full w-full flex items-center justify-center text-black text-xl relative overflow-hidden"
>
  {/* Get in Touch Text */}
  <div style={{ transitionDuration: '2200ms' }}
    className={`absolute transition-opacity ${
      showText ? 'opacity-100' : 'opacity-0 pointer-events-none'
    } flex items-center h-full` }
  >
    Get in Touch
  </div>

  {/* Social Icons */}
  <div style={{ transitionDuration: '2200ms' }}
    className={`absolute transition-opacity fade-in-out ${
      showText ? 'opacity-0 pointer-events-none' : 'opacity-100'
    } flex items-center gap-7 text-3xl h-full`}
  >
    <a href="https://www.linkedin.com/in/thurunuym" target="_blank" rel="noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://github.com/thurunuym" target="_blank" rel="noreferrer">
      <FaGithub />
    </a>
    <a href="https://medium.com" target="_blank" rel="noreferrer">
      <FaMedium />
    </a>
  </div>
</div>


  );
};

export default ContactBar;
