import React from "react";
import { motion } from "motion/react";
import fullStackImg from "../assets/services/full-stack.jpg";
import graphicImg from "../assets/services/graphic.jpg";
import mobileImg from "../assets/services/mobile-dev.png";
import uiuxImg from "../assets/services/uiux.jpg";
import "../styles/Services.css";

const services = [
  {
    title: "Full-Stack Web Applications",
    description:
      "Dynamic, scalable apps built with modern front-end and back-end technologies tailored for your business.",
    img: fullStackImg,
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces and seamless user journeys crafted for web and mobile platforms.",
    img: uiuxImg,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform apps using React Native or Flutter that work smoothly on both iOS and Android.",
    img: mobileImg,
  },
  {
    title: "Graphic Design",
    description:
      "High-impact visuals and brand assets created using Photoshop to elevate your brand identity.",
    img: graphicImg,
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="service-cards px-6 md:px-10 lg:px-28 py-12 justify-center items-center">
        <h1 className="text-4xl bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] bg-clip-text text-transparent mx-auto text-center mb-12 font-extrabold">
          Services
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:px-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 0 }}          // hidden before entering
              whileInView={{ opacity: 1, y: 0 }}       // animate when in view
              viewport={{ once: true, amount: 0 }}   // trigger once, 30% visible
              transition={{ duration: 1, delay: index * 0.3 }}
              className="relative group p-[2px] rounded-md 
                bg-gradient-to-br from-[#6FD6FF] to-[#BFF098]
                group-hover:from-pink-400 group-hover:to-yellow-300 
                transition-all duration-500 sm:h-full"
            >
              <div className="bg-black rounded-md h-full w-full overflow-hidden">
                <h2 className="text-xl font-semibold text-white mb-3 px-6 py-3 pt-5">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-sm px-6 mb-3">{service.description}</p>

                <div className="relative hidden lg:block mt-4 rounded overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[100px] object-cover tilt-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#6FD6FF] to-[#BFF098] opacity-40 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
