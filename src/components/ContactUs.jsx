import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import loopBg from "../assets/videos/loop.mp4"; // Make sure the path is correct

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_865982r",
        "template_bjlk5bd",
        form.current,
        "t3KORAOVydZi2lI39"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess(true);
          e.target.reset();
          setTimeout(() => {
            setSuccess(false);
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={loopBg}
        autoPlay
        loop
        muted
        playsInline
      ></video>
  <h2 className="block md:hidden text-black text-5xl font-bold absolute top-10 mx-auto z-10">
    Contact Me
  </h2>     
   {/* Overlay */}
      <div className="relative z-10 flex w-full px-4  md:px-20 justify-between items-center">
        {/* Left Side: Vertical "Contact Me" */}
        <div className="hidden md:flex flex-col items-left">
          {/* <h2 className="text-black text-[1rem] leading-[9rem] font-bold rotate-[-90deg] whitespace-nowrap">
            Have Something to Say?
          </h2> */}
          <h2 className="text-black text-[9rem] leading-[9rem] font-bold rotate-[-90deg] whitespace-nowrap">
            Contact <br /> Me
          </h2>
        </div>

        {/* Right Side: Form Box */}
        <div className="bg-black bg-opacity-90 p-10 rounded-md w-full md:w-[60%] mt-12 h-[80vh] shadow-[0_0_30px_#9DE3FF] flex flex-col justify-center">
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            {/* Name */}
            <div className="mb-6">
              <label className="block text-transparent bg-clip-text bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] font-semibold text-xl mb-1">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
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
                name="user_email"
                placeholder="Enter your email"
                required
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
                name="message"
                rows="5"
                placeholder="Type your message"
                required
                className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400 pb-2 resize-none"
              />
              <div className="h-[2px] w-full bg-gradient-to-r from-[#BFF098] to-[#6FD6FF]" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] text-black font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform duration-300"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            {/* Success Message */}
            {success && (
              <p className="text-green-400 font-semibold mt-4">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
