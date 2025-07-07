import React from 'react';
import logo1 from "../assets/thurunuym.png";
import "../styles/LogoBar.css"; 
import ContactBar from './ContactBar'; 

const LogoBar = () => {
  return (
    <div className="logo-bar">
      <div className='h-full w-full flex'>
        {/* Left Section - Visible only on large screens */}
        <div className='bg-red-700 hidden lg:block lg:w-1/5 h-20'></div>

        {/* Center Scrolling Section */}
        <div className='w-full lg:w-3/5 h-20 relative overflow-hidden flex items-center'>
          <div className='logo-track'>
            <div className='logo-item'>
              <img src={logo1} alt="Logo 1" className='h-10' />
            </div>
            <div className='logo-item'>
              <img src={logo1} alt="Logo 1" className='h-10' />
            </div>
            <div className='logo-item'>
              <img src={logo1} alt="Logo 1" className='h-10' />
            </div>
            <div className='logo-item'>
              <img src={logo1} alt="Logo 1" className='h-10' />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full lg:w-1/5 h-full flex items-center justify-center '>
        <ContactBar/>
        </div>
      </div>
    </div>
  );
};

export default LogoBar;