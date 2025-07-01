import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

const ContactBar = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(prev => !prev);
    }, 2000); // 1.5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className='bg-amber-300 h-full w-full flex items-center justify-center text-black text-lg font-bold'>
      {showText ? (
        <div className='transition-opacity flex items-center duration-500 h-full'>Get in Touch</div>
      ) : (
        <div className='flex items-center gap-4 text-2xl h-full'>
          <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
            <FaLinkedin />
          </a>
          <a href='https://github.com' target='_blank' rel='noreferrer'>
            <FaGithub />
          </a>
          <a href='https://medium.com' target='_blank' rel='noreferrer'>
            <FaMedium />
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactBar;
