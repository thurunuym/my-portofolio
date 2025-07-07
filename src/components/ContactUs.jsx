import React from "react";
import loopBg from "../assets/videos/loop.gif"; // Make sure the path is correct

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${loopBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

      <div className="relative z-10 flex w-full px-4 md:px-20 justify-between items-center">
        {/* Left Side: Vertical "Contact Me" */}
        <div className="hidden md:flex flex-col items-left">
          <h2 className="text-black text-[9rem] leading-[9rem] font-bold rotate-[-90deg] whitespace-nowrap">
            Contact <br /> Me
          </h2>
        </div>

        {/* Right Side: Form Box */}
        <div className="bg-black bg-opacity-90 p-10 rounded-md w-full md:w-[60%] h-[80vh] shadow-[0_0_30px_#9DE3FF] flex flex-col justify-center">
          <form className="space-y-8">
            {/* Name */}
 <div className="mb-6">
  <label className="block text-transparent bg-clip-text bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] font-semibold text-xl mb-1">
    Name
  </label>
  <input
    type="text"
    placeholder="Enter your name"
    className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400 pb-2"
  />
  <div className="h-[2px] w-full bg-gradient-to-r from-[#BFF098] to-[#6FD6FF]" />
</div>

{/* Email */}
<div className="mb-6">
  <label className="block text-transparent bg-clip-text bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] font-semibold text-xl mb-1">
    Email
  </label>
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400 pb-2"
  />
  <div className="h-[2px] w-full bg-gradient-to-r from-[#BFF098] to-[#6FD6FF]" />
</div>

{/* Message */}
<div className="mb-6">
  <label className="block text-transparent bg-clip-text bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] font-semibold text-xl mb-1">
    Message
  </label>
  <textarea
    rows="5"
    placeholder="Type your message"
    className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400 pb-2 resize-none"
  />
  <div className="h-[2px] w-full bg-gradient-to-r from-[#BFF098] to-[#6FD6FF]" />
</div>


          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
